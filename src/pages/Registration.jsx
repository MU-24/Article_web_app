import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/images/register.png";
const URL = "http://localhost:5000/api/auth/register";

const Registration = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
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
    // console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error("Failed to register user.");
      }
      // Assuming the server responds with JSON
      const data = await response.json();

      if (response.ok) {
        setUser({ username: "", email: "", phone: "", password: "" });
        navigate("/login");
      }
      // Process the response data as needed
      // console.log(data);
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="container mx-auto px-6 mt-28 h-screen">
            <h1 className="text-3xl font-bold text-center mb-10">
              Registration Form
            </h1>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <form
                  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      name="username"
                      placeholder="username"
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="number"
                      name="phone"
                      placeholder="phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
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
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
                {/* {error && <p className="text-red-500">{error}</p>} */}
              </div>
              <div className="hidden size-2/5 md:block ml-32">
                <img src={img} alt="" />
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Registration;
