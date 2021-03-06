import PropTypes from "prop-types";
import React, { Component } from "react";
import { ScrollView, StatusBar, Platform, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { ListItem, Separator } from "../components/List";

const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";
const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  handlePressThemes = () => {
    console.log("press themes");
    const { navigation } = this.props;
    navigation.navigate("Themes");
  };

  handlePressSite = () => {
    Linking.openURL("http://handlebarlabs.com").catch(() =>
      alert("An error occured.")
    );
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle='default' />
        <ListItem
          text='Themes'
          onPress={this.handlePressThemes}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-arrow-forward`}
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          }
        />
        <Separator />
        <ListItem
          text='Handlebar Labs'
          onPress={this.handlePressSite}
          customIcon={
            <Ionicons
              name={`${ICON_PREFIX}-link`}
              size={ICON_SIZE}
              color={ICON_COLOR}
            />
          }
        />
        <Separator />
      </ScrollView>
    );
  }
}
export default Options;
