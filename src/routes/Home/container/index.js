// @flow

import { connect } from "react-redux";
import Home from "../components/Home";
import {updateIntl} from "react-intl-redux";
import getFakeDataApi from "../../../../api";
import {
    getFakeData,
    getFHResults
} from "../module";
//Home.fetchData = getFakeDataApi;
const mapStateToProps = (state) => ({
	locale: state.intl.locale,
	messages: state.intl.messages,
    dummyData:state.home.dummyData || {},
    name:state.home.name,
    fhResults:state.home.fhResults
  // name:state.home.name
});

// Add dispatchers to the component props for fetching the data _client side_
const mapDispatchToProps = {
    getFakeData,
    getFHResults
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);