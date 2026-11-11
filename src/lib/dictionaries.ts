import enCommon from "../locales/en/common.json";
import enHome from "../locales/en/home.json";
import enServices from "../locales/en/services.json";

import fiCommon from "../locales/fi/common.json";
import fiHome from "../locales/fi/home.json";
import fiServices from "../locales/fi/services.json";

import svCommon from "../locales/sv/common.json";
import svHome from "../locales/sv/home.json";
import svServices from "../locales/sv/services.json";

import neCommon from "../locales/ne/common.json";
import neHome from "../locales/ne/home.json";
import neServices from "../locales/ne/services.json";

export const dictionaries = {
  en: {
    common: enCommon,
    home: enHome,
    services: enServices,
  },
  fi: {
    common: fiCommon,
    home: fiHome,
    services: fiServices,
  },
  sv: {
    common: svCommon,
    home: svHome,
    services: svServices,
  },
  ne: {
    common: neCommon,
    home: neHome,
    services: neServices,
  },
};

export type SupportedLanguage = keyof typeof dictionaries;
