import React from 'react'
import routes from './routes'
import {FaCheck} from 'react-icons/fa'

const Completed = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row pt-5 mx-auto'>
                <div className='col-lg-7 col-sm-11 mt-5 mx-auto'>    
                    <div className='p-5 w-75 mx-auto mt-5 card border-0 shadow-sm'>
                        <div className='w-75 mx-auto'>
                            <div className='text-center'>
                                <FaCheck className='bg-white rounded-circle mb-4 fs-1 p-1 text__green shadow-sm'/>
                            </div>
                            <h2 className='text__color fw-bolder mb-4'>Purchase Completed</h2>
                            <p className='w-75'>Please check your email for details concerning this transaction</p>
                            <a href={routes.Profile} className="text__orange">Return Home</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Completed