import React from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import cloud from "../Assests/cloud.png";

function OwnerDetails() {
    return (
        <div className='homeMain'>
            <div className='left'>
                <h1>Partner with us</h1>
                <p>Be our partner in just few steps and start Increasing your reach by gaining new customers.</p>
                <div>
                    <div className='box'>
                        <p style={{ color: "white", backgroundColor: "#DC3545" }}>1</p>
                        <p>
                            <Link to={"/"} className='link'>
                                Business Information
                            </Link>
                        </p>
                    </div>
                    <div className='box'>
                        <p style={{ color: "white", fontWeight: 700, backgroundColor: "#DC3545" }}>2</p>
                        <p style={{ fontWeight: 500 }}>
                            Owner & Manager Details
                        </p>
                    </div>
                    <div className='box'>
                        <p>3</p>
                        <p>PAN/Aadhaar Details</p>
                    </div>
                    <div className='box'>
                        <p>4</p>
                        <p>Legal Documents</p>
                    </div>
                    <div className='box'>
                        <p>5</p>
                        <p>Bank Details</p>
                    </div>
                    <div className='box'>
                        <p>6</p>
                        <p>Service Info</p>
                    </div>
                    <div className='box'>
                        <p>7</p>
                        <p>Preview Document</p>
                    </div>
                    <div className='box'>
                        <p>8</p>
                        <p>Reach Increased</p>
                    </div>
                </div>
            </div>
            <div className='right'>
                <h1>Owner & Manager Details</h1>
                <h2>Owner Details</h2>
                <div className='wrapper2'>
                    <div className='field2'>
                        <div className='span'>
                            <p>Full Name *</p>
                        </div>
                        <input type="text" placeholder='Eg. Prabhat Kumar, Sushma Singh' />
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>Profile pic *</p>
                        </div>
                        <div className='fileInput'>
                            <input type="file" />
                            <img src={cloud} alt="" />
                            <p>Click to upload</p>
                        </div>
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>State *</p>
                        </div>
                        <select name="" id="">
                            <option value=""></option>
                        </select>
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>City *</p>
                        </div>
                        <input type="text" />
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>Country *</p>
                        </div>
                        <input type="text" />
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>Address *</p>
                        </div>
                        <input type="text" />
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>E-mail *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <div className='combine'>
                            <input type="text" />
                            <button>Send OTP</button>
                        </div>
                        <div className='checks'>
                            <p>Same as business e-mail</p>
                            <label for="myCheckbox" class="custom-checkbox">
                                <input type="checkbox" id="myCheckbox" />
                            </label>
                        </div>
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>Mobile Number *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <div className='combine'>
                            <input type="text" />
                            <button>Send OTP</button>
                        </div>
                        <div className='checks'>
                            <p>Same as business mobile number</p>
                            <label for="myCheckbox" class="custom-checkbox">
                                <input type="checkbox" id="myCheckbox" />
                            </label>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className='manager'>
                        Do you want to fill manager details?
                        <button>Yes</button>
                        <button>No</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default OwnerDetails