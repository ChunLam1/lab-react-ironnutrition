import React from 'react';

const TodaysFood = ({menu}) => {
  return (
  <div>
      <h1>Today's foods</h1>
      <ul className='ul'>
        {menu.map((menuItem)=>(
            <li key={menu}>{menuItem.name}{menuItem.quantity} </li>
        ))}
      </ul>
  </div>
  );
};

export default TodaysFood;
