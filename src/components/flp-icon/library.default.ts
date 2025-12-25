import { isDevelopment } from "../../constants/environment.js";
import { getBasePath } from "../../utils/base-path.js";
import type { IconLibrary } from "./library.js";

const library: IconLibrary = {
  name: "default",
  resolver: (name) =>
    isDevelopment
      ? getBasePath(`/assets/icons/${name}.svg`)
      : getBasePath(`/design-system/assets/icons/${name}.svg`),
};

export default library;
