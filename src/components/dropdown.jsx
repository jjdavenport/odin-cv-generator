const Dropdown = ({ type, value, onChange, placeholder }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className={`${placeholder === "Year" ? "w-7/12" : "w-full"} rounded-md bg-gray-100 px-2 py-2 text-sm font-medium outline-none ${
        value ? "text-gray-900" : "text-gray-400"
      }`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {type.map((item) => (
        <option className="bg-gray-100 text-gray-900" key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
