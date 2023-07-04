import React from 'react';

const BeverageCard = (props) => {
  return (
    <div className="card mt-3" style={{ width: "12rem", maxHeight: "300px" }}>
  <img src={props.ImgSrc} className="card-img-top" alt="..." style={{ height: "150px", objectFit: "contain" }} />
  <div className="card-body">
    <h5 className="card-title d-flex justify-content-center">{props.foodName}</h5>
    <h5>{props.finalPrice}</h5>
    <select className="m-2 h-100 w-20 bg-success text-black rounded" style={{ select: "#FF0000" }}>
          {props.priceOptions.map((i) => {
            return <option key={i} value={i}>{i}</option>
          })}
        </select>
  </div>
</div>

  );
};

export default BeverageCard;
