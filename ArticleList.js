import React from "react";
import { StyleSheet } from "react-native";
import ListStories from "./ListStories";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListMostStories from './ListMostPopular';
import Business from './Business';

const Tab = createMaterialTopTabNavigator();


export default function ArticleList() {
  return (  
      <Tab.Navigator>
        <Tab.Screen name="Top Stories" component={ListStories} />
        <Tab.Screen name="Business" component={Business} />
        <Tab.Screen name="Most Popular" component={ListMostStories} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
