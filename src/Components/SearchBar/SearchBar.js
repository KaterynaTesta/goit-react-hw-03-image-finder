import { Component } from 'react';
import s from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';

export default class Searchbar extends Component {
  state = { searchQuery: '' };

  handleInputChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <ImSearch style={{ marginRight: 8 }} />
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
            value={this.state.searchQuery}
          />
        </form>
      </header>
    );
  }
}
