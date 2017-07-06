// @flow
import React from "react";
import {IntlProvider, defineMessages, FormattedMessage} from "react-intl";

import {Helmet} from "react-helmet";
import type { HomeProps } from "../../../../types";

//Stateless components
import SampleComponent from "./SampleComponent";
class Home extends React.Component {
    componentDidMount() {
        this.props.getFakeData();
       // this.props.getFHResults();
    }
    props:HomeProps;
    render() {
    return (
        <IntlProvider locale={this.props.locale} defaultLocale={"en-US"} messages={this.props.messages}>

            <div id="">
                <Helmet>
                    <title>Testing Home</title>
                    <meta name="description" content="Home Component "/>
                    <meta name="keywords" content="React, JavaScript"/>
                </Helmet>
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
