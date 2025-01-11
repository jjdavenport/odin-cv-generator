import { useState } from "react";

const Button = ({ img, title, onClick }) => {
  const [hidden, setHidden] = useState(false);
  const toggle = () => {
    setHidden(!hidden);
  };

  const isPersonalDetails = title === "Personal Details";

  return (
    <li className="relative pt-6">
      <button
        className="group flex w-full items-center justify-between text-xl text-gray-500 transition-colors duration-300 ease-in-out hover:text-black"
        onClick={onClick}
      >
        <div className="flex gap-4">
          <img className="w-6" src={img} />
          <span>{title}</span>
        </div>
        <div className="flex gap-2">
          <svg
            className="w-4 fill-gray-500 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:fill-gray-700"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
          >
            <path
              id="XMLID_222_"
              d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
            />
          </svg>
        </div>
      </button>
      {!isPersonalDetails && (
        <button
          onClick={toggle}
          className="group absolute right-6 top-[1.45rem] flex w-8 items-center justify-center"
        >
          {hidden ? (
            <svg
              className="w-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="stroke-gray-300 transition-all duration-300 ease-in-out group-hover:stroke-black"
                d="M21.0006 12.0007C19.2536 15.5766 15.8779 18 12 18M12 18C8.12204 18 4.7463 15.5766 2.99977 12.0002M12 18L12 21M19.4218 14.4218L21.4999 16.5M16.2304 16.9687L17.5 19.5M4.57812 14.4218L2.5 16.5M7.76953 16.9687L6.5 19.5"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              viewBox="0 0 76 76"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              baseProfile="full"
            >
              <path
                className="fill-gray-300 transition-all duration-300 ease-in-out group-hover:fill-black"
                fillOpacity="1"
                strokeWidth="0.2"
                strokeLinejoin="round"
                d="M 38,33.1538C 40.6765,33.1538 42.8462,35.3235 42.8462,38C 42.8462,40.6765 40.6765,42.8461 38,42.8461C 35.3235,42.8461 33.1539,40.6765 33.1539,38C 33.1539,35.3235 35.3236,33.1538 38,33.1538 Z M 38,25.0769C 49.3077,25.0769 59,33.1538 59,38C 59,42.8461 49.3077,50.9231 38,50.9231C 26.6923,50.9231 17,42.8461 17,38C 17,33.1538 26.6923,25.0769 38,25.0769 Z M 38,29.1154C 33.0932,29.1154 29.1154,33.0932 29.1154,38C 29.1154,42.9068 33.0932,46.8846 38,46.8846C 42.9068,46.8846 46.8846,42.9068 46.8846,38C 46.8846,33.0932 42.9068,29.1154 38,29.1154 Z "
              />
            </svg>
          )}
        </button>
      )}
    </li>
  );
};

export default Button;
