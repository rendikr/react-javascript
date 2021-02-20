import React from 'react';
import './App.css';

function Reviews() {
  const reviews = [
    {
      "id": 1,
      "name": "Asep Jaelani",
      "review": "Cheap but a top-notch quality",
      "photo": "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      "id": 2,
      "name": "Jajang Maulana",
      "review": "Great Product",
      "photo": "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    },
    {
      "id": 3,
      "name": "Maman Jawa",
      "review": "Delivery kinda late",
      "photo": "https://images.pexels.com/photos/2099225/pexels-photo-2099225.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    }
  ];

  const listReviews = reviews.map((item) =>
    <div className="Item" key={item.id}>
      <img src={item.photo}/>
      <div className="User">
        <h3>{item.name}</h3>
        <p>{item.review}</p>
      </div>
    </div>
  );

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReviews}
    </div>
  );
}

export default Reviews;
