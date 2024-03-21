import React from 'react'
import { useState } from 'react'

const ShippingDetails = () => {
  let [qty,setQty]=useState(1);
  const qtyIn = (e) => {
    e.preventDefault();
    setQty(qty+1);
  }
  const qtyDec = (e) => {
    e.preventDefault();
    setQty(qty-1);
  }
  return (
    <div>
       <div className="container">
        <div className="formbdr border border-primary p-5 m-2 rounded">
          {/* {msg && (
            <p className="border bg-success text-light fw-semibold fs-5 rounded">
              Product Added Successfully...!
            </p>
          )} */}
          <h2 className="display-5 mb-5">Confirm Your Order</h2>
          <form onSubmit={()=>console.log("Submited")}>
            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  name="p_name"
                  className="form-group w-100 rounded mt-4 form-control"
                  placeholder="Product Name"
                  //value={p_name}
                  //onChange={(e) => setP_name(e.target.value)}
                />
                <input
                  type="number"
                  name="p_price"
                  className="form-group w-100 rounded mt-4 form-control"
                  placeholder="Product Price"
                 // value={p_price}
                 // onChange={(e) => setP_price(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <div className='d-flex  '>
                <button className="btn btn-secondary" onClick={qtyIn}>+</button>
                <input
                  type="number"
                  name="p_stock"
                  className="form-group w-25 rounded mt-4 form-control"
                  placeholder="Product Quantity"
                  value={qty}
                  disabled
                 // value={p_stock}
                 // onChange={(e) => setP_stock(e.target.value)}
                />
                <button className="btn btn-secondary " onClick={qtyDec}>-</button>
                </div>
                <input
                  type="file"
                  className="form-group rounded mt-4 ml-5 form-control"
                 // onChange={(e) => setP_img(e.target.files[0])}
                />
              </div>
              <div className="col-md-12">
                <textarea
                  name="p_descrip"
                  cols="30"
                  rows="5"
                  placeholder="Product Description"
                 // value={p_descrip}
                 // onChange={(e) => setP_descrip(e.target.value)}
                  className="mt-4 w-100 rounded"
                ></textarea>
                <button
                  type="submit"
                  className="btn btn-outline-success w-100 mt-4"
                >
                  <b>Add Product</b>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShippingDetails