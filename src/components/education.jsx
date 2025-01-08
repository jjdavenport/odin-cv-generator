import Input from "./input";
import AddButton from "./add-button";
import Dropdown from "./dropdown";
import Title from "./title";

const Education = ({ months, years }) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-4">
        <Title text="Education" />
        <AddButton title="Add" />
        <div className="flex flex-col gap-4">
          <Input label="Job Title" type="text" />
          <Input label="Company or Project" type="text" />
          <Input label="Company Website Link" type="text" />
        </div>
        <div className="flex w-full gap-4">
          <div className="flex w-1/2 gap-4">
            <Dropdown type={months} />
            <Dropdown type={years} />
          </div>
          <div className="flex w-1/2 gap-4">
            <Dropdown type={months} />
            <Dropdown type={years} />
          </div>
        </div>
        <input type="checkbox" />
        <Input label="Description" type="textarea" />
      </form>
    </>
  );
};

export default Education;
