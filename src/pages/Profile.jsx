import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOutUserStart,
  signOutUserFailure,
  signOutUserSuccess,
} from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';
import Avatar from '/avatar.png'

export default function Profile() { 
  const { currentUser, loading, error } = useSelector((state) => state.user);    // data from the redux store
  // const currentUser = {
  //   customerName: "Samarth Verma",
  //   customerEmailId: "samarth@gmail.com",
  //   contactNumber: "8756207700",
  //   password: "Hello@123",
  //   gender: "Male",
  //   dateOfBirth: "2024-01-01",
  //   addressList: [
  //     {
  //       addressName: "Home",
  //       addressLine1: "Shillong",
  //       addressLine2: "Rynjah",
  //       area: "Nit Meghalaya",
  //       city: "shillong",
  //       state: "Uttar Pradesh",
  //       pincode: "273164",
  //     },
  //   ],
  // };

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmailId: '',
    contactNumber: '',
    password: ''
  });                                  
  const dispatch = useDispatch();
  const navigate =useNavigate();
  
  //update the form data
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  // //update the user in db
  const handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   dispatch(updateUserStart());                                              //set loading true
    //   //http put request to update the user
    //   const res = await fetch(`/api/user/update/${currentUser._id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await res.json();
    //   //if error during update we get success 'false'
    //   if (data.success === false) {
    //     dispatch(updateUserFailure(data.message));                              //set the error
    //     return;
    //   }
      
    //   //if sucessfully updated --> set the updated user as current user
    //   dispatch(updateUserSuccess(data));
    //   setUpdateSuccess(true);                                                    //to show the message after successful update
    // } catch (error) {
    //   dispatch(updateUserFailure(error.message));                                //in case of error during update dispatch the updateUserFailure action with the error message
    // }
    toast.success("Successfully updated!");
  };
  
  //delete the user from db
  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserSuccess());                                         //set currentuser to null
      navigate('/')
      toast.success('User deleted successfully!')
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

//signOut the user by clearing jwt token and set the currentuser to null
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserSuccess());  
      navigate('/')
      toast.success('Sign out successfully!')
    } catch (error) {
      dispatch(signOutUserFailure(data.message));
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        {/* input for uploading image file */}
        <img
          src={Avatar}              //if user uploaded avatar then show that one
          alt='profile'
          className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2'
        />
        <input
          type='text'
          placeholder='username'
          defaultValue={currentUser.customerName}
          id='username'
          className='border p-3 rounded-lg'
          onChange={handleChange}
          name="customerName"
        />
        <input
          type='email'
          defaultValue={currentUser.customerEmailId}
          className='border p-3 rounded-lg bg-zinc-200/50'
          disabled
        />
        <input
          type='number'
          placeholder='contactNumber'
          defaultValue={currentUser.contactNumber}
          id='contactNumber'
          className='border p-3 rounded-lg'
          onChange={handleChange}
          name="contactNumber"
        />
        <input
          type='password'
          placeholder='Update password'
          onChange={handleChange}
          id='password'
          className='border p-3 rounded-lg'
          name="password"
        />
        <button
          type="submit"
          className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'
        >
          Update
        </button>
      </form>
      <div className='flex justify-between mt-5'>
        <span
          onClick={handleDeleteUser}
          className='text-red-700 cursor-pointer'
        >
          Delete account
        </span>
        <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
          Sign out
        </span>
      </div>
    </div>
  );
}
