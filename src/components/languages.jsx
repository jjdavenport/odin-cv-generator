import Input from "./input";
import Dropdown from "./dropdown";
import AddButton from "./add-button";
import Title from "./title";

const Languages = ({
  languageProficiency,
  languages,
  setLanguages,
  onClose,
}) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-6">
        <Title onClick={onClose} type="button" text="Languages" />
        <AddButton type="button" text="Add" />
        <div className="flex gap-4">
          <Input
            onChange={(e) =>
              setLanguages((prev) => ({
                ...prev,
                language: e.target.value,
              }))
            }
            value={languages.language}
            label="Skill Name"
            type="text"
          />
          <Dropdown
            onChange={(e) =>
              setLanguages((prev) => ({
                ...prev,
                proficiency: e.target.value,
              }))
            }
            value={languages.proficiency}
            placeholder="Proficiency"
            type={languageProficiency}
          />
        </div>
      </form>
    </>
  );
};

export default Languages;
