import React from 'react';
import './App.css';
import SearchForm from './SearchForm/SearchForm'
import ResultsList from './ResultsList/ResultsList'

class App extends React.Component {
  state={
    keyword: "",
    filters:{
        ebook: false,
        type: "All"
    },
    results: null
  } 

  handleSearchUpdate = (keyword) => {
      this.setState({
          keyword
      })
  }



  checkEbook = (checked) => {
      const filters = {
          ebook: checked,
          type: this.state.filters.type
      }
      this.setState({
          filters
      })
  }

  typeSelect = (type) => {
      const filters = {
          ebook: this.state.filters.ebook,
          type
      }
      this.setState({
          filters
      })
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const searchTerm = 'q=' + encodeURI(this.state.keyword)
    const typeFilter = '&printType=' + this.state.filters.type
    const eBookFilter = this.state.filters.ebook ? '&filter=ebooks' : ''
    const apiKey = '&key=AIzaSyDB1QAVEFQtMOsjxLQupnOsB9PNDiBys6A'
    const url = 'https://www.googleapis.com/books/v1/volumes?' + searchTerm + eBookFilter + typeFilter + apiKey
    console.log(url)
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(response => {
        this.setState({ results: response.items })
      })
      .catch(err => console.log('Something went wrong: ' + err))
  }

  render() {
    const results = this.state.results === null ? '' : <ResultsList results={this.state.results}/>

    return (
      <div className="App">
        <header>
          <h1>Google Book Search</h1>
        </header>
        <SearchForm 
          filters={this.state.filters} 
          keyword={this.state.keyword}
          checkEbook={this.checkEbook}
          typeSelect={this.typeSelect}
          onSearchUpdate={this.handleSearchUpdate}
          onSearchSubmit={this.handleSearchSubmit}/>
        {results}
      </div>
    )
  }
}

export default App;
