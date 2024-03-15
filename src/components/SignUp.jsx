import React, { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { useDispatch } from "react-redux";
import { login as storeLogin } from "../store/authSlice";
import { useNavigate } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const createAccout = async (data) => {
    setError("");
    try {
      const user = await authService.createAccount(data);
      if (user) {
        const getData = await authService.getCurrentUser();
        if (user) dispatch(storeLogin());
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <div>
        <div>Sign Up</div>
      </div>
      <div>{error && <p> {error}</p>}</div>
      <div>
        <form onSubmit={() => handleSubmit(createAccout())}>
            <Input
            type="text"
            name="name"
            label="Name:"
            placeholder="type your name"
            {...register("name", {
                required: true,
            })}
            />
            <Input
            type="email"
            name="email"
            label="Email:"
            placeholder="type your email"
            {...register("email", {
                required: true,
            })}
            />
            <Input
            type="password"
            name="password"
            label="Password:"
            placeholder="type your password"
            {...register("password", {
                required: true,
            })}
            />
            <Button type="submit" className="w-full">Create Account</Button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
