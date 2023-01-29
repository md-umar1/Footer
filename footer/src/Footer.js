import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='bg-dark'>
      <h1 className='fo'>Footer</h1>
              <div className='row py-5 text-white'>
      <div className='col'>
        <h2>Company Name</h2>
        <p>Here is the introduction of the company</p>
      </div>
      <div className='col'>
          <h2 className='text-warning'>Services</h2>
      <p>About us</p>
      <p>policy</p>
      <p>Return services</p>
      <p>Customer Service</p>
      </div>
        <div className='col'>
        <h2 className='text-warning'>Useful Links</h2>
        <p>site map</p>
        <p>shipping Rates</p>
        <p>Affiliate program</p>
        </div> 
        <div className='col'>
        <h2 className='text-warning'>Address</h2>
        <p>H.No:3-35/1</p>
        <p>9949055446</p>
        <p>Gutpa</p>
      </div>
              </div >
    </div >
  )
}

export default Footer
