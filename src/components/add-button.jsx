import plusIcon from "../assets/plus-icon.svg";

const AddButton = ({ text, type }) => {
  return (
    <>
      <button
        type={type}
        className="flex w-full items-center justify-center gap-2 rounded-md p-2 text-sm text-gray-600 outline outline-dashed outline-gray-300 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-200"
      >
        <img className="w-6 object-contain" src={plusIcon} />
        {text}
      </button>
    </>
  );
};

export default AddButton;
