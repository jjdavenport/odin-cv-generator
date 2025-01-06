import EmptyAvatar from "./empty-avatar";
import Input from "./input";
import Title from "./title";

const Personal = ({ setInputs, onClick }) => {
  return (
    <>
      <form noValidate>
        <Title onClick={onClick} title="Personal Details" />
        <div>
          <EmptyAvatar />
          <Input label="First Name" type="text" />
          <Input label="Last Name" type="text" />
          <Input label="Job Title" type="text" />
        </div>
        <div>
          <span>Contact Details</span>
          <Input label="Phone Number" type="number" />
          <Input label="Email Address" type="email" />
          <Input label="Personal Website" type="text" />
        </div>
        <div>
          <span>Location</span>
          <Input label="City" type="text" />
          <Input label="State or Country" type="email" />
        </div>
      </form>
    </>
  );
};

export default Personal;
