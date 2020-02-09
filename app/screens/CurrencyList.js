import React, { Component } from "react";

import { FlatList, StatusBar, View } from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import currencies from "../data/currencies";
import { changeBaseCurrency, changeQuoteCurrency } from "../actions/currencies";

import { ListItem, Separator } from "../components/List";

const TEMP_CURRENT_CURRENCY = "CAD";

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string
  };
  handlePress = currency => {
    const { navigation, dispatch } = this.props;
    const { type } = navigation.state.params;
    if (type === "base") {
      dispatch(changeBaseCurrency(currency));
    } else if (type === "quote") {
      dispatch(changeQuoteCurrency(currency));
    }

    navigation.goBack(null);
  };

  render() {
    const { baseCurrency, quoteCurrency, navigation } = this.props;
    let comparisonCurrency = baseCurrency;
    if (navigation.state.params.type === "quote") {
      comparisonCurrency = quoteCurrency;
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle='default' />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === comparisonCurrency}
              onPress={this.handlePress}
              onPress={() => this.handlePress(item)}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  baseCurrency: state.currencies.baseCurrency,
  quoteCurrency: state.currencies.quoteCurrency
});

export default connect(mapStateToProps)(CurrencyList);
