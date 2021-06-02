import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack'
import ArticleList from './ArticleList';
import DetailStory from './DetailStory';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Article List">
      <Stack.Navigator>
        <Stack.Screen name="Article List" component={ArticleList} />
        <Stack.Screen name="DetailStory" component={DetailStory} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

