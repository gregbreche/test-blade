import React, { Component } from 'react';
import TopNavBar from "./Navbar";
import QuestionForm from "./QuestionForm";
import BackgroundImage from "./BackgroundImage";

class App extends React.Component {
    constructor(props) {

        super(props);

        this.state = {
            blurredBackground: false
        };
        this.handler = this.handler.bind(this);
    }

    handler() {
        this.setState({
           blurredBackground: !this.state.blurredBackground
        });
        alert('toto');
    }

    render() {
      return (
          <div>
              <BackgroundImage />
              <div id="content">
                  <TopNavBar />
                  <QuestionForm handler={this.handler} />
              </div>
          </div>
      );
    }
}

export default App;
