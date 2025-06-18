import { AppProvider } from "@toolpad/core/AppProvider";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import emailjs from "@emailjs/browser";
import { useAnimation } from "./context/AnimationContext";

const ContactForm = ({ showAlert, hideAlert }) => {
  const formRef = useRef(null);
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  
  const { setCurrentAnimation } = useAnimation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("ArmatureAction"); // Increase animation speed (example: 2x)

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Rafia Shahid",
          from_email: formData.email,
          to_email: "rafash190@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        showAlert({
          show: true,
          message: "Message sent successfully!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert(); // Hide alert after 3 seconds
          setCurrentAnimation("Idle"); // Reset animation to Idle after sending
          setFormData({ name: "", email: "", message: "" }); // Reset form data
        }, [3000]); // Wait for 3 seconds before resetting animation
      })
      .catch((error) => {
        setLoading(false); // Reset loading state
        setCurrentAnimation("Idle");
        console.error("Error sending message:", error);
        showAlert({
          show: true,
          message: "Failed to send message. Please try again later.",
          type: "danger",
        });
      });
  };
  const handleFocus = (e) => {
    e.target.style.backgroundColor = "#222"; // Darker background on focus
    e.target.style.borderColor = "#1976d2"; // Change border color on focus
    setCurrentAnimation("ArmatureAction"); // Set animation to ArmatureAction on focus
  };
  const handleBlur = (e) => {
    e.target.style.backgroundColor = "#111"; // Reset background on blur
    e.target.style.borderColor = "#aaa"; // Reset border color on blur
    setCurrentAnimation("Idle");
  };

  return (
    <AppProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          // backgroundColor: "",
          padding: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "70%",
            padding: 0.25,
            bgcolor: "#000", // Black background
            color: "#fff",
            borderRadius: 2,
            boxShadow: 3,
          }}
          className="green-pink-gradient"
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            ref={formRef}
            sx={{
              maxWidth: 600,
              margin: "auto",
              padding: 4,
              display: "flex",
              flexDirection: "column",
              gap: 3,
              bgcolor: "#000", // Black background
              color: "#fff",
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" align="center" color="#fff">
              Contact Me
            </Typography>
            <Typography variant="body2" align="center" color="#aaa">
              I am always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </Typography>

            <TextField
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              required
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              InputLabelProps={{ style: { color: "#aaa" } }}
              InputProps={{
                style: { color: "#fff", backgroundColor: "#111" },
              }}
              fullWidth
            />

            <TextField
              name="email"
              label="Email"
              type="email"
              required
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              InputLabelProps={{ style: { color: "#aaa" } }}
              InputProps={{
                style: { color: "#fff", backgroundColor: "#111" },
              }}
              fullWidth
            />

            <TextField
              name="message"
              label="Message"
              required
              variant="outlined"
              multiline
              minRows={4}
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              InputLabelProps={{ style: { color: "#aaa" } }}
              InputProps={{
                style: { color: "#fff", backgroundColor: "#111" },
              }}
              fullWidth
            />

            <Button
              type="submit"
              color="primary"
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={loading}
              sx={{
                backgroundColor: "#1976d2", // Primary color
                "&:hover": {
                  backgroundColor: "#115293", // Darker shade on hover
                },
              }}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </Box>
        </Box>
      </Box>
    </AppProvider>
  );
};

export default ContactForm;
