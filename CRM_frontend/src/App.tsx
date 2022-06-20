import React, {Component} from 'react';
import Header from "./header/Header";

class App extends Component<any, any>{
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

export default App;
