import Input from "./input";
import Dropdown from "./dropdown";
import AddButton from "./add-button";
import Title from "./title";
import BinButton from "./bin-button";

const Languages = ({
  languageProficiency,
  languages,
  addLanguages,
  updateLanguages,
  onClose,
  deleteLanguage,
}) => {
  return (
    <>
      <form noValidate className="flex flex-col items-end gap-6">
        <Title onClick={onClose} type="button" text="Languages" />
        <AddButton onClick={addLanguages} type="button" text="Add" />
        {languages.map((i, index) => (
          <>
            <div key={index} className="flex w-full gap-4">
              <Input
                onChange={(e) =>
                  updateLanguages(index, "language", e.target.value)
                }
                value={i.language}
                label="Language"
                type="text"
              />
              <Dropdown
                onChange={(e) =>
                  updateLanguages(index, "proficiency", e.target.value)
                }
                value={i.proficiency}
                placeholder="Proficiency"
                type={languageProficiency}
              />
              <BinButton onClick={() => deleteLanguage(index)} type="button" />
            </div>
          </>
        ))}
      </form>
    </>
  );
};

export default Languages;
