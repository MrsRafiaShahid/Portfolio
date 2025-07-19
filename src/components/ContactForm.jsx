import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useAnimation } from "./context/AnimationContext";

const ContactForm = ({ showAlert, hideAlert }) => {
  const formRef = useRef(null);
  const { setCurrentAnimation } = useAnimation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = () => setCurrentAnimation("ArmatureAction");
  const handleBlur = () => setCurrentAnimation("Idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("ArmatureAction");

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
        showAlert({ show: true, message: "Message sent successfully!", type: "success" });
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("Idle");
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        setCurrentAnimation("Idle");
        console.error("Error sending message:", error);
        showAlert({
          show: true,
          message: "Failed to send message. Please try again later.",
          type: "danger",
        });
      });
  };

  const floatingLabelStyles = `
    .form-field {
      position: relative;
    }

    .form-field input,
    .form-field textarea {
      width: 100%;
      padding: 12px;
      padding-top: 20px;
      border: 1px solid #444;
      border-radius: 6px;
      background-color: #111;
      color: #fff;
      font-size: 16px;
      outline: none;
    }

    .form-field label {
      position: absolute;
      top: 12px;
      left: 12px;
      padding: 0 4px;
      color: #aaa;
      font-size: 16px;
      pointer-events: none;
      transition: 0.2s ease all;
    }

    .form-field input:focus + label,
    .form-field textarea:focus + label,
    .form-field .active {
      top: -10px;
      left: 8px;
      font-size: 12px;
      color: #1976d2;
    }
  `;

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-8 bg-black">
      <style>{floatingLabelStyles}</style>
      <div className="w-full max-w-lg p-[2px] rounded-2xl shadow-md green-pink-gradient">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full bg-black rounded-xl p-6 sm:p-10 flex flex-col gap-5"
        >
          <h2 className="text-white text-2xl sm:text-3xl font-bold text-center">Contact Me</h2>
          <p className="text-gray-400 text-sm text-center">
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="form-field">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="off"
              required
            />
            <label className={formData.name ? "active" : ""}>Name</label>
          </div>

          {/* Email Field */}
          <div className="form-field">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              autoComplete="off"
              required
            />
            <label className={formData.email ? "active" : ""}>Email</label>
          </div>

          {/* Message Field */}
          <div className="form-field">
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              required
            />
            <label className={formData.message ? "active" : ""}>Message</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
