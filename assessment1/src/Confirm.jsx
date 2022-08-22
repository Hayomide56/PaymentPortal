import React from 'react'
import routes from './routes'
import {TbCurrencyNaira} from 'react-icons/tb'

const Confirm = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row mx-auto pt-5'>
                <div className='col-lg-7 col-sm-11 mx-auto'>    
                    <div className='mt-5'>
                        <h3 className='text__color fw-bolder mb-4'>Complete your Purchase</h3>
                        <ul className='list__styling d-flex'>
                            <li className='me-5'>Personal Info</li>
                            <li className='me-5'>Billing Info</li>
                            <li className='me-5 text__orange'>Confirm Payment</li>
                        </ul>
                        <hr className='w-75'/>
                    </div>
                    <div className="card w-75 border-0 shadow-sm">
                        <table className="card-header bg__blue text-white">
                            <tr>
                                <th className='p-3'>Item Name</th>
                                <th><TbCurrencyNaira className='fs-4'/>Price</th>
                            </tr>
                        </table>
                        <div className="card-body">
                            <table>
                                <tr>
                                    <td className='table__data table__text'>Data Science</td>
                                    <td className='table__text'>50,000.00</td>
                                </tr>
                                <tr>
                                    <td className='table__text'>Shipping</td>
                                    <td className='table__text text-end'>0:00</td>
                                </tr>
                            </table>
                            <hr/>
                            <table className='w-100'>
                                <tr className="border border__blue">
                                    <td className='table__data2 p-2'>Total</td>
                                    <td>50,000.00</td>
                                </tr>
                            </table>
                        </div>
                    </div>                  
                    <div className='mt-5'>
                        <button className='me-5 w-25 fw-bold button__orange p-2 rounded-2 border-0'><a href={routes.Completed} className='text-white text-decoration-none'>Pay</a></button>
                        <button className='text__color fw-bold bg-transparent border-0'>Cancel Payment</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Confirm