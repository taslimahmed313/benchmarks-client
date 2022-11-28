import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  

  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";


  const handleLogin = (data) => {
    setLoading(true);
    signIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      toast.success("Login User Successfully")
      console.log(user);
      setLoading(false);
      navigate(from, { replace: true})
    })
    .catch(e => {
      console.log(e)
      toast.error(e.message);
      setLoading(false);
    })
  };

  const handleGoogleLogin = () =>{
    setLoading(true)
    googleLogin()
    .then(result => {
      const user = result.user;
      console.log(user)

       const userData = { name: user?.displayName, email: user?.email, role:"Buyer" };
       
       fetch(`https://assginment-project-server-taslimahmed313.vercel.app/users`, {
         method: "POST",
         headers: {
           "content-type": "application/json",
         },
         body: JSON.stringify(userData),
       })
         .then((res) => res.json())
         .then((data) => {
           setLoading(false);
           if (data.acknowledged) {
             toast.success("Google Login Successfully");
             navigate(from, { replace: true });
           }
         });
    })
    .catch(e => console.log(e))
  }

  return (
    <div className="h-[600px] flex justify-center items-center">
      {loading ? (
        <DotLoader className="m-auto" color="#36d7b7"></DotLoader>
      ) : (
        <div className="w-96 p-7 rounded-lg shadow-2xl bg-gradient-to-r from-sky-300 to-indigo-300">
          <h2 className="text-2xl text-center font-serif text-black font-semibold">
            Login
          </h2>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full max-w-xs"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email?.message}</p>
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
                    message: "Password must be 6 characters or longer",
                  },
                })}
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {" "}
                <span className="label-text">Forget Password?</span>
              </label>
              {errors.password && (
                <p className="text-red-600">{errors.password?.message}</p>
              )}
            </div>
            <input
              className="btn w-full capitalize font-serif text-lg text-white font-semibold border-none my-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
              value="Login"
              type="submit"
            />
          </form>
          <p className=" font-medium">
            New to Benchmarks?{" "}
            <Link className=" text-white font-semibold underline" to="/signup">
              Create new Account
            </Link>
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogleLogin}
            className="btn w-full font-serif text-md text-white font-semibold border-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500"
          >
            <FaGoogle className="text-xl text-white mr-2"></FaGoogle> CONTINUE
            WITH GOOGLE
          </button>
        </div>
      )}
    </div>
  );
};

export default Login;
