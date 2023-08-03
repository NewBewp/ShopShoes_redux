import React from "react";
import { useDispatch } from "react-redux";
import { detailProductAction } from "./shopShoes/action";

const ProductItem = ({ shoes }) => {
    const dispatch = useDispatch()
  return (
    <div className="col-4 py-2" key={shoes.id}>
      <div className="card">
        <img src={shoes.image} alt="..." />
        <div className="text-start px-3">
          <h3>{shoes.name}</h3>
          <h4>{shoes.price} $</h4>
        </div>
        <div className="card-body d-md-flex gap-3 justify-content-md-start">
          <button className="btn btn-dark rounded-0">Add To Cart</button>
          <button
            className="btn btn-primary rounded-0"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={()=>{
                dispatch(detailProductAction.handleProductDetail(shoes))
            }}
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
