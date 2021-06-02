import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import LigneNews from "./LigneNews";

export default class ListSearch extends React.Component {
  constructor(props) {
    super(props);
    this.seach = this.props.route.params.search; 
    this.state = {
      stories: [],
    };
    this.navigation = props.navigation;
  }

  componentDidMount() {
    fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${props.search}&api-key=sNSoTLuim2yaEwOoh7msGlEAalSYVgCt`
    )
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          stories: responseJson.docs,
        });
      })
      .catch((error) => console.log(error)); //to catch the errors if any
  }
  extractImage = (item) => {
    if (item.multimedia) {
      return item.multimedia[0].url;
    } else
      return "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.stories}
          style={styles.listStyle}
          renderItem={({ item }) => (
            <LigneNews
              subsection={item.subsection_name}
              title={item.abstract}
              date={item.pub_date}
              section={item.section_name}
              image_url={this.extractImage(item)}
              story_url={item.web_url}
              navigation={this.navigation}
            />
          )}
        ></FlatList>

        <StatusBar style="auto" />
      </View>
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

  listStyle: {},
});
