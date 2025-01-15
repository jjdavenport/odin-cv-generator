import Input from "./input";
import Dropdown from "./dropdown";
import AddButton from "./add-button";
import Title from "./title";
import BinButton from "./bin-button";

const Skills = ({
  addSkills,
  updateSkills,
  skills,
  onClose,
  skillsProficiency,
}) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-6">
        <Title onClick={onClose} type="button" text="Skills" />
        <AddButton onClick={addSkills} type="button" title="Add" />
        {skills.map((i, index) => (
          <>
            <div key={index} className="flex gap-4">
              <Input
                onChange={(e) => updateSkills(index, "skill", e.target.value)}
                value={i.skill}
                label="Skill Name"
                type="text"
              />
              <Dropdown
                onChange={(e) =>
                  updateSkills(index, "proficiency", e.target.value)
                }
                value={i.proficiency}
                placeholder="Proficiency"
                type={skillsProficiency}
              />
              <BinButton type="button" />
            </div>
          </>
        ))}
      </form>
    </>
  );
};

export default Skills;
