import React from "react";
import SampleComponent from "./SampleComponent";
import DetailView from "./DetailView";
class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
    return (
        <div className="container">
            <SampleComponent
                toggleModal={this.props.toggleModal}
            />
            {
                this.props.showModal &&
                <DetailView
                    toggleModal={this.props.toggleModal}
                />
            }
        </div>
    );
  }
}

export default Home;