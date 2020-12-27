import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Category from "./screens/Category";
import Police from "./screens/Police";
import Voting from "./screens/Voting";
import Gender from "./screens/Gender";
import Housing from "./screens/Housing";
import Privacy from "./screens/Privacy";
import Religion from "./screens/Religion";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Select Category" component={Category} />
        <Stack.Screen name="Police" component={Police} />
        <Stack.Screen name="Voting" component={Voting} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="Housing" component={Housing} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="Religion" component={Religion} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}







