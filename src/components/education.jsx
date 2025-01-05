import Input from "./input";
import AddButton from "./add-button";

const Education = () => {
  <>
    <form noValidate>
      <AddButton title="Add" />
      <div>
        <Input type="text" />
        <Input type="text" />
        <Input type="text" />
      </div>
      <div>
        <div>
          <Input type="text" />
          <Input type="text" />
        </div>
        <div>
          <Input type="text" />
          <Input type="text" />
        </div>
      </div>
      <Input type="textarea" />
    </form>
  </>;
};

export default Education;
