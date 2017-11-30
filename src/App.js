import React, { Component } from 'react';
import {MuiThemeProvider} from 'material-ui/styles';
import TopNavBar from "./Navbar";
import QuestionForm from "./QuestionForm";
import BackgroundImage from "./BackgroundImage";

class App extends Component {
    constructor(props) {

        super(props);

        this.state = {
            blurredBackground: false,
            navOpened: false,
            style: ''
        };

        this.handler = this.handler.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);
    }

    handler() {
        this.setState({
           blurredBackground: !this.state.blurredBackground
        });
    }

    toggleNavbar() {
        this.setState({
            navOpened: !this.state.navOpened
        },
            function() {
                if (this.state.navOpened) {
                    this.setState({
                        style: '200px'
                    });
                } else {
                    this.setState({
                        style: ''
                    });
                }
            });


    }

    render() {
      return (
          <MuiThemeProvider>
              <div>
                  <BackgroundImage blurred={this.state.blurredBackground} style={{paddingLeft : this.state.style}} />
                  <div id="content">
                      <TopNavBar handler={this.toggleNavbar} navOpened={this.state.navOpened} />
                      <div id="content-form" style={{paddingLeft : this.state.style}}>
                        <QuestionForm handler={this.handler} blurredBackground={this.state.blurredBackground} />
                      </div>
                  </div>
              </div>
          </MuiThemeProvider>
      );
    }
}

export default App;
