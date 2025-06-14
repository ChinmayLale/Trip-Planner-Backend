import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'




import registerImg from '../assets/RegisterImg.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../Redux/slices/authSlice';

const Register = () => {

        const [fullname, setFullName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [gender, setGender] = useState("");
        const [username, setUsername] = useState("");
        const [dob, setDob] = useState("");
        const [phone, setPhone] = useState("");
        const [profileImage, setProfileImage] = useState(null);

        const{user, loading } = useSelector((state) => state.auth);
        const dispatch = useDispatch(); 
        const navigate = useNavigate();




        // useEffect to redirect user to home page if already logged in
        useEffect(() => {
            if (user && !loading) {
                navigate("/");
            }
        }, [user, loading, navigate]);



    const handleSubmit = (e) =>{
    e.preventDefault();

    const formData = new FormData();
    formData.append('fullname', fullname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('username', username);
    formData.append('gender', gender);
    formData.append('dob', dob);
    formData.append('phone_number', phone);
    formData.append('profilePicture', profileImage);

    // handle the registration logic, such as making an API call to register the user.
    dispatch(registerUser(formData));
}


return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center p-6'>
    <div className='flex p-6 border rounded-2xl'>
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12'>
            <form onSubmit={handleSubmit} className='w-full max-w-md bg-white p-8 rounded-lg border shadow-sm'>
                <div className='flex justify-center mb-6'>
                    <h2 className='text-xl font-medium'>Trip-Planner</h2>
                </div>
                <h2 className='text-2xl font-bold text-center mb-6'>Hey there!👋🏻</h2>
                <p className='text-center mb-6'>Enter your details to Register</p>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    <div>
                    <label className='block text-sm font-semibold mb-2'>Full Name</label>
                    <input
                        type="text"
                        value={fullname}
                        onChange={(e) => setFullName(e.target.value)}
                        className='w-full p-2 border rounded'
                        placeholder='Enter your Full Name'
                        required
                    />
                </div>
                
                <div>
                    <label className='block text-sm font-semibold mb-2'>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full p-2 border rounded'
                        placeholder='Enter your Email'
                        required
                    />
                </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                    
                <div>
                    <label className='block text-sm font-semibold mb-2'>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full p-2 border rounded'
                        placeholder='Enter your Password'
                        required
                    />
                </div>
                <div>
                    <label className='block text-sm font-semibold mb-2'>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='w-full p-2 border rounded'
                        placeholder='Enter your Username'
                        required
                    />
                </div>

                
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                
                <div>
                    <label className='block text-sm font-semibold mb-2'>Gender</label>
                    <select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                        className='w-full p-2 border rounded'
                        required
                    >
                        <option value="">Select your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                {/* dob */}
                <div>
                    <label className='block text-sm font-semibold mb-2'>Date of Birth</label>
                    <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        className='w-full p-2 border rounded'
                        required
                    />
                </div>

                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6'>
                <div>
                    <label className='block text-sm font-semibold mb-2'>Phone</label>
                    <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className='w-full p-2 border rounded'
                        placeholder='Enter your Phone number'
                        required
                    />
                </div>

                <div className='mb-6'>
                    <label className='block text-sm font-semibold mb-2'>Profile Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setProfileImage(e.target.files[0])}
                        className='w-full border rounded p-2'
                    />
                </div>

                </div>

                <button type='submit' className='w-full bg-black text-white rounded-lg p-2 font-semibold hover:bg-gray-800 transition'>Sign Up</button>
                <p className='mt-6 text-center text small'>Already have an Account? <Link to={`/login`} className='text-blue-500'>Login</Link> </p>
            </form>
        </div>

        <div className='hidden md:block w-1/2 bg-gray-800 rounded-2xl overflow-hidden'>
            <div className='h-full flex flex-col justify-center items-center'>
                <img src={registerImg} alt='Register to Account' className='h-[850px] w-full object-cover rounded-2xl' />
            </div>
        </div>
    </div>
    </div>
)
}

export default Register