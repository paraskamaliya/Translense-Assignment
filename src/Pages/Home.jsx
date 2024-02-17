import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoMdInformationCircleOutline } from "react-icons/io";
import cloud from "../Assests/cloud.png";
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../Redux/HomeReducer/HomeReducer';

function Home() {
    const HomeForm = useSelector((state) => state.home);
    const [emailOtp, setEmailOtp] = useState("");
    const [mobileOtp, setMobileOtp] = useState("");

    const dispatch = useDispatch();
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(update({ field: name, value }));
    };
    const storeImage = (e) => {
        const { name } = e.target;
        let file = e.target.files[0];
        dispatch(update({ field: name, value: URL.createObjectURL(file) }));
    }

    const getEmailOtp = async () => {
        try {
            if (HomeForm.email == "") {
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
            if (HomeForm.mobileNumber == "") {
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
                        <input type="text" placeholder="Eg. Domino' s Pizza" name='businessName' value={HomeForm.businessName} onChange={handleChange} />
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Country</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <select name="country" id="" value={HomeForm.country} onChange={handleChange}>
                            <option value="">Select Country</option>
                            <option value="India">India</option>
                            <option value="United States">United States</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Australia">Australia</option>
                            <option value="Canada">Canada</option>
                        </select>
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>State *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <select name="state" id="" value={HomeForm.state} onChange={handleChange}>
                            <option value="">Select State</option>
                            <option value="California">California</option>
                            <option value="Texas">Texas</option>
                            <option value="New York">New York</option>
                            <option value="Florida">Florida</option>
                            <option value="Illinois">Illinois</option>
                            <option value="New South Wales">New South Wales</option>
                            <option value="Queensland">Queensland</option>
                            <option value="Victoria">Victoria</option>
                            <option value="Western Australia">Western Australia</option>
                            <option value="South Australia">South Australia</option>
                            <option value="Ontario">Ontario</option>
                            <option value="Quebec">Quebec</option>
                            <option value="British Columbia">British Columbia</option>
                            <option value="Alberta">Alberta</option>
                            <option value="Manitoba">Manitoba</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="Tamil Nadu">Tamil Nadu</option>
                            <option value="Uttar Pradesh">Uttar Pradesh</option>
                            <option value="West Bengal">West Bengal</option>
                            <option value="Gauteng">Gauteng</option>
                            <option value="Western Cape">Western Cape</option>
                            <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                            <option value="Eastern Cape">Eastern Cape</option>
                            <option value="Mpumalanga">Mpumalanga</option>
                        </select>
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>City *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <input type="text" value={HomeForm.city} name='city' onChange={handleChange} />
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Address *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <input type="text" name='address' value={HomeForm.address} onChange={handleChange} />
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Opening Time *</p>
                        </div>
                        <div className='combine'>
                            <input type="time" min={"00:00"} max={"12:00"} name='openingTime' value={HomeForm.openingTime} onChange={handleChange} />
                            <p>AM</p>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Closing Time *</p>
                        </div>
                        <div className='combine'>
                            <input type="time" min={"12:01"} max={"24:00"} name='closingTime' value={HomeForm.closingTime} onChange={handleChange} />
                            <p>PM</p>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>E-mail *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <div className='combine'>
                            <input type="email" name='email' value={HomeForm.email} onChange={handleChange} />
                            <button onClick={getEmailOtp}>Send OTP</button>
                        </div>
                        {emailOtp !== "" && <input type="text" value={emailOtp} className='otpField' onChange={() => { }} />}
                    </div>
                    <div className='field'>
                        <div className='span'>
                            <p>Mobile Number *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <div className='combine'>
                            <input type="number" name='mobileNumber' value={HomeForm.mobileNumber} onChange={handleChange} />
                            <button onClick={getMobileOtp}>Send OTP</button>
                        </div>
                        {mobileOtp !== "" && <input type="text" value={mobileOtp} className='otpField' onChange={() => { }} />}
                    </div>
                    <div>
                        <div className='span'>
                            <p>Upload some images of your Restaurant *</p>
                            <IoMdInformationCircleOutline size={"20px"} fontWeight={500} />
                        </div>
                        <div className='fileInput'>
                            <input type="file" name='image' onChange={storeImage} />
                            {HomeForm.image === "" ? <>
                                <img src={cloud} alt="" />
                                <p>Click to upload</p>
                            </>
                                : <img src={HomeForm.image} alt='image' />}
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div className='nextButton'>
                        <Link to={"/ownerdetails"}>
                            <button>Proceed to Owner & Manager Details →</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Home;