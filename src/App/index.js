
import { Switch, Route} from "react-router";
import React     from "react";
import routes  from "../routes/routes";

const App = () => (
  <Switch>
    {
        routes.map((route, index)=> {
            return (
               <Route key={index} {...route}/>
            );
        })
    }
  </Switch>
);

export default App;