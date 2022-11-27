import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { AuthContext } from "../../../Contexts/AuthProvider";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [signUpError, setSignUPError] = useState("");
  const [loading, setLoading] = useState(false);

  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  


  const handleSignUp = data =>{
    setLoading(true);
    createUser(data.email, data.password)
    .then(result =>{
      const user = result.user;
      
      const profile = {displayName: data.name};
      updateUser(profile)
      .then(() => {
        saveUserData(data.name, data.email, data.role)
        setLoading(false)
        toast.success("Sign Up and User Data Stored Successfully");
        navigate(from, { replace: true });
      })
      .catch(e => console.log(e));
      console.log(user)
      
    })
    .catch(e => console.log(e));
  }

   const saveUserData = (name, email, role) => {
     const user = { name, email, role };
     fetch("http://localhost:5000/users", {
       method: "POST",
       headers: {
         "content-type": "application/json",
       },
       body: JSON.stringify(user),
     })
       .then((res) => res.json())
       .then((data) => {
         console.log(data);
       });
   };

  

  return (
    <div className="h-[600px] flex justify-center items-center">
      {loading ? (
        <DotLoader className="m-auto" color="#36d7b7"></DotLoader>
      ) : (
        <div className="w-96 p-7 rounded-lg shadow-2xl bg-gradient-to-r from-sky-300 to-indigo-300">
          <h2 className="text-2xl text-center font-serif text-black font-semibold">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div>
              <label className="label">
                {" "}
                <span className="label-text">Select Your Account</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs"
                {...register("role", {
                  required: "Account Must be Select",
                })}
              >
                <option selected>Buyer</option>
                <option>Seller</option>
              </select>
              {errors.account && (
                <p className="text-red-500">{errors.account.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: true,
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters long",
                  },
                  pattern: {
                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                    message:
                      "Password must have uppercase, number and special characters",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <input
              className="btn w-full capitalize font-serif text-lg text-white font-semibold border-none mt-4 mb-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
              value="Sign Up"
              type="submit"
            />
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </form>
          <p className="text-black font-semibold">
            Already have an account?{" "}
            <Link className=" text-white underline font-semibold" to="/login">
              Please Login
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default SignUp;
