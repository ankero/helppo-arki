import React, { Component } from "react";
import { ListView } from "@shoutem/ui";
import CourseCard from "../CourseCard";

export default class CourseList extends Component {
  constructor(props) {
    super(props);
  }

  renderRow = (rowData, sectionId, index) => (
    <CourseCard
      course={rowData}
      key={index}
      onPress={() => this.props.clickCourse(rowData)}
    />
  );

  render() {
    return <ListView data={this.props.courses} renderRow={this.renderRow} />;
  }
}
