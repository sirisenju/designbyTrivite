import React, { useState } from "react";

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [errors, setErrors] = useState({ name: "", email: "" });

const handleSubmit = (e) => {
  e.preventDefault();

  let isError = false;

  if (name.trim() === "") {
    isError = true;
    setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
  }

  if (email.trim() === "") {
    isError = true;
    setErrors((prevErrors) => ({ ...prevErrors, email: "Email is required" }));
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      isError = true;
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
    }
  }

  if (!isError) {
    alert("Form submitted successfully");
    setName("");
    setEmail("");
    setErrors({ name: "", email: "" });
  }
};

function EmailForm() {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default EmailForm;
