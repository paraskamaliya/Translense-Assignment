import React, { useState } from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'
import cloud from "../Assests/cloud.png";
import { useDispatch, useSelector } from 'react-redux';
import { updateForm } from '../Redux/OwnerReducer/OwnerReducer';

function OwnerDetails() {
    const OwnerForm = useSelector((state) => state.owner);
    const [emailOtp, setEmailOtp] = useState("");
    const [mobileOtp, setMobileOtp] = useState("");

    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateForm({ field: name, value }));
    };
    const storeImage = (e) => {
        const { name } = e.target;
        let file = e.target.files[0];
        dispatch(updateForm({ field: name, value: URL.createObjectURL(file) }));
    }

    const getEmailOtp = async () => {
        try {
            if (OwnerForm.email == "") {
                return;
            }
            let res = await fetch(`https://bookmyticket-vpuj.onrender.com/movies`, {
                method: "GET"
            })
            let data = await res.json();
            const digits = '0123456789';
            let otp = '';
            for (let i = 0; i < 5; i++) {
                otp += digits[Math.floor(Math.random() * 10)];
            }
            setEmailOtp(otp);
        } catch (error) {
            console.log(error);
        }
    }

    const getMobileOtp = async () => {
        try {
            if (OwnerForm.mobileNumber == "") {
                return;
            }
            let res = await fetch(`https://bookmyticket-vpuj.onrender.com/movies`, {
                method: "GET"
            })
            let data = await res.json();
            const digits = '0123456789';
            let otp = '';
            for (let i = 0; i < 5; i++) {
                otp += digits[Math.floor(Math.random() * 10)];
            }
            setMobileOtp(otp);
        } catch (error) {
            console.log(error);
        }
    }

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
                        <input type="text" placeholder='Eg. Prabhat Kumar, Sushma Singh' name='fullName' value={OwnerForm.fullName} onChange={handleChange} />
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>Profile pic *</p>
                        </div>
                        <div className='fileInput'>
                            <input type="file" name='image' onChange={storeImage} />
                            {OwnerForm.image === "" ? <>
                                <img src={cloud} alt="" />
                                <p>Click to upload</p>
                            </>
                                : <img src={OwnerForm.image} alt='image' />}
                        </div>
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>State *</p>
                        </div>
                        <select name="state" id="" value={OwnerForm.state} onChange={handleChange}>
                            <option value=""></option>
                        </select>
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>City *</p>
                        </div>
                        <input type="text" name='city' value={OwnerForm.city} onChange={handleChange} />
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>Country *</p>
                        </div>
                        <input type="text" name='country' value={OwnerForm.country} onChange={handleChange} />
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>Address *</p>
                        </div>
                        <input type="text" name='address' value={OwnerForm.address} onChange={handleChange} />
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>E-mail *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <div className='combine'>
                            <input type="email" name='email' value={OwnerForm.email} onChange={handleChange} />
                            <button onClick={getEmailOtp}>Send OTP</button>
                        </div>
                        <div className='checks'>
                            <p>Same as business e-mail</p>
                            <label for="myCheckbox" className="custom-checkbox">
                                <input type="checkbox" id="myCheckbox" />
                            </label>
                        </div>
                        {emailOtp !== "" && <input type="text" value={emailOtp} className='otpField' onChange={() => { }} />}
                    </div>
                    <div className='field2'>
                        <div className='span'>
                            <p>Mobile Number *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <div className='combine'>
                            <input type="number" name='mobileNumber' value={OwnerForm.mobileNumber} onChange={handleChange} />
                            <button onClick={getMobileOtp}>Send OTP</button>
                        </div>
                        <div className='checks'>
                            <p>Same as business mobile number</p>
                            <label for="myCheckbox" className="custom-checkbox">
                                <input type="checkbox" id="myCheckbox" />
                            </label>
                        </div>
                        {mobileOtp !== "" && <input type="text" value={mobileOtp} className='otpField' onChange={() => { }} />}
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