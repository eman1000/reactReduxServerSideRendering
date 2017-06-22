import { connect } from "react-redux";
import Home from "../components/Home";

import {
    getFakeData
} from "../module";

Home.fetchData = ({ store }) => store.dispatch(FakeActions.getFakeData());
const mapStateToProps = (state) => ({
    dummyData:state.home.dummyData || {},
    name:state.home.name
  // name:state.home.name
});

// Add dispatchers to the component props for fetching the data _client side_
const mapDispatchToProps = {
    getFakeData
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);