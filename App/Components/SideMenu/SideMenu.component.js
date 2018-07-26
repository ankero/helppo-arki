import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View
} from "react-native";
import {
  Screen,
  Card,
  ListView,
  ImageBackground,
  Button,
  Caption,
  Tile,
  Title,
  Subtitle,
  Heading,
  Divider,
  Icon,
  NavigationBar,
  GridRow,
  Overlay,
  Video
} from "@shoutem/ui";

export default class SideMenu extends Component {
  constructor(props) {
    super(props);
  }

  navigateToScreen = route => () => {
    this.props.navigation.navigate(route);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            style={styles.avatar}
            resizeMode={"cover"}
            source={{
              uri:
                "https://shoutem.github.io/img/ui-toolkit/image-sizes/avatar-image-145-x-145@2x.png"
            }}
          />
          <Image
            resizeMode={"cover"}
            style={styles.topImage}
            source={require("../../Images/sideMenu_pattern.jpg")}
          />
        </View>
        <ScrollView style={styles.innerContent}>
          <Divider />
          <TouchableOpacity onPress={this.navigateToScreen("CoursesScreen")}>
            <Text style={styles.sectionHeadingStyle}>COURSES</Text>
          </TouchableOpacity>
          <Divider />
          <TouchableOpacity onPress={this.navigateToScreen("DiaryScreen")}>
            <Text style={styles.sectionHeadingStyle}>DIARY</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  topImage: {
    position: "absolute",
    height: 150,
    left: 0,
    right: 0,
    opacity: 0.7
  },
  topContainer: {
    height: 150,
    position: "relative",
    padding: 10,
    justifyContent: "flex-end"
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "relative",
    zIndex: 1
  },
  innerContent: {
    padding: 15
  }
});
