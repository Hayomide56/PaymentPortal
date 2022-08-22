import React from 'react'
import routes from './routes'

const Billing = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row mx-auto pt-5'>
                <div className='col-lg-7 col-sm-11 mx-auto'>    
                    <div className='mt-5'>
                        <h3 className='text__color fw-bolder mb-4'>Complete your Purchase</h3>
                        <ul className='list__styling d-flex'>
                            <li className='me-5'>Personal Info</li>
                            <li className='me-5 text__orange'>Billing Info</li>
                            <li className='me-5'>Confirm Payment</li>
                        </ul>
                        <hr className='w-75'/>
                    </div>
                    <form>
                        <label htmlFor="Name on Card" className='mb-2 fw-bolder'>Name on Card <span className='text__red'>*</span></label><br/>
                        <input type="text" className="w-75" placeholder='Name on Card' required /><br/>
                        <label htmlFor="Card Type" className='mt-4 mb-2 fw-bolder'>Card Type <span className='text__red'>*</span></label><br/>
                        <select name="Card Type" className="w-75" required >
                            <option selected value="0"></option>
                            <option value="1">Mastercard</option>    
                            <option value="2">Verve Card</option>
                            <option value="3">Visa Card</option>
                        </select><br/>
                        <div className='row mt-4'>
                            <div className='col-6'>
                                <label htmlFor="Card details" className='fw-bolder mb-2'>Card Details <span className='text__red'>*</span></label><br/>
                                <input type="number" name="Card details" className="w-100" required placeholder='**** **** **** ****' />
                            </div>
                            <div className='col-2'>
                                <label htmlFor="Expiry Date" className='fw-bolder mb-2'>Expiry Date <span className='text__red'>*</span></label><br/>
                                <input type="date" name="Expiry Date" className='w-75' required placeholder='** / **'/>
                            </div>
                            <div className='col-2'>
                                <label htmlFor="CVV" className='fw-bolder mb-2'>CVV <span className='text__red'>*</span></label><br/>
                                <input type="number" name="CVV" className='w-50' required placeholder="***" />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <button className='me-5 w-25 fw-bold button__orange p-2 rounded-2 border-0 text-white'><a href={routes.Confirm} className='text-white text-decoration-none'>Next</a></button>
                            <button className='text__color fw-bold bg-transparent border-0'>Cancel Payment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Billing