import React from "react";
import SampleComponent from "./SampleComponent";
import DetailView from "./DetailView";
class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render () {
    return (
        <div id="todo-list">
        	efefefefefefe
        	{this.props.name}
        </div>
    );
  }
}

export default Home;