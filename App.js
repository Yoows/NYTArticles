import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import ArticleList from './ArticleList';
import DetailStory from './DetailStory';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="My News">
      <Stack.Navigator>
        <Stack.Screen name="My News" component={ArticleList} />
        <Stack.Screen name="DetailStory" component={DetailStory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

