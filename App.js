import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
// import Meals from "./src/screens/Meals";
import FrontPage from "./src/components/FrontPage";

const navigator = createStackNavigator(
  {
    Menu: FrontPage,
  },
  {
    initialRouteName: "Menu",
    defaultNavigationOptions: {
      title: "Meal Shop",
    },
  }
);
export default createAppContainer(navigator);
