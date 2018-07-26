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
  Subtitle,
  Heading,
  Divider,
  Text,
  Icon,
  NavigationBar,
  GridRow,
  Overlay,
  DropDownMenu
} from "@shoutem/ui";

import CourseList from "../../Components/CourseList";

import { Images, Metrics, ApplicationStyles } from "../../Themes/";

export default class CoursesScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: [
        {
          key: "all",
          value: "Kaikki"
        },
        { key: "arki", value: "Arkitottelevaisuus" },
        { key: "destroy", value: "Tuhoaminen" },
        { key: "together", value: "Yhdessä tekeminen" }
      ],
      courses: [
        {
          name: "Hihnassa kävely",
          description:
            "Lenkillä käydessä koira kulkee vieressä ja ohittaa muut koirat ilman ongelmia.",
          subtitle: "3 viikkoa - Keskivaikea",
          price: "2,50€",
          image: require("../../Images/walking_dogs.png")
        },
        {
          name: "Avoimet ovet",
          description:
            "Koira ei säntää ulos kun ovi aukeaa, vaan pyytää aina luvan.",
          subtitle: "2 viikkoa - Helppo",
          price: "1,95€",
          image: require("../../Images/dog_waiting.jpg")
        },
        {
          name: "Ruokailu",
          description:
            "Koira saa ruuan aina säännölliseen aikaan ja pyytää siihen aina luvan.",
          subtitle: "3 viikkoa - Helppo",
          price: "2,50€",
          image: require("../../Images/dog_eating.jpg")
        },
        {
          name: "Tuhoaminen",
          description:
            "Koira lopettaa kenkien, pöydänjalkojen ja sohvien tuhoamisen.",
          subtitle: "2 viikkoa - Vaikea",
          price: "2,95€",
          image: require("../../Images/dog_destroys.jpg")
        }
      ]
    };
  }

  openDrawer = () => {
    this.props.navigation.navigate("DrawerOpen");
  };

  clickCourse = course => {
    this.props.navigation.navigate("CourseDescriptionScreen", { course });
  };

  render() {
    return (
      <Screen>
        <NavigationBar
          styleName="inline"
          leftComponent={
            <Button onPress={this.openDrawer}>
              <Icon name="sidebar" />
            </Button>
          }
          centerComponent={<Title>COURSES</Title>}
          rightComponent={
            <DropDownMenu
              options={this.state.filters}
              selectedOption={
                this.state.selectedFilter
                  ? this.state.selectedFilter
                  : this.state.filters[0]
              }
              onOptionSelected={filter =>
                this.setState({ selectedFilter: filter })
              }
              titleProperty="value"
              valueProperty="filters.key"
            />
          }
        />

        <CourseList
          courses={this.state.courses}
          clickCourse={this.clickCourse}
        />
      </Screen>
    );
  }
}
