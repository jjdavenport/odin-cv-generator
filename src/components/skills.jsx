import Input from "./input";
import Dropdown from "./dropdown";
import AddButton from "./add-button";
import Title from "./title";

const Skills = ({ skillsProficiency }) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-4">
        <Title text="Skills" />
        <AddButton title="Add" />
        <div className="flex gap-4">
          <Input label="Language" type="text" />
          <Dropdown type={skillsProficiency} />
        </div>
      </form>
    </>
  );
};

export default Skills;
