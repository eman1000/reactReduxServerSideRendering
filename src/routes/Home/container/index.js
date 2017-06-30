// @flow

import { connect } from "react-redux";
import Home from "../components/Home";
import {updateIntl} from "react-intl-redux";
import getFakeDataApi from "../../../../api";
import {
    getFakeData
} from "../module";
function updateMessages(locale) {
    return (dispatch, state)=> {
        dispatch(updateIntl({
            locale,
            messages: state().intl.messages[locale]
        }));
    };
}

//Home.fetchData = getFakeDataApi;
const mapStateToProps = (state) => ({
	locale: state.intl.locale,
	messages: state.intl.messages,
    dummyData:state.home.dummyData || {},
    name:state.home.name
  // name:state.home.name
});

// Add dispatchers to the component props for fetching the data _client side_
const mapDispatchToProps = {
    getFakeData,
    updateMessages
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);