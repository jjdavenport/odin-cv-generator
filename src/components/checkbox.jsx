import checkIcon from "../assets/check-icon.svg";

const Checkbox = ({ onChange, checked, type }) => {
  return (
    <>
      <button
        type={type}
        onClick={onChange}
        className={`${checked ? "bg-blue-600" : "bg-gray-200"} flex h-5 w-5 items-center justify-center rounded-sm outline-none transition-all duration-100 ease-in-out`}
      >
        {checked && (
          <img
            className="h-3 w-3 transition-all duration-100 ease-in-out"
            src={checkIcon}
          />
        )}
      </button>
    </>
  );
};

export default Checkbox;
