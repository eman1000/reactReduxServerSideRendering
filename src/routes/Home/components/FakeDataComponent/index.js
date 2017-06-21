import React from "react";
class FakeDataComponent extends React.Component {
	componentDidMount() {
		this.props.getFakeData();
		
	}
	componentWillMount() {
		//this.props.setName();
	}
    render() {
    	
        return (
            <div>
            <h1>ecece</h1>
            { this.props.name }

        {
	        this.props.dummyData.map((obj, index) => {
	        	//console.log(obj);
	            return (
	              <div key={index}>
	                <span>{obj.title}</span>
	              </div>
	            );
	          })
        }
            </div>
        );
    }
}
export default FakeDataComponent;