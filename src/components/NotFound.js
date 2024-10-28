import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-100 lg:pt-16 md:pt-32 pt-16  pb-6 flex flex-col justify-center items-center">
      <svg
        className="emoji-404"
        enableBackground="new 0 0 226 249.135"
        height="198.135"
        viewBox="0 0 226 249.135"
        width="170"
        xmlSpace="preserve"
      >
        <circle cx="113" cy="113" fill="#FFE585" r="109" />
        <line
          fill="none"
          opacity="0.29"
          stroke="#6E6E96"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
          x1="88.866"
          x2="136.866"
          y1="245.135"
          y2="245.135"
        />
        <circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
        <circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
        <ellipse
          cx="67.732"
          cy="140.894"
          fill="#FF0000"
          opacity="0.18"
          rx="17.372"
          ry="8.106"
        />
        <ellipse
          cx="154.88"
          cy="140.894"
          fill="#FF0000"
          opacity="0.18"
          rx="17.371"
          ry="8.106"
        />
        <circle
          cx="113"
          cy="113"
          fill="none"
          r="109"
          stroke="#6E6E96"
          strokeWidth="8"
        />
      </svg>
      <div className="tracking-widest mt-4 text-center">
        <span className="text-gray-500 text-6xl block">4 0 4</span>
        <span className="text-gray-500 text-xl">
          Sorry, We couldn't find what you are looking for!
        </span>
      </div>
      <Link
        to="/"
        className="bg-orange-150 base-font-heading text-white text-xl px-6 py-1 rounded-md mt-6 hover:shadow-md"
      >
        Go back
      </Link>
    </div>
  );
};

export default NotFound;
