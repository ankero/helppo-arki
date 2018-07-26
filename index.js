import "./App/Config/ReactotronConfig";
import { AppRegistry } from "react-native";
import App from "./App/Containers/App";

import { YellowBox } from "react-native";

YellowBox.ignoreWarnings([
  "Remote debugger is in a background tab which may cause apps to perform slowly",
  "Warning: componentWillMount is deprecated",
  "Warning: componentWillReceiveProps is deprecated",
  "Warning: componentWillUpdate is deprecated",
  "Module RCTImageLoader requires main queue setup",
  "Module RNDeviceInfo requires main queue setup since",
  "Module RNI18n requires main queue setup since it",
  "Required dispatch_sync to load constants for RNDeviceInfo"
]);

AppRegistry.registerComponent("HelppoArki", () => App);
