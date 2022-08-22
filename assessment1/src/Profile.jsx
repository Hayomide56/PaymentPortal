import React from 'react'
import routes from './routes'

const Profile = () => {
  return (
    <>
        <div className='container-fluid'>
            <div className='row mx-auto pt-5'>
                <div className='col-lg-7 col-sm-11 mx-auto'>    
                    <div className='mt-5'>
                        <h3 className='text__color fw-bolder mb-4'>Complete your Purchase</h3>
                        <ul className='list__styling d-flex'>
                            <li className='me-5 text__orange'>Personal Info</li>
                            <li className='me-5'>Billing Info</li>
                            <li className='me-5'>Confirm Payment</li>
                        </ul>
                        <hr className='w-75'/>
                    </div>
                    <form>
                        <label htmlFor="Name" className='mb-2 fw-bolder'>Name</label><br/>
                        <input type="text" className="w-75" placeholder='Name'/><br />
                        <label htmlFor="Email Address" required className='mt-4 fw-bolder'>Email Address <span className='text__red'>*</span></label><br />
                        <p className='text-muted lh-1'>The purchase receipt would be sent to this address</p>
                        <input type="email" placeholder='Email Address' className='w-75' required/><br/>
                        <label htmlFor="Address 1" className='mt-4 mb-2 fw-bolder'>Address 1</label><br/>
                        <input type="text" placeholder='Address 1' className='w-75'/><br/>
                        <label htmlFor="Address 2" className='fw-bolder mt-4 mb-2'>Address 2</label><br/>
                        <input type='text' placeholder='Address 2' className='w-75'/><br/>
                        <div className='row mt-4'>
                            <div className='col-6 me-2'>
                                <label htmlFor="Local Government" className='fw-bolder mb-2'>Local Government</label><br/>
                                <input type="text" placeholder='Local Government' className='w-100' />
                            </div>
                            <div className='col-3 ms-3'>
                                <label htmlFor="state" className='fw-bolder mb-2'>State</label><br/>
                                <select name="state" className='w-75'>
                                    <option selected value='0' className='text-muted'>Select a State</option>
                                    <option value="1">Abia</option>
                                    <option value="2">Adamawa</option>
                                    <option value="3">Akwa Ibom</option>
                                    <option value="4">Anambra</option>
                                    <option value="5">Bauchi</option>
                                    <option value="6">Bayelsa</option>
                                    <option value="7">Benue</option>
                                    <option value="8">Borno</option>
                                    <option value="9">Cross River</option>
                                    <option value="10">Delta</option>
                                    <option value="11">Ebonyi</option>
                                    <option value="12">Edo</option>
                                    <option value="13">Ekiti</option>
                                    <option value="14">Enugu</option>
                                    <option value="15">Abuja (Federal Capital Territory)</option>
                                    <option value="16">Gombe</option>
                                    <option value="17">Imo</option>
                                    <option value="18">Jigawa</option>
                                    <option value="19">Kaduna</option>
                                    <option value="20">Kano</option>
                                    <option value="21">Katsina</option>
                                    <option value="22">Kebbi</option>
                                    <option value="23">Kogi</option>
                                    <option value="24">Kwara</option>
                                    <option value="25">Lagos</option>
                                    <option value="26">Nasarawa</option>
                                    <option value="27">Niger</option>
                                    <option value="28">Ogun</option>
                                    <option value="29">Ondo</option>
                                    <option value="30">Osun</option>
                                    <option value="31">Oyo</option>
                                    <option value="32">Plateau</option>
                                    <option value="33">Rivers</option>
                                    <option value="34">Sokoto</option>
                                    <option value="35">Taraba</option>
                                    <option value="36">Yobe</option>
                                    <option value="37">Zamfara</option>
                                </select>
                            </div>
                        </div>
                        <div className='my-5'>
                            <button className='me-5 w-25 fw-bold button__orange p-2 rounded-2 border-0 text-white'><a href={routes.Billing} className='text-white text-decoration-none'>Next</a></button>
                            <button className='text__color fw-bold bg-transparent border-0'>Cancel Payment</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile