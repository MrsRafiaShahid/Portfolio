import { Link } from "react-router-dom";

export const Button = ({
  title,
  download = false,
  src = "",
  to = "",
}) => {
  const handleClick = (e) => {
    if (download && src) {
      e.preventDefault(); // Prevent default navigation if any
      const confirmDownload = window.confirm("Do you want to download the resume?");
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
    "bg-tertiary/80 text-secondary rounded-2xl px-6 py-2 font-semibold text-lg hover:bg-tertiary/100 hover:border-primary hover:border-2 transition-all duration-300 ease-in-out";

  // Case 1: Navigation via React Router
  if (to && !download) {
    return (
      <Link to={to} className={`${buttonClass} block md:hidden `}>
        {title}
      </Link>
    );
  }

  // Case 2: Download button
  return (
    <button onClick={handleClick} className={buttonClass}>
      {title}
    </button>
  );
};
