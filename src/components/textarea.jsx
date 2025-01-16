const TextArea = ({ label, onChange, value }) => {
  return (
    <>
      <div className="flex w-full cursor-pointer flex-col rounded-md bg-gray-100 p-2 text-sm">
        <label className="cursor-pointer font-medium text-gray-400">
          {label}
        </label>
        <textarea
          onChange={onChange}
          value={value}
          className="flex w-full cursor-pointer bg-transparent outline-none"
        />
      </div>
    </>
  );
};

export default TextArea;
