import React from "react";
import { StyleSheet } from "react-native";
import ListStories from "./ListStories";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import ListMostStories from "./ListMostPopular";
import Business from "./Business";
import { Header, SearchBar } from "react-native-elements";
import { Button } from "react-native-elements/dist/buttons/Button";

const Tab = createMaterialTopTabNavigator();

export default class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.state = {
      search_query: "",
    };
  }

  handleSearch = () => {
    console.log("handle Search clicked");
    this.navigation.navigate("ListSearch", {
      search: this.state.search_query,
    });
  };
  render() {
    const { search } = this.state;
    return (
      <React.Fragment>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={
            <SearchBar
              inputStyle={{ backgroundColor: "white" }}
              containerStyle={{
                backgroundColor: "white",
                borderWidth: 1,
                borderRadius: 5,
                width: 200,
              }}
              inputContainerStyle={{ backgroundColor: "white", height: 3 }}
              placeholderTextColor={"white"}
              onChangeText={(value) => this.setState({ search_query: value })}
              placeholder="Type Here..."
              value={this.state.search_query}
              onSubmitEditing={this.handleSearch}
            />
          }
          rightComponent={{ icon: "more", color: "#fff" }}
        />
        <Tab.Navigator lazy={true}>
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
