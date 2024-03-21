import React from 'react'

export default function Shipment() {
  return (
    <div>
        <div className="container">
            <h1 className='display-5'>Shipping Details</h1>
            <form action="" className='mt-5'>
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-md-5">
                        <input type="text" className='form-control mt-4' placeholder='Name' />
                        <input type="number" className='form-control mt-4 w-50' placeholder='Mobile number' />
                    </div>
                    <div className="col-md-5">
                    <input type="number" className='form-control mt-4' placeholder='Mobilenumber' />
                    <input type="number" className='form-control mt-4 w-50' placeholder='Mobilenumber' />
                    </div>
                    <div className="col-1"></div>
                </div>
            </form>
        </div>
    </div>
  )
}
