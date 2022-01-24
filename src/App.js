import React, {Component} from "react";
import MainView from "./quiz/MainView";
import Quiz from "./quiz/Quiz";
import QuizView from "./quiz/QuizView";

class App extends Component {
  state = {
    nextView: 0
  };

  clickBtn = (e) => {
    console.log(e);
    this.setState({
      nextView : 1
    });
  }

  render() {
    if (this.state.nextView) {
      return <QuizView />
    } else {
      return <MainView clickBtn={this.clickBtn} />
    }
  }
}

export default App;
