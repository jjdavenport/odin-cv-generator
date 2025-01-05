import Input from "./input";
import AddButton from "./add-button";

const Skills = () => {
  return (
    <>
      <form noValidate>
        <AddButton title="Add" />
        <div>
          <Input label="Skill Name" />
          <Input label="Proficiency" />
        </div>
      </form>
    </>
  );
};

export default Skills;
