import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Bigfoods from './foods.json';
import FoodBox from './components/FoodBox';
import AddNewFood from './components/AddNewFood';
import SearchBar from './components/SearchBar';

function App() {
  const [isDisplay, setisDisplay] = useState(false);

  const [foods, setFoods] = useState(Bigfoods);
  const [searchedBar, setSearchedBar] = useState("");


	const addFood = (food) => {
		setFoods([...foods, food]);
    displayForm()
	};

  const displayForm = () =>{
    setisDisplay(!isDisplay)
  }

  let searchedFoods = null;
	if (searchedBar !== "") {
		searchedFoods = foods.filter((food) => {
      console.log(food.name)
			return food.name.toLowerCase().includes(searchedBar.toLowerCase());
		});
	} else {
		searchedFoods = foods;
	}
  return (
    <div className="App">
    <h1>IronNutrition</h1>
    <button onClick={displayForm}>Add new food</button>
    <SearchBar
				searchedBar={searchedBar}
				callbackSearch={setSearchedBar}
			/>
    {isDisplay && <AddNewFood addFood={addFood}/>}

      <FoodBox
        foods = {searchedFoods}          
      />

    </div>
  );
}

export default App;
