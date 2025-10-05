// @ts-check
import { defineConfig } from "eslint/config";
import bslint from "./eslint-config/index.mjs";

const config = defineConfig(
  {
    name: "Global Ignores",
    ignores: ["node_modules", ".claude", "eslint-config/tests/fixtures"],
  },
  ...bslint,
);

export default config;
