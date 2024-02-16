import React from 'react'
import { Link } from 'react-router-dom';
import { IoMdInformationCircleOutline } from "react-icons/io";
import Icon from "../Assests/icon.png";

function Home() {
    return (
        <div className='homeMain'>
            <div className='left'>
                <h1>Partner with us</h1>
                <p>Be our partner in just few steps and start Increasing your reach by gaining new customers.</p>
                <div>
                    <div className='box'>
                        <p style={{ color: "white", fontWeight: 700, backgroundColor: "#DC3545" }}>1</p>
                        <p style={{ fontWeight: 500 }}>
                            <Link to={"/"} className='link'>
                                Business Information
                            </Link>
                        </p>
                    </div>
                    <div className='box'>
                        <p>2</p>
                        <p>Owner & Manager Details</p>
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
                <h1>Business Information</h1>
                <div className='wrapper'>
                    <div className='field'>
                        <div className='span'>
                            <p>Business Name *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <input type="text" />
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Country</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <select name="" id="">
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>State *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <select name="" id="">
                            <option value="">Select State</option>
                            <option value="Delhi">Delhi</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>City *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <input type="text" />
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Address *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <input type="text" />
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Opening Time *</p>
                        </div>
                        <input type="time" />
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Closing Time *</p>
                        </div>
                        <input type="time" />
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>E-mail *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <div className='combine'>
                            <input type="text" />
                            <button>Send OTP</button>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Mobile Number *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <div className='combine'>
                            <input type="text" />
                            <button>Send OTP</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;