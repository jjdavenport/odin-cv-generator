import AddButton from "./add-button";
import Title from "./title";
import Input from "./input";
import Dropdown from "./dropdown";

const Certificates = ({ months, years }) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-4">
        <Title text="Certificates" />
        <AddButton type="button" />
        <div className="flex flex-col gap-4">
          <Input label="Certificate Name" type="text" />
          <Input label="Credential URL" type="text" />
          <Input label="Issuing Organisation" type="text" />
        </div>
        <div className="flex w-full gap-4">
          <div className="flex w-1/2 gap-4">
            <Dropdown type={months} />
            <Dropdown type={years} />
          </div>
          <div className="flex w-1/2 gap-4">
            <Dropdown type={months} />
            <Dropdown type={years} />
          </div>
        </div>
        <input type="checkbox" />
        <Input label="Description" />
      </form>
    </>
  );
};

export default Certificates;
