import React from "react";
import { useForm } from "react-hook-form";
import Countries from "./Countries";
import "./styles.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm password"),
  countries: yup.string,
});

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register("username")} type="text" placeholder="Username" />
      {errors.username ? <span>{errors.username.message}</span> : null}
      <input {...register("password")} type="password" placeholder="Password" />
      {errors.password ? <span>{errors.password.message}</span> : null}
      <input
        {...register("confirm")}
        type="password"
        placeholder="Confirm password"
      />
      {errors.confirm ? <span>{errors.confirm.message}</span> : null}
      <Countries {...register("countries")} />
      <button type="submit">Sign up</button>
    </form>
  );
};

export default Form;
