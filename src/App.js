import logo from './logo.svg';
import './App.css';
import React ,{Component} from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'



class App extends Component{
  constructor(){
    super();

    this.state = {
      extext : 'Hello React',
      imgsrc : 'https://cdn.pixabay.com/photo/2016/02/05/13/11/fairy-tale-1180921__340.png',
      monsters : [],
      searchField:''

    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    //.then(x => console.log(x))
    .then(users => this.setState({monsters: users}))
  }


  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){

    //Searching method
    const {monsters , searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return(
        <div className="App">
          <header className="App-header">

            {/* make search Field bellow */}
            <SearchBox
              placeholder='search monsters'
              handleChange = {this.handleChange}
            />

            <CardList monsters={filteredMonsters}/>
              



            {/* <img src = {this.state.imgsrc}/>
            <p>
              {this.state.extext}
            </p>
            <button onClick={() => this.setState(
                                                  {extext : "yo React",
                                                   imgsrc : "https://cdn.pixabay.com/photo/2017/11/15/09/28/music-player-2951399__340.jpg"
                                                  }
                                                )
                            }> butt </button> */}
          </header>
        </div>
    ); 
  }
}

export default App;
