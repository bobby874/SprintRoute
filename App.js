import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Options from './app/Options'
import Location from './app/Toggle Location'
import Login from './app/Login Opts';
import SignUpOptions from './app/SignUp Opts';
import OTPprompt from './app/OTP Verification Prompt';
import PhoneVerification from './app/OTP Verification';
import Name from './app/NameId';
import PhoneSignup from './app/PhoneSignUp';
import Profile_Picture from './app/Profile_Picture'
import Success from './app/Success'
import CustomDrawer from './app/HomeScreen/CustomDrawer';
import RIdeInfo from './app/HomeScreen/RIdeInfo'
import RideSelection from './app/HomeScreen/RideSelection';
import Home from './app/HomeScreen/SearchDestination';
import ChatScreen from './app/HomeScreen/ChatScreen';
import InviteScreen from './app/InviteScreen/InviteScreen'
import History from './app/Payment and Settings/History';
import Languages from './app/Payment and Settings/Languages';
import Profile_Settings from './app/Payment and Settings/Profile_Settings';
import Safety from './app/Payment and Settings/Safety';
import SupportScreen from './app/Payment and Settings/SupportScreen';
import Wallet from './app/Payment and Settings/Wallet';
import RatingScreen from './app/TipsAndRating_Scren/RatingScreen'
import TipsScreen from './app/TipsAndRating_Scren/TipsScreen';
import SearchingDriver from './app/HomeScreen/SearchingDriver';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerContent = (props) => {
  const { navigation } = props;
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Home" onPress={() => navigation.navigate('Home')} />
      <DrawerItem label="Profile Settings" onPress={() => navigation.navigate('Profile_Settings')} />
      <DrawerItem label="Wallet" onPress={() => navigation.navigate('Wallet')} />
      <DrawerItem label="History" onPress={() => navigation.navigate('History')} />
      <DrawerItem label="Languages" onPress={() => navigation.navigate('Languages')} />
      <DrawerItem label="Safety" onPress={() => navigation.navigate('Safety')} />
      <DrawerItem label="Support" onPress={() => navigation.navigate('SupportScreen')} />
      <DrawerItem label="Invite Friends" onPress={() => navigation.navigate('InviteScreen')} />
      <DrawerItem label="Logout" onPress={() => navigation.navigate('Login')} />
    </DrawerContentScrollView>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Options">
          <Stack.Screen name="Options" component={Options} options={{ headerShown: false }} />
          <Stack.Screen name="Location" component={Location} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpOptions} options={{ headerShown: false }} />
          <Stack.Screen name="OTPprompt" component={OTPprompt} options={{ headerShown: false }} />
          <Stack.Screen name="PhoneVerification" component={PhoneVerification} options={{ headerShown: false }} />
          <Stack.Screen name="Name" component={Name} options={{ headerShown: false }} />
          <Stack.Screen name="PhoneSignup" component={PhoneSignup} options={{ headerShown: false }} />
          <Stack.Screen name="Profile_Picture" component={Profile_Picture} options={{ headerShown: false }} />
          <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
          <Stack.Screen name="CustomDrawer" component={CustomDrawer} options={{ headerShown: false }} />
          <Stack.Screen name="RIdeInfo" component={RIdeInfo} options={{ headerShown: false }} />
          <Stack.Screen name="RideSelection" component={RideSelection} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
          <Stack.Screen name="InviteScreen" component={InviteScreen} options={{ headerShown: false }} />
          <Stack.Screen name="History" component={History} options={{ headerShown: false }} />
          <Stack.Screen name="Languages" component={Languages} options={{ headerShown: false }} />
          <Stack.Screen name="Profile_Settings" component={Profile_Settings} options={{ headerShown: false }} />
          <Stack.Screen name="Safety" component={Safety} options={{ headerShown: false }} />
          <Stack.Screen name="SupportScreen" component={SupportScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Wallet" component={Wallet} options={{ headerShown: false }} />
          <Stack.Screen name="RatingScreen" component={RatingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="TipsScreen" component={TipsScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SearchingDriver" component={SearchingDriver} options={{ headerShown: false }} />
        </Stack.Navigator>
  );
};
const App = () => {
  return (
      <NavigationContainer >
        <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="MainStack" component={StackNavigator} options={{ headerShown: false }} />
      </Drawer.Navigator>
      </NavigationContainer>
  )
}

export default App
