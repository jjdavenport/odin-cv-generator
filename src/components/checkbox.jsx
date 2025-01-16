import checkIcon from "../assets/check-icon.svg";

const Checkbox = ({ onChange, checked, type }) => {
  return (
    <>
      <button
        type={type}
        onClick={onChange}
        className="h-5 w-5 rounded-md bg-gray-400"
      >
        {checked && <img className="h-4 w-4" src={checkIcon} />}
      </button>
    </>
  );
};

export default Checkbox;
