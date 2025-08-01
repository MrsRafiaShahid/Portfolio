import { Link } from "react-router-dom";

export const Button = ({ title, download = false, src = "", to = "" }) => {
  const handleClick = (e) => {
    if (download && src) {
      e.preventDefault(); // Prevent default navigation if any
      const confirmDownload = window.confirm(
        "Do you want to download the resume?"
      );
      if (confirmDownload) {
        const link = document.createElement("a");
        link.href = src;
        link.download = "RafiaShahid_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };
  const buttonClass =
    "px-6 py-2 transition-all transform duration-300 ease-in-out glow-effect  text-[#6B7280] rounded-xl text-white";

  // Case 1: Navigation via React Router
  if (to && !download) {
    return (
      <div className="green-pink-gradient rounded-2xl hover:translate-y-[-4px]  p-0.5 flex items-center">
        <Link
          to={to}
          className={`${buttonClass} bg-black`}
        >
          {title}
        </Link>
      </div>
    );
  }

  // Case 2: Download button
  return (
    <button
      onClick={handleClick}
      className={`${buttonClass} border-2 hover:translate-y-[-4px] green-pink-gradient`}
    >
      {title}
    </button>
  );
};
