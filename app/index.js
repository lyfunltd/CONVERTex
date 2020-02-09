import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";

//import Home from "./screens/Home";
import CurrencyList from "./screens/CurrencyList";

EStyleSheet.build({
  $secondaryColor: "#3A3232",
  $white: "#FFFFFF",
  $lightGray: "#F0F0F0",
  $border: "#979797",
  $inputText: "#797979",
  $darkText: "#343434",
  $border: "#E2E2E2"
});

// eslint-disable-next-line react/display-name
//export default () => <Home />;
export default () => <CurrencyList />;
