import "react-i18next";

import ja from "./translation/ja.json";
import ko from "./translation/ko.json";

declare module "react-i18next" {
  // and extend them!
  interface Resources {
    ja: typeof ja;
    ko: typeof ko;
  }
}

declare module "react-i18next" {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: "en";
    // custom resources type
    resources: {
      ja: typeof ja;
      ko: typeof ko;
    };
  }
}
