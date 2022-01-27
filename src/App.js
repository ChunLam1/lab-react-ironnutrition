import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Bigfoods from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddNewFood';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';

function App() {
  const [isDisplay, setisDisplay] = useState(false);

  const [foods, setFoods] = useState(Bigfoods);
  const [searchedBar, setSearchedBar] = useState('');
  const [menu, setMenu] = useState([]);

  const sendMenu = (food) => {
    // setMenu([...menu, menuItem])
  };

  const addFood = (food) => {
    setFoods([...foods, food]);
    displayForm();
  };

  const displayForm = () => {
    setisDisplay(!isDisplay);
  };

  let searchedFoods = null;
  if (searchedBar !== '') {
    searchedFoods = foods.filter((food) => {
      // console.log(food)
      return food.name.toLowerCase().includes(searchedBar.toLowerCase());
    });
  } else {
    searchedFoods = foods;
  }
  return (
    <div className="App">
      <h1>IronNutrition</h1>
      <button onClick={displayForm}>Add new food</button>
      <SearchBar searchedBar={searchedBar} callbackSearch={setSearchedBar} />
      <TodaysFood menu={menu} menuCallback={setMenu} />
      {isDisplay && <AddNewFood addFood={addFood} />}
      {searchedFoods.map((food) => (
        <FoodBox food={food} />
      ))}
    </div>
  );
}

export default App;
