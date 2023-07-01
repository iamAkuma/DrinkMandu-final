import React from 'react';
import BeverageCard from './DrinkCard';

const DrinkList = () => {
  // Sample beverage data
  const beverages = [
    
    { id: 1, foodName: 'Nepal Ice', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    { id: 1, foodName: 'Barahsinghe Pilsner Beer', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    { id: 1, foodName: 'Tuborg Gold', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    { id: 1, foodName: 'Gorkha Beer', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    
    { id: 1, foodName: 'Nude Vodka', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    { id: 1, foodName: '', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    { id: 1, foodName: '', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    { id: 1, foodName: '', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    { id: 1, foodName: '', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    { id: 1, foodName: '', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    { id: 1, foodName: '', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    { id: 1, foodName: '', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },

    // Add more beverage objects as needed
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <div>
      <h1>Drink List</h1>
      <div className="beverage-container">
        {beverages.slice(0, 12).map((beverage) => (
          <BeverageCard key={beverage.id} foodName={beverage.foodName} ImgSrc={beverage.ImgSrc} finalPrice={beverage.price}/>
        ))}
      </div>
    </div>
  </div>
  

  );
};

export default DrinkList;
