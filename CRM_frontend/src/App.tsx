import React, {Component} from 'react';
import Header from "./header/Header";
import {checkLogin} from "./actions/auth.action";
import {connect} from "react-redux";

class App extends Component<any, any>{
    componentDidMount() {
        this.props.checkLogin();
    }

    render() {
    return (
        <>
            <Header/>
            <main>
                {
                  this.props.children
                }
            </main>
        </>
    );
    }
}

export default connect(null, {checkLogin})(App);
