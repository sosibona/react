import React from "react";

class Search extends React.Component {
  state = {
    value: ""
  };

  handleSearch = e => {
    this.setState({
      value: e.target.value
    });
  };

  search = event => {
    event.preventDefault();
    console.log(`Search text: ${this.state.value}`);
  };

  render() {
    return (
      <form className="search" onSubmit={this.search}>
        <input
          type="text"
          className="search__input"
          onChange={this.handleSearch}
          value={this.state.value}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default Search;
