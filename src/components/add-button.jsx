import plusIcon from "../assets/plus-icon.svg";

const AddButton = ({ text, type, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className="flex w-full items-center justify-center gap-2 rounded-md p-3 font-bold text-gray-700 outline-dashed outline-1 outline-gray-300 transition-all duration-300 ease-in-out hover:bg-blue-100 hover:outline-blue-500"
      >
        <img className="w-6 object-contain" src={plusIcon} />
        {text}
      </button>
    </>
  );
};

export default AddButton;
