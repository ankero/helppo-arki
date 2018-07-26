import React, { Component } from "react";
import { TouchableOpacity, View } from "react-native";
import { ImageBackground, Caption, Tile, Title } from "@shoutem/ui";

export default class CourseCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress(this.props.course)}>
        <Tile style={{ marginBottom: 5 }}>
          <ImageBackground
            styleName="large-banner"
            source={this.props.course.image}
          />
          <View style={{ padding: 15 }}>
            <Title style={{ marginBottom: 5 }}>
              {this.props.course.name.toUpperCase()}
            </Title>
            <View>
              <View style={{ marginBottom: 3 }}>
                <Caption>{this.props.course.description}</Caption>
              </View>
              <View style={{}}>
                <Caption>{this.props.course.subtitle}</Caption>
              </View>
            </View>
          </View>
        </Tile>
      </TouchableOpacity>
    );
  }
}
