import React, { Component } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import {
  Image,
  ImageBackground,
  Caption,
  Tile,
  Title,
  Divider,
  Text,
  Button,
  Row,
  Subtitle
} from "@shoutem/ui";
import Card from "../Card";

export default class CourseCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <Title>WHAT PEOPLE SAY</Title>
        <Row>
          <Image
            styleName="small-avatar top"
            source={{
              uri:
                "https://shoutem.github.io/img/ui-toolkit/examples/image-11.png"
            }}
          />
          <View styleName="vertical">
            <View styleName="horizontal space-between">
              <Subtitle>Dustin Malone</Subtitle>
              <Caption>2 days ago</Caption>
            </View>
            <Text styleName="multiline">
              This course has saved so much of my time that I can't recommend it
              enough.
            </Text>
          </View>
        </Row>
        <Row>
          <Image
            styleName="small-avatar top"
            source={{
              uri:
                "https://shoutem.github.io/img/ui-toolkit/examples/image-11.png"
            }}
          />
          <View styleName="vertical">
            <View styleName="horizontal space-between">
              <Subtitle>Herra Huu</Subtitle>
              <Caption>3 weeks ago</Caption>
            </View>
            <Text styleName="multiline">Highly recommend, 5/5.</Text>
          </View>
        </Row>
      </Card>
    );
  }
}
