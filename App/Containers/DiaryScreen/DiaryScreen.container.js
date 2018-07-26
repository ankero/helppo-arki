import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Text,
  Image,
  View,
  FlatList
} from "react-native";
import * as Animatable from "react-native-animatable";
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
  Overlay
} from "@shoutem/ui";

import { Images, Metrics, ApplicationStyles } from "../../Themes/";

import DiaryRow from "../../Components/DiaryRow";

export default class CoursesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      diary: [
        {
          id: "1",
          name: "Pohja kuntoon",
          smallDescription:
            "Ensimmäinen harjoitus, aloitetaan naminyrkillä ja jatketaan haastavampiin harjoituksiin.",
          duration: "5 minutes",
          currentItem: true,
          image: require("../../Images/walking_dogs.png")
        },
        {
          id: "2",
          name: "Ensimmäiset askeleet",
          smallDescription:
            "Testataan miten koira käsittelee tiettyjä tilanteita.",
          duration: "10 minutes",
          currentItem: false,
          image: require("../../Images/walking_dogs.png")
        },
        {
          id: "3",
          name: "Kannattava paikka",
          smallDescription:
            "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.",
          duration: "10 minutes",
          currentItem: false,
          image: require("../../Images/walking_dogs.png")
        },

        {
          id: "4",
          name: "Euismod Sem",
          smallDescription:
            "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.",
          duration: "8 minutes",
          currentItem: false,
          image: require("../../Images/walking_dogs.png")
        },
        {
          id: "5",
          name: "Kannattava paikka",
          smallDescription:
            "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.",
          duration: "10 minutes",
          currentItem: false,
          image: require("../../Images/walking_dogs.png")
        },
        {
          id: "6",
          name: "Kannattava paikka",
          smallDescription:
            "Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis.",
          duration: "10 minutes",
          currentItem: false,
          image: require("../../Images/walking_dogs.png")
        }
      ]
    };
  }

  openDrawer = () => {
    this.props.navigation.navigate("DrawerOpen");
  };

  _keyExtractor = (item, index) => item.id || index;
  _renderItem = ({ item }) => {
    return (
      <View style={styles.rowItem}>
        <View style={styles.line}>
          <View
            style={[styles.rowBall, item.currentItem && styles.rowBallCurrent]}
          />
          {item.currentItem && (
            <Animatable.View
              animation="pulse"
              easing="ease-out"
              iterationCount="infinite"
              style={styles.rowBallHighlight}
            />
          )}
        </View>
        <DiaryRow item={item} />
      </View>
    );
  };

  render() {
    return (
      <Screen>
        <View>
          <NavigationBar
            styleName="inline"
            leftComponent={
              <Button onPress={this.openDrawer}>
                <Icon name="sidebar" />
              </Button>
            }
            centerComponent={<Title>DIARY</Title>}
          />
        </View>
        <FlatList
          data={this.state.diary}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
        />
      </Screen>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  header: {
    padding: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  actionContainer: {
    padding: 20
  },

  rowItem: {
    paddingLeft: 30,
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  line: {
    width: 2,
    backgroundColor: "#444f6c",
    position: "relative"
  },
  rowBall: {
    position: "absolute",
    top: 26,
    left: -5,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#444f6c"
  },
  rowBallCurrent: {
    backgroundColor: "#444f6c"
  },
  rowBallHighlight: {
    top: 22,
    left: -9,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#444f6c"
  },
  rowItemContent: {
    paddingLeft: 15,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 30
  }
});
