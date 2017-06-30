import Home from "./Home/container";
import  NotFound from "./NotFound";
import getFakeDataApi from "../../api";

const routes = [
	{
		path: "/:locale?/home",
		component: Home,
		loadData: getFakeDataApi(),
	},
	{
		path: "*",
		component: NotFound
	},

];

export default routes;