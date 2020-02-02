import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './component/NavBar/Navbar';
import CardList from './component/CardList/CardList';

const houseToRent = [
  {
    name: "Tiny House refuge",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://cdn.wohnglueck.de/vary/content/2019/09/Tiny-House-Resort-Tinyhousedesign_content-1400x788@2x.jpg",
    available: true
  },
  {
    name: "Beautiful design house",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037",
    available: true
  },
  {
    name: "Beautiful House ",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.adsttc.com/media/images/5be9/fd5c/08a5/e5a5/8c00/008f/newsletter/CARLES_FAUS_ARQUITECTURA_-_CARMEN_HOUSE_(2).jpg?1542061390",
    available: true
  },
  {
    name: "My super house ",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://specials-images.forbesimg.com/imageserve/1026205392/960x0.jpg?fit=scale",
    available: true
  },

]

class App extends React.Component {
  state = {
    search: '',
    houses: []
  }

  componentDidMount() {
    this.setState({
      houses: houseToRent
    })
  }
  onSearchChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }


  render() {
    const { houses, search } = this.state;
    const actualHouses = houses.filter(house => house.name.toLowerCase().includes(search.toLowerCase()))
    return (
      <div className="App" >
        <Navbar
          onSearchChange={this.onSearchChange}
        />
        {houses.length === 0 ? <h1>No result...</h1> : <h1>Here your houses</h1>}
        <CardList
          houses={actualHouses}
        />
      </div >
    );
  }
}

export default App;
