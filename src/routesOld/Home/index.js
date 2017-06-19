import { injectReducer } from "../../store/reducers";

export default (store) => ({
  path: "home",
  getComponent (nextState, cb) {
  require.ensure([], (require) => {
      const Home = require("./container").default;
      const reducer = require("./module").default;

      injectReducer(store, { key: "home", reducer });

      cb(null, Home);

    }, "home");
  }
});
