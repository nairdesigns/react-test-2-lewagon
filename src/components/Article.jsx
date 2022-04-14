import React, { Component } from "react";

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = { clicked: false };

      this.handleClick = this.handleClick.bind(this);
  }

  // handleClick = () => {
  //   this.setState({ clicked: !this.state.clicked });
  // };

  
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  classNames() {
    let classes = "article";
    if (this.state.clicked) {
      classes += " clicked";
    }
    return classes;
  }

  render() {
    return (
      <div classNam  e={this.classNames()} onClick={this.handleClick}>
        <h2 className="article-title">{this.props.title}</h2>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Article;
