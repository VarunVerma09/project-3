import React from 'react';

const Cardpage = () => {
    return (
        <>
         <div class="container my-4">
    <div class="row">

     
      <div class="col-md-8">
        <div class="card shadow-sm mb-3">
          <div class="card-header bg-white">
            <span class="fw-bold">From Saved Addresses</span>
            <button class="btn btn-outline-primary btn-sm float-end">Enter Delivery Pincode</button>
          </div>
          <div class="card-body">

         
       
             
          

          </div>
        </div>
      </div>

 
      <div class="col-md-4">
        <div class="card shadow-sm">
          <div class="card-header bg-white">
            <h6 class="fw-bold">PRICE DETAILS</h6>
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between mb-2">
              <span>Price (16 items)</span> <span>₹1,04,494</span>
            </div>
            <div class="d-flex justify-content-between mb-2 text-success">
              <span>Discount</span> <span>- ₹31,545</span>
            </div>
            <div class="d-flex justify-content-between mb-2 text-success">
              <span>Buy more & save more</span> <span>- ₹1,250</span>
            </div>
            <div class="d-flex justify-content-between mb-2 text-success">
              <span>Coupons for you</span> <span>- ₹35</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span>Protect Promise Fee</span> <span>₹276</span>
            </div>
            <hr/>
            <div class="d-flex justify-content-between fw-bold">
              <span>Total Amount</span> <span>₹71,940</span>
            </div>
            <p class="text-success small mt-2">You will save ₹32,554 on this order</p>
            <button class="btn btn-warning w-100 fw-bold">PLACE ORDER</button>
          </div>
        </div>
      </div>

    </div>
  </div>

        </>
    );
}

export default Cardpage;
