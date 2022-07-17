import React, {Component} from 'react';
import Header from "./header/Header";
import {checkLogin} from "./actions/auth.action";
import {connect} from "react-redux";
import Container from '@material-ui/core/Container'

class App extends Component<any, any>{
    componentDidMount() {
        this.props.checkLogin();
    }

    render() {
    return (
        <>
            <Header/>
            <Container>
                <main>
                    {
                        this.props.children
                    }
                </main>
            </Container>

        </>
    );
    }
}

export default connect(null, {checkLogin})(App);
