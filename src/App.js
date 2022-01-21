import { Component } from 'react';

import Searchbar from './Components/SearchBar/SearchBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';

export default class App extends Component {
  state = { searchQuery: '' };

  sendQueryInState = data => {
    this.setState(data);
  };
  render() {
    const { searchQuery } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.sendQueryInState} />
        <ImageGallery query={searchQuery} />
      </>
    );
  }
}
