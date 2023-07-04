import React from 'react';
import BeverageCard from './DrinkCard';

const DrinkList = () => {
  // Sample beverage data
  const beverages = [
    
    { id: 1, foodName: 'Nepal Ice', finalPrice: "250", priceOptions: '330ML/650', ImgSrc: 'https://cheers.com.np/uploads/products/490681020607887731011344142964704260.png' },
    { id: 2, foodName: 'Barahsinghe Pilsner Beer', priceOptions: '330ML/650', finalPrice: "250",ImgSrc: 'https://cheers.com.np/uploads/products/322643642189851695318774509953934740220978.png'},
    { id: 3, foodName: 'Tuborg Gold', finalPrice: "250", priceOptions: '330ML/650', ImgSrc: "https://cheers.com.np/uploads/products/007924336801487969596753469569380288314312.png"},
    { id: 4, foodName: 'Gorkha Beer', finalPrice: "250",priceOptions: '330ML/650',  ImgSrc: "https://cheers.com.np/uploads/products/864683898504977570141998383656056704019379.png"},
    { id: 5, foodName: 'Nude Vodka', finalPrice: "250",priceOptions: '330ML/650', ImgSrc: "https://cheers.com.np/uploads/products/1947106522566905599529765859549304775570.png"},
    { id: 6, foodName: 'Yeti Vodka',finalPrice: "250", priceOptions: '330ML/650', ImgSrc: "https://cheers.com.np/uploads/products/68347871118650000094216895239715090349541851.png"},
    { id: 7, foodName: '8848 Vodka', finalPrice: "250",priceOptions: '330ML/650', ImgSrc: "https://cheers.com.np/uploads/products/1160468370485454618528897970389741220391755.png"},
    { id: 8, foodName: 'Seto Bagh Vodka',finalPrice: "250", priceOptions: '330ML/650', ImgSrc: "https://cheers.com.np/uploads/products/058185449154444068599455098077916051612.png" },
    { id: 9, foodName: 'Khukri White Rum',finalPrice: "250", priceOptions: '330M/650L', ImgSrc: "https://cheers.com.np/uploads/products/486171461911495698593642763039174343402822.png"},
    { id: 10, foodName: 'Old Monk XXX Rum',finalPrice: "250",priceOptions: '330ML/650',  ImgSrc: "https://cheers.com.np/uploads/products/3672191366021293224359107660323022768630869.png"},
    { id: 11, foodName: 'Grand Master',finalPrice: "250", priceOptions: '330ML/650', ImgSrc: "https://cheers.com.np/uploads/products/486171461911495698593642763039174343402822.png"},
    { id: 12, foodName: 'Khukri Spiced Rum', finalPrice: "250",priceOptions: '330ML/650', ImgSrc: "https://cheers.com.np/uploads/products/659175997209642606326518407939923063797.png"},

    // Add more beverage objects as needed
  ];

  return (
    <div style={{ display: "", justifyContent: "left", alignItems: "left", height: "50vh" }}>
    <div>
      <h1>Beverages List</h1>
      <hr />
      <table style={{ borderCollapse: 'collapse', width: '50%' }}>   
           <thead>
          <tr>
            <th  style={{ border: '1px solid white', padding: '8px' }}>Name</th>
            <th  style={{ border: '1px solid white', padding: '8px' }}>Price</th>
            <th  style={{ border: '1px solid white', padding: '8px' }}>Options</th>
          </tr>
        </thead>
        <tbody>
        {beverages.map((beverage) => (
          <tr key={beverage.id}>
            <td  style={{ border: '1px solid white', padding: '8px' }}>{beverage.foodName}</td>
           <td style={{ border: '1px solid white', padding: '8px' }}>{beverage.finalPrice}</td>
           <td  style={{ border: '1px solid white', padding: '8px' }}>{beverage.priceOptions}</td>
           </tr>
        ))}
        </tbody>
      </table>
       
      </div>
    </div>
  
  

  );
};

export default DrinkList;
