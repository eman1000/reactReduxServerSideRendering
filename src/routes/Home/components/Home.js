import React from "react";
import {IntlProvider, defineMessages, FormattedMessage} from "react-intl";


//Stateless components
import SampleComponent from "./SampleComponent";
class Home extends React.Component {

  componentDidMount() {
    console.log(this);
    this.props.getFakeData();
  }
  render() {
    const { dummyData } = this.props;
    const { results } = dummyData || [];
    return (
    <IntlProvider locale={this.props.locale} defaultLocale={"en-US"} messages={this.props.messages}>
      <div id="todo-list">
     { results.map((obj, index)=>{

        return (
          <div key={index}>
            <SampleComponent
                updateMessages={this.props.updateMessages}

            />
            <h1>{obj.first}</h1>
            <div><img src={obj.picture.large}/></div><br/>

          </div>
        );
     })

     }
      
      </div>
    </IntlProvider>
    );
  }
}

export default Home;
