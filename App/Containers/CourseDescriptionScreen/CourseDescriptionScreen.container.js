import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
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
  Text,
  Subtitle,
  Heading,
  Divider,
  Icon,
  NavigationBar,
  GridRow,
  Overlay,
  Video
} from "@shoutem/ui";

import CourseDescription from "../../Components/CourseDescription";
import CourseComments from "../../Components/CourseComments";

export default class CourseDescriptionScreen extends Component {
  constructor(props) {
    super(props);
  }

  goBack = () => {
    console.log("goBack");
    this.props.navigation.goBack();
  };

  previewCourse = () => {
    this.props.navigation.navigate("DiaryScreen");
  };

  render() {
    const { course } = this.props.navigation.state.params;

    return (
      <Screen>
        <Image
          style={styles.bgImage}
          resizeMode={"cover"}
          source={course.image}
        />

        <View style={styles.containerHeader}>
          <TouchableOpacity onPress={this.goBack} style={styles.backButton}>
            <Icon name="back" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.courseHolder}>
          <View
            style={{
              paddingTop: 50,
              height: 251,
              flex: 1,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Overlay styleName="rounded-small">
              <Icon name="play" />
            </Overlay>
          </View>
          <CourseDescription course={course} />
          <Divider />
          <CourseComments />
          <Divider />
        </ScrollView>
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  containerHeader: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    justifyContent: "center",
    backgroundColor: "transparent",
    paddingLeft: 10,
    zIndex: 1
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 2,
    backgroundColor: "rgba(255,255,255,0.2)",
    justifyContent: "center"
  },
  bgImage: {
    position: "absolute",
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    width: 400,
    height: 360
  },
  courseHolder: {
    paddingLeft: 10,
    paddingRight: 10
  }
});
