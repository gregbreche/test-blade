import React, { Component } from 'react';
import TopNavBar from "./Navbar";
import QuestionForm from "./QuestionForm";


class App extends Component {
  render() {
      return (
          <div>
              <TopNavBar />
              <QuestionForm />
          </div>
      );
  }
}

export default App;
