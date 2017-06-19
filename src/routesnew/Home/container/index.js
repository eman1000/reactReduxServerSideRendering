import { connect } from "react-redux";
import {} from "../module";
import Home from "../components/Home";
import {
} from "../module";

const mapStateToProps = (state) => ({
   // showModal:state.showModal
   name:state.home.name
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
