import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import img from "../assets/images/login.png";


const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleInput = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user.email,
          password: user.password,
        }),
      });

      if (response.ok) {
      
        setUser({ email: "", password: "" }); 
        navigate("/");
      } else {
        
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.error("Login error", error);
    }
  };

  return (
    <div className="container mx-auto px-6 mt-28 h-screen ">
      <h1 className="text-3xl font-bold text-center mb-10">Login</h1>
      <div className=" flex items-center justify-center md:flex-row gap-10">
        <div className="w-full max-w-xs ">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:size-96 lg:h-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
                type="email"
                autoComplete="off"
                placeholder="email"
                value={user.email}
                onChange={handleInput}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                name="password"
                type="password"
                placeholder="password"
                value={user.password}
                onChange={handleInput}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Login
              </button>
              <Link
                // to="/"
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              >
                Forgot Password?
              </Link>
            </div>
          </form>
          {/* {error && <p className="text-red-500">{error}</p>} */}
          <p className="text-center text-gray-500 text-xs">
            Don't have an account?{" "}
            <Link
              to="/Registration"
              className="text-blue-500 hover:text-blue-800"
            >
              Register
            </Link>
          </p>
        </div>
        <div className="hidden size-2/5 md:block ml-32">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
