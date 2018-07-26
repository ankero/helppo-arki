import React, { Component } from "react";
import ReduxNavigation from "../../Navigation/ReduxNavigation";
import ReduxPersist from "../../Config/ReduxPersist";
import connect from "./connect";

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      this.props.startup();
    }
  }

  render() {
    return <ReduxNavigation />;
  }
}

export default connect(RootContainer);
