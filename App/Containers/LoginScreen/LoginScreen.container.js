import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Screen, Button, Heading, Divider, Icon, Text } from "@shoutem/ui";

import { Images, Metrics, ApplicationStyles } from "../../Themes/";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
  }

  login = () => {
    console.log("login");
    this.props.navigation.navigate("CoursesScreen");
  };

  render() {
    return (
      <Screen>
        <ScrollView style={styles.container}>
          <Divider />
          <View style={styles.header}>
            <Heading>Helppo Arki</Heading>
          </View>

          <View style={styles.actionContainer}>
            <Button onPress={this.login}>
              <Text>GOOGLE</Text>
            </Button>
            <Divider />
            <Button onPress={this.login}>
              <Text>FACEBOOK</Text>
            </Button>
          </View>
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  container: {
    padding: 20
  },
  header: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  actionContainer: {
    padding: 20
  },
  button: {
    padding: 14,
    height: 40
  }
});
