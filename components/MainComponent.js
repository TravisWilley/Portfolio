import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import { MENU } from '../shared/menu';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: MENU,
    };
  }

  render() {
    return <Directory menu={this.state.menu} />;
  }
}

export default Main;
