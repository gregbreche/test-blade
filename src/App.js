import React, { Component } from 'react';
import TopNavBar from "./Navbar";
import QuestionForm from "./QuestionForm";
import BackgroundImage from "./BackgroundImage";

class App extends Component {
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
    }

    render() {
      return (
          <div>
              <BackgroundImage blurred={this.state.blurredBackground}/>
              <div id="content">
                  <TopNavBar />
                  <QuestionForm handler={this.handler} blurredBackground={this.state.blurredBackground} />
              </div>
          </div>
      );
    }
}

export default App;
