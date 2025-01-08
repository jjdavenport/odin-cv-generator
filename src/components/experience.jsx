import Input from "./input";
import AddButton from "./add-button";
import Title from "./title";
import Dropdown from "./dropdown";

const Experience = ({ onClose, months, years }) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-4">
        <Title onClick={onClose} type="button" text="Experience" />
        <AddButton type="button" text="Add Experience" />
        <div className="flex flex-col gap-4">
          <Input label="Job Title" type="text" />
          <Input label="Company or Project Name" type="text" />
          <Input label="Company Website" type="text" />
        </div>
        <div className="flex gap-4">
          <div>
            <span>Start Date</span>
            <div className="flex gap-4">
              <Dropdown type={months} />
              <Dropdown type={years} />
            </div>
          </div>
          <div>
            <span>End Date</span>
            <div className="flex gap-4">
              <Dropdown type={months} />
              <Dropdown type={years} />
            </div>
            <div className="p-1">
              <input type="checkbox" />
            </div>
          </div>
        </div>
        <Input label="Job Title" type="textarea" />
      </form>
    </>
  );
};

export default Experience;
