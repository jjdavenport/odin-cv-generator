const Input = ({ type, label }) => {
  return (
    <>
      <div className="flex w-full cursor-pointer flex-col rounded-md bg-gray-100 p-2">
        <label className="cursor-pointer font-medium text-gray-700">
          {label}
        </label>
        <input
          className="flex w-full cursor-pointer bg-transparent outline-none"
          type={type}
        />
      </div>
    </>
  );
};

export default Input;
