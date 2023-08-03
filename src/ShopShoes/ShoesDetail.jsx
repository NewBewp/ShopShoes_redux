import React from "react";
import { useSelector } from "react-redux";

const ShoesDetail = () => {
    const {shoesDetail} = useSelector((state)=>state.shopShoes)
    
    console.log("shoesDetail: ", shoesDetail);
    
  return (
    <div
      className="modal fade modal-lg "
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Detail
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            <div className="row">
                <div className="col-4">
                    <img src={shoesDetail.image} alt="..." className="img-fluid" st/>
                </div>
                <div className="col-8 text-start">
                    <p className="fw-bold fs-3">{shoesDetail.name}</p>
                    <p className="mt-3">{shoesDetail.description}</p>
                    <p className="mt-3 fw-bold">Giá: {shoesDetail.price}$</p>
                    <p className="mt-3 ">Số lượng: {shoesDetail.quantity}</p>
                </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary rounded-0"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoesDetail;
