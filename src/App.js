import React from 'react';

import { CardList } from './components/card-lists/card-lists.component'

import './App.css'
import { Search } from './components/search-box/searchbox.component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchTerm:''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(user => this.setState({ monsters: user }))
  }

  handleChange=(e)=>{
    this.setState({searchTerm: e.target.value})
  }

  render() {
    const {monsters, searchTerm} = this.state;
    const filteredData = monsters.filter((monster)=> monster.name.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
      <div className='App'>
        <h1>Monster</h1>
       <Search placeholder="search monster" handleChange={this.handleChange}/>
        <CardList monsters={filteredData} />
      </div>
    )
  }
}


export default App;
