// @flow
import React from "react";
import {IntlProvider, defineMessages, FormattedMessage} from "react-intl";

import {Helmet} from "react-helmet";
import type { HomeProps } from "../../../../types";

//Stateless components
import SampleComponent from "./SampleComponent";
class Home extends React.Component {
    componentDidMount() {
       console.log(this.props);
        this.props.getFakeData();
        console.log(this.props.query);
        
       // this.props.getFHResults();
    }
    onLogout() {
        this.props.history.push('/foo');
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
                <h2>{this.props.pathname}</h2>
                <button onClick={()=>this.onLogout()} className="btn btn-danger">New route</button>
                <SampleComponent
                dummyData = {this.props.dummyData}
                />
            </div>
        </IntlProvider>
    );
  }
}

export default Home;
