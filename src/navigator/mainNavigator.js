import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings78050Navigator from '../features/Settings78050/navigator';
import UserProfile78043Navigator from '../features/UserProfile78043/navigator';
import Settings78042Navigator from '../features/Settings78042/navigator';
import Settings78040Navigator from '../features/Settings78040/navigator';
import SignIn278038Navigator from '../features/SignIn278038/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Settings78050: { screen: Settings78050Navigator },
UserProfile78043: { screen: UserProfile78043Navigator },
Settings78042: { screen: Settings78042Navigator },
Settings78040: { screen: Settings78040Navigator },
SignIn278038: { screen: SignIn278038Navigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
