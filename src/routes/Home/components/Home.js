// @flow
import React from "react";
import {IntlProvider, defineMessages, FormattedMessage} from "react-intl";
import type { HomeProps } from "../../../../types";

//Stateless components
import SampleComponent from "./SampleComponent";
class Home extends React.Component {
    componentDidMount() {
        this.props.getFakeData();
    }
    props:HomeProps;
  render() {
    return (
    <IntlProvider locale={this.props.locale} defaultLocale={"en-US"} messages={this.props.messages}>
      <div id="todo-list">
        <h1>Home</h1>
        <SampleComponent
           dummyData = {this.props.dummyData}
        />
      </div>
    </IntlProvider>
    );
  }
}

export default Home;
