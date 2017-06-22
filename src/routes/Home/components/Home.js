
import React                  from 'react';
import { bindActionCreators } from 'redux';
import * as FakeActions       from "../../../actions/FakeActions";
//import FakeDataComponent from "./FakeDataComponent";
import { connect }            from 'react-redux';
//@connect(state => ({ todos: state.todos }))
class Home extends React.Component {

  componentDidMount() {
    console.log(this);
    //this.props.getFakeData();
  }
  render() {
    const { dummyData, name, dispatch } = this.props;
    
    return (
      <div id="todo-list">
     {this.props.dummyData.hits.map((obj, index)=>{

        return (
          <div key={index}>
            <h1>{obj.user}</h1>
            <div><img src={obj.previewURL}/></div><br/>

          </div>
        )
     })

     }
        
        
      </div>
    );
  }
}


Home.fetchData = ({ store }) => store.dispatch(FakeActions.getFakeData());
const mapStateToProps = (state) => ({
    dummyData:state.home.dummyData || {},
    name:state.home.name
  // name:state.home.name
});

// Add dispatchers to the component props for fetching the data _client side_
const mapDispatchToProps = (dispatch) => {  
  return { getFakeData: () => dispatch(FakeActions.getFakeData()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
