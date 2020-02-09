import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import Options from "./screens/Options";
import Themes from "./screens/Themes";
import Navigator from "./config/routes";

import Home from "./screens/Home";
import CurrencyList from "./screens/CurrencyList";

EStyleSheet.build({
  $secondaryColor: "#3A3232",
  $white: "#FFFFFF",
  $lightGray: "#F0F0F0",
  $border: "#979797",
  $inputText: "#797979",
  $darkText: "#343434",
  $border: "#E2E2E2",
  $primaryOrange: "#D57A66",
  $primaryGreen: "#00BD9D",
  $primaryPurple: "#9E768F"
});

// eslint-disable-next-line react/display-name
//export default () => <Home />;

//export default () => <CurrencyList />;
//export default () => <Options />;
//export default () => <Themes />;
export default () => <Navigator />;
