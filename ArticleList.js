import React from "react";
import { StyleSheet } from "react-native";
import ListStories from "./ListStories";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListMostStories from "./ListMostPopular";
import Business from "./Business";
import { Header, SearchBar } from "react-native-elements";

const Tab = createMaterialTopTabNavigator();

export default class ArticleList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  updateSearch = (search) => {
    this.setState({ search });
    console.log(search)
  };
  handleSearch = (query) => {
    
  }
  render() {
    const { search } = this.state;
    return (
      <React.Fragment>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={
            <SearchBar
              placeholder="Type Here..."
              onChangeText={this.updateSearch}
              value={search}
            />
          }
          rightComponent={{ icon: "more", color: "#fff" }}
        />
        <Tab.Navigator>
          <Tab.Screen name="Top Stories" component={ListStories} />
          <Tab.Screen name="Business" component={Business} />
          <Tab.Screen name="Most Popular" component={ListMostStories} />
        </Tab.Navigator>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
