const Dropdown = ({ type }) => {
  return (
    <select className="w-full rounded-md bg-gray-100 px-2 py-2 font-medium text-gray-700">
      {type.map((item) => (
        <option className="bg-gray-100" key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
