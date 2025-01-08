import Input from "./input";
import Dropdown from "./dropdown";
import AddButton from "./add-button";
import Title from "./title";

const Languages = ({ languageProficiency }) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-4">
        <Title text="Languages" />
        <AddButton type="button" text="Add" />
        <div className="flex gap-4">
          <Input label="Language" type="text" />
          <Dropdown type={languageProficiency} />
        </div>
      </form>
    </>
  );
};

export default Languages;
