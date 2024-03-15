import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { authService } from ".././appwrite/auth";
import { login as storeLogin } from "../store/authSlice";
import Input from "./Input";
import Button from "./Button";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState();

  const Login = async (data) => {
    setError("");
    try {
      const session = await authService.userLogin(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(storeLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <div>
        <div>Login logo</div>
        <h2>signto your account</h2>
        <p>
          <Link to="/signup" />
        </p>
        {error && <p className="text-red-600">{error}</p>}
        <form onSubmit={() => handleSubmit(Login())}>
          <div>
            <Input
              label="Email"
              placeholder="type your emaail address"
              type="email"
              name="email"
              {...register("email", {
                required: true,
                // validate: {
                //   matchPattern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.test(value) || "email address must be valid"
                // },
              })}
            />
            <Input
              label="Password"
              placeholder="type your password"
              type="password"
              name="password"
              {...register("password", {
                required: true,
              })}
              />
              <Button 
              type="submit"
              bgColor="bg-blue-700"
              text="text-white"
              className="w-full"
              >Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
