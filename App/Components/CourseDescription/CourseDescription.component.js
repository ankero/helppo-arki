import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import {
  ImageBackground,
  Caption,
  Tile,
  Title,
  Divider,
  Text,
  Button
} from "@shoutem/ui";
import Card from "../Card";

export default class CourseCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Title style={{ marginBottom: 5 }}>
          {this.props.course.name.toUpperCase()}
        </Title>
        <Caption style={{ marginBottom: 2 }}>
          Kurssin kesto: {this.props.course.subtitle}
        </Caption>
        <Caption style={{ color: "green" }}>{this.props.course.price}</Caption>
        <Divider />
        <Divider styleName="line" />
        <Divider />
        <Text>
          {this.props.course.description}{" "}
          {
            "Maecenas sed diam eget risus varius blandit sit amet non magna. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."
          }
        </Text>
        <Divider />
        <Divider />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center"
          }}
        >
          <Button style={{ margin: 5 }} onPress={this.previewCourse}>
            <Text>ESIKATSELE</Text>
          </Button>

          <Button styleName="secondary" style={{ margin: 5 }}>
            <Text>OSTA</Text>
          </Button>
        </View>
      </Card>
    );
  }
}
