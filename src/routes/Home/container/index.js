// @flow

import { connect } from "react-redux";
import Home from "../components/Home";
import {updateIntl} from "react-intl-redux";
import getFakeDataApi from "../../../../api";
import { withRouter } from "react-router-dom"
import {
    getFakeData,
    getFHResults,
    redirectToValidPackage
} from "../module";
const queryString = require("query-string");
//Home.fetchData = getFakeDataApi;
const mapStateToProps = (state, ownProps) => ({
	locale: state.intl.locale,
	messages: state.intl.messages,
    dummyData:state.home.dummyData || {},
    name:state.home.name,
    pathname:ownProps.location.pathname,
    query: queryString.parse(ownProps.location.search)
});

// Add dispatchers to the component props for fetching the data _client side_
const mapDispatchToProps = {
    getFakeData,
    getFHResults,
    redirectToValidPackage
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));