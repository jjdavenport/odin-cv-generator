const Dropdown = ({ type, value, onChange, placeholder }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full rounded-md bg-gray-100 px-2 py-2 text-sm font-medium text-gray-700"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {type.map((item) => (
        <option className="bg-gray-100" key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
