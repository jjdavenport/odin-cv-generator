import Input from "./input";
import Dropdown from "./dropdown";
import AddButton from "./add-button";
import Title from "./title";

const Skills = ({ skillsProficiency, skills, setSkills, onClose }) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-6">
        <Title onClick={onClose} type="button" text="Skills" />
        <AddButton type="button" title="Add" />
        <div className="flex gap-4">
          <Input
            onChange={(e) =>
              setSkills((prev) => ({
                ...prev,
                skill: e.target.value,
              }))
            }
            value={skills.skill}
            label="Skill Name"
            type="text"
          />
          <Dropdown
            onChange={(e) =>
              setSkills((prev) => ({
                ...prev,
                proficiency: e.target.value,
              }))
            }
            value={skills.proficiency}
            placeholder="Proficiency"
            type={skillsProficiency}
          />
        </div>
      </form>
    </>
  );
};

export default Skills;
