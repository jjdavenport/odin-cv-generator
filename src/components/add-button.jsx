import plusIcon from "../assets/plus-icon.svg";

const AddButton = ({ text }) => {
  return (
    <>
      <button>
        <img src={plusIcon} />
        {text}
      </button>
    </>
  );
};

export default AddButton;
