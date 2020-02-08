import React from "react";
import { StatusBar } from "react-native";

import { Container } from "../components/Container";

// eslint-disable-next-line react/display-name
export default () => (
  <Container>
    <StatusBar translucent={false} barStyle='light-content' />
  </Container>
);
