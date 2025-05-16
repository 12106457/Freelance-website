import React, { useState } from "react";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FaLinkedinIn } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

 const handleSend = (e) => {
    e.preventDefault(); // Prevent page reload

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields before sending.");
      return;
    }

    const subject = `New message from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=kedarisettysai440@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailUrl, "_blank");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };


  const handleWhatsAppClick = () => {
    const phoneNumber = "8074322007";
    const message = "Hi, I came from your website!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const handleLinkedInClick = () => {
    const linkedInUrl = "https://www.linkedin.com/in/sai-kedarisetti/"; 
    window.open(linkedInUrl, "_blank");
    };


  const customTextFieldStyle = {
    "& .MuiInput-underline:before": {
      borderBottomColor: "#919b96",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "#919b96",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#919b96",
    },
    "& input": {
      color: "#919b96",
    },
    "& textarea": {
      color: "#919b96",
    },
    "& label": {
      color: "#919b96",
    },
  };

  return (
    <div className="benefits-container px-4 md:px-24 lg:px-16 pt-16 pb-20 lg:pt-32 lg:pb-40">
      <div className="flex flex-col items-center bg-white/5 rounded-lg p-8 sm:mx-30 py-20">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-white sm:w-[80%] md:w-[60%]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sweet, that's me! Now it's your turn to say hi.
        </motion.h2>
        <p className="my-5 text-sm text-[#919b96]">
          Start by clicking on 'Name'
        </p>

        <form
          onSubmit={handleSend}
          className="w-full max-w-lg flex flex-col gap-8"
        >
          <TextField
            label="Name"
            name="name"
            variant="standard"
            required="true"
            fullWidth
            InputLabelProps={{ style: { color: "#919b96" } }}
            InputProps={{ style: { color: "#919b96" } }}
            value={formData.name}
            onChange={handleChange}
            sx={customTextFieldStyle}
          />

          <TextField
            label="Email"
            name="email"
            required="true"
            variant="standard"
            fullWidth
            InputLabelProps={{ style: { color: "#919b96" } }}
            InputProps={{ style: { color: "#919b96" } }}
            value={formData.email}
            onChange={handleChange}
            sx={customTextFieldStyle}
          />

          <TextField
            label="Your Message"
            name="message"
            variant="standard"
            required="true"
            multiline
            rows={4}
            fullWidth
            InputLabelProps={{ style: { color: "#919b96" } }}
            InputProps={{ style: { color: "#919b96" } }}
            value={formData.message}
            onChange={handleChange}
            sx={customTextFieldStyle}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 4,
              backgroundColor: "#10b981",
              color: "white",
              paddingX: 4,
              paddingY: 1.5,
              borderRadius: "9999px",
              textTransform: "none",
              fontSize: "16px",
              "&:hover": {
                backgroundColor: "#059669",
              },
            }}
          >
            Get in Touch
          </Button>
        </form>
        <p className="my-5 text-sm text-[#919b96]">
          or email him at kedarisettysai440@gmail.com
        </p>
        <div className="w-[80%] sm:w-[50%] h-px bg-gray-300 my-2 mb-5"></div>

        <div className="flex gap-4 items-center justify-center">
          <button
            onClick={handleWhatsAppClick}
            className="bg-green-500 text-white p-0 rounded-full hover:bg-green-600 transition"
            aria-label="Message me on WhatsApp"
          >
            <img
              src="/socialMediaIcon/whatsapp.png"
              alt="Facebook Icon"
              className="w-10 h-10 p-2 "
            />
          </button>

          <button
            onClick={handleLinkedInClick}
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition"
            aria-label="Visit my LinkedIn"
          >
            <FaLinkedinIn className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
