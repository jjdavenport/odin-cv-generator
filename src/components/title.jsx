const Title = ({ text, type, onClick }) => {
  return (
    <div className="flex w-full items-center gap-4 text-xl font-bold">
      <button
        onClick={onClick}
        type={type}
        className="group"
        aria-label="Go back"
      >
        <svg version="1.1" className="w-4 object-contain" viewBox="0 0 256 256">
          <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
              d="M 65.75 90 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 29.2 45 L 68.225 5.975 c 1.367 -1.367 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.366 -4.95 0 l -41.5 41.5 c -1.367 1.366 -1.367 3.583 0 4.949 l 41.5 41.5 C 63.958 89.658 64.854 90 65.75 90 z"
              className="fill-gray-500 transition-all duration-300 ease-in-out group-hover:fill-black"
            />
          </g>
        </svg>
      </button>
      <span>{text}</span>
    </div>
  );
};

export default Title;
