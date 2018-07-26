import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    backgroundColor: "#fff",
    padding: 20
  }
});
