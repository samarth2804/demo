import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  signInSuccess
} from '../redux/user/userSlice';
import {toast} from 'react-hot-toast';

export default function SignIn() {
  const [formData, setFormData] = useState({
    customerEmailId:'',
    password:''
  });
  const [loading,setloading ] = useState(false);                                   //slow loading on button during login
  const navigate = useNavigate();                                                  //to navigate to '/' page after login
  const dispatch = useDispatch();                                                  //used to dipatch actions to the redux store
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      //http post request 
      const res = await fetch('/customer-api/customer/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();                                                  //take json data from response object and parse to js object
      // if (data.success === false) {
      //   toast.error(data.message);
      //   setloading(false);
      //   return;
      // }
      dispatch(signInSuccess(data));                                                 //disptach action with user data
      toast.success(`Welcome ${data.customerName} !`); 
      setloading(false);                                  
      navigate('/');
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input
          type='email'
          placeholder='email'
          className='border p-3 rounded-lg'
          id='email'
          onChange={handleChange}
          name="customerEmailId"
          value={formData.customerEmailId}
        />
        <input
          type='password'
          placeholder='password'
          className='border p-3 rounded-lg'
          id='password'
          onChange={handleChange}
          name="password"
          value={formData.password}
        />

        <button
          disabled={loading}
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
        >
          {loading ? 'Loading...' : 'Sign In'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={'/sign-up'}>
          <span className='text-blue-700'>Register</span>
        </Link>
      </div>
    </div>
  );
}
