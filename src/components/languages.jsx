import Input from "./input";
import AddButton from "./add-button";

const Languages = () => {
  return (
    <>
      <form noValidate>
        <AddButton text="Add" />
        <div>
          <Input label="Language" type="text" />
          <Input label="Proficiency" type="text" />
        </div>
      </form>
    </>
  );
};

export default Languages;
