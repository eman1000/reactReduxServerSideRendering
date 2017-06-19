import { connect } from "react-redux";
import {} from "../module";
import Home from "../components/Home";
import {
    toggleModal
} from "../module";

const mapStateToProps = (state) => ({
    showModal:state.home.showModal
});

const mapDispatchToProps = {
    toggleModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
