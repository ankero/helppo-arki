import { DrawerNavigator } from "react-navigation";
import LoginScreen from "../Containers/LoginScreen";
import CoursesScreen from "../Containers/CoursesScreen";
import DiaryScreen from "../Containers/DiaryScreen";
import CourseDescriptionScreen from "../Containers/CourseDescriptionScreen";
import TrainingScreen from "../Containers/TrainingScreen";
import SideMenu from "../Components/SideMenu";
import styles from "./Styles/NavigationStyles";

// Manifest of possible screens
const PrimaryNav = DrawerNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    CoursesScreen: { screen: CoursesScreen },
    DiaryScreen: { screen: DiaryScreen },
    CourseDescriptionScreen: { screen: CourseDescriptionScreen },
    TrainingScreen: { screen: TrainingScreen }
  },
  {
    // Default config for all screens
    contentComponent: SideMenu,
    drawerWidth: 200,
    headerMode: "none",
    initialRouteName: "LoginScreen",
    navigationOptions: {
      //headerStyle: styles.header
    }
  }
);

export default PrimaryNav;
