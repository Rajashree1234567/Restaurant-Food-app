import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import styled from "./style.module.css";

let renderCount = 0;

// type FormValues = {
//   username: string;
//   email: string;
//   channel: string;
// };

export const InputForm = () => {
  // const form = useForm<FormValues>();
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const {error} = formState;
//   const { name, ref, onChange, onBlur } = register("username");  learnig purpose
  // const onSubmit = (data: FormValues) => {
    const onSubmit = (data) => {
    console.log("data value", data);
  }

renderCount++
  return (
    <div>
        <h1>Youtube Form ({renderCount/2}) </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <lable htmlFor="username">Username</lable>
        <input
            type="text"
            id="username"
        //   name={name}
        //   ref={ref}
        //   onChange={onChange}
        //   onBlur={onBlur}
        // how the register working on
            {...register ("username",{
              required: {
                value: true,
                message: "username is required"
              }
            })}
        />
        <p className={styled.errorMes}>{error.username?.message}</p>

        <label htmlFor="email">Email</label>
        <input 
            type="text" 
            id="email"
            {...register ("email", {
              pattern: {
                value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Invalied email",
              }
            })}
         />
         <p>{error.email?.message}</p>

        <label htmlFor="channel">Channel</label>
        <input 
            type="text" 
            id="channel" 
            {...register ("channel",{
              required: {
                value: true,
                message: 'channel is required'
              }
          })} />
          <p>{error.channel?.message}</p>

        <button>Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
