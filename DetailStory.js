import React from "react";
import { StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

export default class DetailStory extends React.Component {
  constructor(props) {
    super(props);
     this.articleUrl = this.props.route.params.url; 
     console.log(this.articleUrl);
  }

  render() {
    return (
      <WebView
        source={{ uri: this.articleUrl }}
        style={{ marginTop: 20, flex: 1, width: 450, height: 100 }}
      />
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
