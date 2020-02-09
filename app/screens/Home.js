import PropTypes from "prop-types";
import React, { Component } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { InputWithButton } from "../components/TextInput";
import { Container } from "../components/Container";
import { Logo } from "../components/Logo";
import { ClearButton } from "../components/Button";
import { LastConverted } from "../components/Text";
import { Header } from "../components/Header";
import { changeCurrencyAmount, swapCurrency } from "../actions/currencies";
import { connect } from "react-redux";
const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    lastConvertedDate: PropTypes.object,
    isFetching: PropTypes.bool,
    primaryColor: PropTypes.string
  };

  handleChangeText = text => {
    // TODO: Dispatch this action to redux
    const { dispatch } = this.props;
    dispatch(changeCurrencyAmount(text));
  };

  handleSwapCurrency = () => {
    // TODO: Dispatch this action to redux
    const { dispatch } = this.props;
    dispatch(swapCurrency());
  };

  handlePressBaseCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate("CurrencyList", {
      title: "Base Currency",
      type: "base"
    });
  };

  handlePressQuoteCurrency = () => {
    const { navigation } = this.props;
    navigation.navigate("CurrencyList", {
      title: "Quote Currency",
      type: "quote"
    });
  };

  handleSwapCurrency = () => {
    const { dispatch } = this.props;
    dispatch(swapCurrency());
  };
  handleOptionsPress = () => {
    const { navigation } = this.props;
    navigation.navigate("Options");
  };

  render() {
    const {
      isFetching,
      amount,
      conversionRate,
      baseCurrency,
      quoteCurrency,
      lastConvertedDate,
      primaryColor
    } = this.props;

    let quotePrice = "...";
    if (!isFetching) {
      quotePrice = (amount * conversionRate).toFixed(2);
    }
    return (
      <Container backgroundColor={primaryColor}>
        <StatusBar backgroundColor='blue' barStyle='light-content' />
        <Header onPress={this.handleOptionsPress} />
        <KeyboardAvoidingView behavior='padding'>
          <Logo tintColor={primaryColor} />
          <InputWithButton
            buttonText={baseCurrency}
            onPress={this.handlePressBaseCurrency}
            defaultValue={amount.toString()}
            keyboardType='numeric'
            onChangeText={this.handleChangeText}
            textColor={primaryColor}
          />
          <InputWithButton
            editable={false}
            buttonText={quoteCurrency}
            onPress={this.handlePressQuoteCurrency}
            value={quotePrice}
            textColor={primaryColor}
          />
          <LastConverted
            date={TEMP_LAST_CONVERTED}
            base={TEMP_BASE_CURRENCY}
            quote={TEMP_QUOTE_CURRENCY}
            conversionRate={TEMP_CONVERSION_RATE}
            date={lastConvertedDate}
            base={baseCurrency}
            quote={quoteCurrency}
            conversionRate={conversionRate}
          />
          <ClearButton
            onPress={this.handleSwapCurrency}
            text='Reverse Currencies'
          />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

//export default Home;
const mapStateToProps = state => {
  const { baseCurrency, quoteCurrency } = state.currencies;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};

  return {
    baseCurrency,
    quoteCurrency,
    amount: state.currencies.amount,
    conversionRate: rates[quoteCurrency] || 0,
    lastConvertedDate: conversionSelector.date
      ? new Date(conversionSelector.date)
      : new Date(),
    isFetching: conversionSelector.isFetching,
    primaryColor: state.theme.primaryColor
  };
};

export default connect(mapStateToProps)(Home);
