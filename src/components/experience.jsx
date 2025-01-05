import Input from "./input";
import AddButton from "./add-button";

const Experience = () => {
  return (
    <>
      <form noValidate>
        <AddButton text="Add Experience" />
        <div>
          <Input label="Job Title" type="text" />
          <Input label="Company or Project Name" type="text" />
          <Input label="Company Website" type="text" />
        </div>
        <div>
          <div>
            <span>Start Date</span>
            <Input type="text" />
            <Input type="text" />
          </div>
          <div>
            <span>End Date</span>
            <Input type="text" />
            <Input type="text" />
            <input type="checkbox" />
          </div>
        </div>
        <Input label="Job Title" type="textarea" />
      </form>
    </>
  );
};

export default Experience;
