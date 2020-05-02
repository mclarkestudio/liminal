import React from "react";
import { Redirect } from "react-router";
import connectAllProps from "../../shared/connect";
import { ComponentProps as Props } from "../../shared/ComponentProps";

interface States {}
class Home extends React.Component<Props, States> {
    render(): React.ReactElement<any> {
        // if (this.props.state.userState.currentUser) {
        //     return <Redirect to="/article" />;
        // } else {
        //     return <Redirect to="/login" />;
        // }
        return <>{this.renderHome()}</>
    }

    private renderHome = (): React.ReactElement<any> => {
        if (this.props.state.userState.currentUser) {
            return <Redirect to="/article" />;
        } else {
            return <Redirect to="/login" />;
        }
    }
}

export default connectAllProps(Home)
