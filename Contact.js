import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: ""
  });
  const [error, setError] = useState("");

  const nameRegex = /^[A-Za-z]*$/;       // only letters allowed
  const emailRegex = /^\S+@\S+\.\S+$/;
  const messageRegex = /^[A-Za-z\s]*$/;  // only letters + spaces

  // Handle input changes with validation
  const handleChange = (field, value) => {
    // Name & Surname → letters only
    if ((field === "name" || field === "surname") && !nameRegex.test(value)) {
      setError(`❌ Numbers are not allowed in ${field}`);
      return; // block invalid input
    }

    // Message → letters only + max 3 words
    if (field === "message") {
      if (!messageRegex.test(value)) {
        setError("❌ Numbers are not allowed in Message");
        return; // block invalid input
      }
      if (value.trim().split(/\s+/).length > 3) {
        setError("❌ Message must not exceed 3 words");
        return; // block invalid input
      }
    }

    // If valid, update state & clear error
    setFormData({ ...formData, [field]: value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.surname || !formData.email || !formData.message) {
      setError("❌ All fields are required");
      return;
    }
    if (!emailRegex.test(formData.email)) {
      setError("❌ Invalid Email format");
      return;
    }

    alert("✅ Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
      />

      <input
        type="text"
        placeholder="Surname"
        value={formData.surname}
        onChange={(e) => handleChange("surname", e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />

      <textarea
        placeholder="Message"
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Send</button>
    </form>
  );
}
