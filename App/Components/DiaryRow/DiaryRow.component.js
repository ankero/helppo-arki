import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  ImageBackground,
  Caption,
  Tile,
  Title,
  Text,
  Button
} from "@shoutem/ui";

export default class DiaryRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  componentWillMount() {
    this.setState({ expanded: this.props.item.currentItem });
  }

  expand = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    return (
      <TouchableOpacity onPress={this.expand}>
        <View style={styles.rowItemContent}>
          <Title>{this.props.item.name}</Title>
          {this.state.expanded && (
            <View>
              <Caption style={{ marginBottom: 3 }}>
                {this.props.item.duration}
              </Caption>
              <Text numberOfLines={3} ellipsizeMode={"tail"}>
                {this.props.item.smallDescription}
              </Text>
            </View>
          )}

          {this.state.expanded && (
            <View style={{ paddingTop: 10 }}>
              <Button style={{ width: 140 }} styleName="secondary">
                <Text>ALOITA</Text>
              </Button>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  rowItemContent: {
    paddingLeft: 15,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 30
  }
});
