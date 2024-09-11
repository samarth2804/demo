import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function SignUp() {
  const [formData, setFormData] = useState({
    customerName: "",
    customerEmailId: "",
    contactNumber: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    addressName: "",
    addressLine1: "",
    addressLine2: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(false);
  const [mandatory, setMandatory] = useState(false);
  const navigate = useNavigate();
  const [formDataError, setFormDataError] = useState({
    customerName: "",
    customerEmailId: "",
    contactNumber: "",
    password: "",
    confirm_password: "",
    gender: "",
    dateOfBirth: "",
    addressName: "",
    addressLine1: "",
    addressLine2: "",
    area: "",
    city: "",
    state: "",
    pincode: "",
  });

  //function to store name, email, password... whenever it changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name !== "confirm_password") {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    Validator(name, value);
  };

  const Validator = (id, value) => {
    const newFormDataError = { ...formDataError };
    switch (id) {
      case "customerName":
        const rgx = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
        if (!rgx.test(value)) {
          newFormDataError.customerName = "Full Name is required";
          console.log(id, value);
        } else {
          newFormDataError.customerName = "";
        }
        break;

      case "customerEmailId":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newFormDataError.customerEmailId = "Invalid email format";
        } else {
          newFormDataError.customerEmailId = "";
        }
        break;

      case "gender":
        if (value === "") {
          newFormDataError.gender = "Gender is required";
        } else {
          newFormDataError.gender = "";
        }
        break;

      case "contactNumber":
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(value)) {
          newFormDataError.contactNumber = "Mobile number must be 10 digits";
        } else {
          newFormDataError.contactNumber = "";
        }
        break;

      case "password":
        if (value.length < 6) {
          newFormDataError.password = "Password must be at least 6 characters";
        } else {
          newFormDataError.password = "";
        }
        break;

      case "confirm_password":
        if (formData.password !== value) {
          newFormDataError.confirm_password =
            "Password and Confirm Password must be same!";
        } else {
          newFormDataError.confirm_password = "";
        }
        break;

      case "addressName":
        const addressRegex = /^[A-Za-z]{3,}$/;
        if (!addressRegex.test(value)) {
          newFormDataError.addressName = "Invalid Address Name";
        } else {
          newFormDataError.addressName = "";
        }
        break;
      case "area":
        const areaRegex = /^[A-Za-z]+$/;
        if (!areaRegex.test(value)) {
          newFormDataError.area = "Invalid Area Name";
        } else {
          newFormDataError.area = "";
        }
        break;

      case "pincode":
        const pincodeRegex = /^[0-9]{6}$/;
        if (!pincodeRegex.test(value)) {
          newFormDataError.pincode = "Pincode must be 6 digits";
        } else {
          newFormDataError.pincode = "";
        }
        break;

      default:
        break;
    }

    setFormDataError(newFormDataError);
    const newMandatory = Object.values(newFormDataError).every(
      (val) => val === ""
    );
    setMandatory(!newMandatory);
  };

  //submit form handler
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent refreshing the page when form submitted
    try {
      setLoading(true);

      //check for valid username
      if (!Object.values(formData).every((val) => val !== "")) {
        toast.error("All fields are required");
        setLoading(false);
        return;
      }

      //post request
      const apiData = {
        customerName: formData.customerName,
        customerEmailId: formData.customerEmailId,
        contactNumber: formData.contactNumber,
        password: formData.password,
        gender: formData.gender,
        dateOfBirth: formData.dateOfBirth,
        addressList: [
          {
            addressName: formData.addressName,
            addressLine1: formData.addressLine1,
            addressLine2: formData.addressLine2,
            area: formData.area,
            city: formData.city,
            state: formData.state,
            pincode: formData.pincode,
          },
        ],
      };
      const res = await fetch("/customer-api/customer/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //form data is send to server in the request body
        body: JSON.stringify(apiData), //javaScript obj to json string
      });

      const data = await res.json(); //take json data from response object and parse to js object

      // if error recieved from server
      // if (data) {
      //   setLoading(false);
      //   toast.error(data.message);
      //   return;
      // }
      setLoading(false);
      toast.success("User Registered Successfully !");
      navigate("/sign-in"); //navigate to sign-in page upon successful signup
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">
        Provide Your Details
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - User Info */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg w-full"
              id="fullName"
              onChange={handleChange}
              name="customerName"
              value={formData.customerName}
            />
            {formDataError.customerName && (
              <p className="text-red-500">{formDataError.customerName}</p>
            )}
            <input
              type="email"
              placeholder="Email"
              className="border p-3 rounded-lg w-full mt-4"
              id="email"
              onChange={handleChange}
              name="customerEmailId"
              value={formData.customerEmailId}
            />
            {formDataError.customerEmailId && (
              <p className="text-red-500">{formDataError.customerEmailId}</p>
            )}
            <select
              id="gender"
              className="border p-3 rounded-lg w-full mt-4"
              onChange={handleChange}
              name="gender"
              value={formData.gender}
            >
              <option value="" disabled>
                --Select Gender--
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {formDataError.gender && (
              <p className="text-red-500">{formDataError.gender}</p>
            )}
            <input
              type="date"
              placeholder="Date of Birth"
              className="border p-3 rounded-lg w-full mt-4"
              id="dob"
              onChange={handleChange}
              name="dateOfBirth"
              value={formData.dateOfBirth}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              className="border p-3 rounded-lg w-full mt-4"
              id="mobile"
              onChange={handleChange}
              name="contactNumber"
              value={formData.contactNumber}
            />
            {formDataError.contactNumber && (
              <p className="text-red-500">{formDataError.contactNumber}</p>
            )}
            <input
              type="password"
              placeholder="Password"
              className="border p-3 rounded-lg w-full mt-4"
              id="password"
              onChange={handleChange}
              name="password"
              value={formData.password}
            />
            {formDataError.password && (
              <p className="text-red-500">{formDataError.password}</p>
            )}
            <input
              type="password"
              placeholder="Confirm Password"
              className="border p-3 rounded-lg w-full mt-4"
              id="confirm_password"
              onChange={handleChange}
              name="confirm_password"
            />
            {formDataError.confirm_password && (
              <p className="text-red-500">{formDataError.confirm_password}</p>
            )}
          </div>

          {/* Right side - Address Info */}
          <div className="flex-1">
            <input
              type="text"
              placeholder="Address Name"
              className="border p-3 rounded-lg w-full"
              id="addressName"
              onChange={handleChange}
              name="addressName"
              value={formData.addressName}
            />
            {formDataError.addressName && (
              <p className="text-red-500">{formDataError.addressName}</p>
            )}
            <input
              type="text"
              placeholder="Address Line 1"
              className="border p-3 rounded-lg w-full mt-4"
              id="addressLine1"
              onChange={handleChange}
              name="addressLine1"
              value={formData.addressLine1}
            />
            {formDataError.addressLine1 && (
              <p className="text-red-500">{formDataError.addressLine1}</p>
            )}
            <input
              type="text"
              placeholder="Address Line 2"
              className="border p-3 rounded-lg w-full mt-4"
              id="addressLine2"
              onChange={handleChange}
              name="addressLine2"
              value={formData.addressLine2}
            />
            <input
              type="text"
              placeholder="Area"
              className="border p-3 rounded-lg w-full mt-4"
              id="area"
              onChange={handleChange}
              name="area"
              value={formData.area}
            />
            {formDataError.area && (
              <p className="text-red-500">{formDataError.area}</p>
            )}
            <input
              type="text"
              placeholder="City"
              className="border p-3 rounded-lg w-full mt-4"
              id="city"
              onChange={handleChange}
              name="city"
              value={formData.city}
            />
            <input
              type="text"
              placeholder="State"
              className="border p-3 rounded-lg w-full mt-4"
              id="state"
              onChange={handleChange}
              name="state"
              value={formData.state}
            />
            <input
              type="text"
              placeholder="Pincode"
              className="border p-3 rounded-lg w-full mt-4"
              id="pincode"
              onChange={handleChange}
              name="pincode"
              value={formData.pincode}
            />
            {formDataError.pincode && (
              <p className="text-red-500">{formDataError.pincode}</p>
            )}
          </div>
        </div>

        <button
          disabled={loading || mandatory}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 mt-6"
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
    </div>
  );
}
