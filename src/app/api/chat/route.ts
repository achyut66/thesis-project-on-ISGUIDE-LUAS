import { NextRequest, NextResponse } from "next/server";

const OLLAMA_URL = "http://127.0.0.1:11434/api/chat";
const MODEL = "llama3.2:3b";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { messages } = body as {
      messages: ChatMessage[];
    };

    if (
      !Array.isArray(messages) ||
      messages.length === 0 ||
      messages.length > 20 ||
      messages.some(
        (msg) =>
          !msg ||
          !["user", "assistant"].includes(msg.role) ||
          typeof msg.content !== "string" ||
          msg.content.length > 2000,
      ) ||
      messages[messages.length - 1].role !== "user"
    ) {
      return NextResponse.json(
        { error: "Invalid conversation." },
        { status: 400 },
      );
    }

    const systemPrompt = `
  You are FinGuide AI, a friendly assistant helping
  international residents understand Finnish public services.

  COMMUNICATION:
  - Respond naturally, clearly, and conversationally.
  - For greetings such as "hello", "hi", or "thanks",
    respond in one short sentence.
  - For simple questions, answer in 2-4 sentences.
  - For complicated procedures, explain the steps clearly.
  - Use Markdown headings and bullet points when helpful.
  - Do not generate unnecessarily long responses.
  - Remember the conversation context.

  FINNISH PUBLIC SERVICES:

  Migri:
  Finnish Immigration Service.
  Responsible for residence permits, immigration matters,
  and registration of EU citizens' right of residence.
  Official website: https://migri.fi/en/home

  DVV:
  Digital and Population Data Services Agency.
  Responsible for population information, registration of
  addresses, and municipality-of-residence matters.
  Official website: https://dvv.fi/en/individuals

  Kela:
  Social Insurance Institution of Finland.
  Responsible for social security benefits and related services.
  Official website: https://www.kela.fi/main-page

  Vero:
  Finnish Tax Administration.
  Responsible for tax cards, taxation, and tax-related services.
  Official website: https://www.vero.fi/en/

  IMPORTANT RULES:
  - When discussing a Finnish authority, include its relevant
    official website as a clickable Markdown link.
  - Use only the official URLs provided above.
  - Never invent URLs.
  - Do not confuse Migri with DVV.
  - Never invent processing times, fees, eligibility requirements,
    or legal procedures.
  - If information may change, explain that the user should
    verify it on the official website.
  - If the user's situation is unclear, ask a relevant question.
  - Do not claim to have checked live government information.
  - You are an independent AI assistant, not a government service.
  `;

    const response = await fetch(OLLAMA_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        model: MODEL,

        messages: [
          {
            role: "system",
            content: systemPrompt,
          },
          ...messages.slice(-10),
        ],

        stream: true,

        options: {
          temperature: 0.4,
          num_predict: 400,
        },
      }),

      signal: AbortSignal.timeout(120000),
    });

    if (!response.ok || !response.body) {
      return NextResponse.json(
        { error: "Ollama request failed." },
        { status: 502 },
      );
    }

    const decoder = new TextDecoder();
    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body!.getReader();

        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();

            if (done) break;

            buffer += decoder.decode(value, {
              stream: true,
            });

            const lines = buffer.split("\n");

            buffer = lines.pop() || "";

            for (const line of lines) {
              if (!line.trim()) continue;

              try {
                const data = JSON.parse(line);

                const content = data.message?.content;

                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              } catch {
                console.error("Invalid Ollama chunk");
              }
            }
          }

          buffer += decoder.decode();

          if (buffer.trim()) {
            const data = JSON.parse(buffer);
            const content = data.message?.content;

            if (content) {
              controller.enqueue(encoder.encode(content));
            }
          }

          controller.close();
        } catch (error) {
          console.error("Streaming error:", error);
          controller.error(error);
        } finally {
          reader.releaseLock();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      { error: "Unable to process the conversation." },
      { status: 500 },
    );
  }
}
