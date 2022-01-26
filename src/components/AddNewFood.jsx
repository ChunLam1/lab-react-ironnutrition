import React, { useState } from "react";
 
 const AddNewFood = ({addFood}) => {

    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [image, setImage] = useState('');

    const handleNameInput = e => setName(e.target.value);
 
    const handleCaloriesInput = e => setCalories(e.target.value);
   
    const handleImageInput = e => setImage(e.target.value);

    const handleSubmit = (e) => {        
        e.preventDefault();
        const newFood = { name, calories, image };
        console.log("Submitted: ", newFood);
        addFood(newFood)
        // setName("");
        // setCalories("");
        // setImage("");

    }
   return (
<>
<h4>Add a Food</h4>
<form onSubmit={handleSubmit}>
    <label htmlFor="name">Name: </label>
    <input  type="text"  name="name"  value={name} onChange={handleNameInput} ></input>
    <label htmlFor="calories">Number of calories: </label>
    <input  type="text"  name="calories"  value={calories} onChange={handleCaloriesInput} ></input>
    <label htmlFor="image">Name: </label>
    <input  type="file"  name="image"  value={image} onChange={handleImageInput} ></input>

    <button type="submit">Add a food</button>
</form>   
</>
   )
 };
 
 export default AddNewFood;
 