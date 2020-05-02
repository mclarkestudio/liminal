import React from "react";
import { Redirect } from "react-router-native";
import connectAllProps from "../core/src/shared/connect";
import { ComponentProps as Props } from "../core/src/shared/ComponentProps";

interface States {}

class Home extends React.Component<Props, States> {
    componentDidMount() {
        this.props.actions.authenticate();
    }
    render(): any {
        if (this.props.state.userState.currentUser) {
            return <Redirect to="/article" />;
        } else {
            return <Redirect to ='/login' />;
        }
    }
}

export default connectAllProps(Home);