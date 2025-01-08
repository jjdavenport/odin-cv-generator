const Input = ({ type, label, onChange, value }) => {
  return (
    <>
      <div className="flex w-full cursor-pointer flex-col rounded-md bg-gray-100 p-2">
        <label className="cursor-pointer font-medium text-gray-700">
          {label}
        </label>
        <input
          value={value}
          onChange={onChange}
          className="flex w-full cursor-pointer bg-transparent outline-none [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          type={type}
        />
      </div>
    </>
  );
};

export default Input;
