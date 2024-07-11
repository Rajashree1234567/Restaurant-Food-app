import React, { useState } from "react";
// import { Validation } from "./Validation";

export const InputForm = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleInput(e) {
    const { name, value } = e.target;
    let inputObj = { ...inputValue, [name]: value };
    setInputValue(inputObj);
    setErrors({
      ...errors,
      [name]: "",
    });
  }

  const validate = () => {
    const newErrors = {};
    if (!inputValue.name) {
      newErrors.name = 'Name is required';
    }
    if (!inputValue.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputValue.email)) {
      newErrors.email = 'Email is invalid';
    }
    return newErrors;
  };

  function handleFormSubmit() {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle successful form submission
      console.log('Form submitted:', inputValue);
    }
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="name"
            value={inputValue.name}
            onChange={handleInput}
            placeholder="User name"
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={inputValue.email}
            onChange={handleInput}
            placeholder="Email"
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={inputValue.phone}
            onChange={handleInput}
            placeholder="Phone"
          />
          {errors.phone && <span>{errors.phone} </span>}
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={inputValue.password}
            onChange={handleInput}
            placeholder="password"
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
