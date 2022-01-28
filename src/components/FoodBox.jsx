import React, { useState } from 'react';

const FoodBox = (({ food, sendMenu }) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityInput = (e) => setQuantity(e.target.value);

  const addToMenu = () => {
    const menuItem= {...food, quantity}
  };

  return (
    <div className="foodB">
      <div key={food.name} className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={quantity}
                  onChange={handleQuantityInput}
                  min="1"
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={() => {
                    sendMenu(food, quantity);
                  }}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
});

export default FoodBox;
