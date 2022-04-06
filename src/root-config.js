import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@mf-demo/home",
  () => System.import("@mf-demo/home"),
  isActive.home
);

registerApplication({
  name: "@mf-demo/login",
  app: () => System.import("@mf-demo/login"),
  activeWhen: isActive.login
});

registerApplication({
  name: "@mf-demo/signup",
  app: () => System.import("@mf-demo/signup"),
  activeWhen: isActive.signup
});

registerApplication({
  name: "@mf-demo/navbar",
  app: () => System.import("@mf-demo/navbar"),
  activeWhen: isActive.navbar
});

start();
