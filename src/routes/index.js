import CoreLayout from "../CoreLayout";
import Home from "./Home";
export const createRoutes = (store) => ({
    path: "/",
    indexRoute: { onEnter: (nextState, replace) => replace("/home") },
    component: CoreLayout,
    childRoutes: [
        Home(store)
    ]
});

export default createRoutes;