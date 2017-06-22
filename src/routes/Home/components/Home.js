
import React                  from 'react';
class Home extends React.Component {

  componentDidMount() {
    console.log(this);
    this.props.getFakeData();
  }
  render() {
    const { dummyData } = this.props;
    const { hits } = dummyData || [];
    return (
      <div id="todo-list">
     { hits.map((obj, index)=>{

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

export default Home;
