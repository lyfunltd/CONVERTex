import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

import Home from "./screens/Home";

EStyleSheet.build({
  $secondaryColor: "#3A3232"
});

// eslint-disable-next-line react/display-name
export default () => <Home />;
