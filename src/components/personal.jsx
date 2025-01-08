import EmptyAvatar from "./empty-avatar";
import Input from "./input";
import Title from "./title";

const Personal = ({ onClose }) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-4">
        <Title onClick={onClose} text="Personal Details" />
        <div className="flex w-full gap-2">
          <EmptyAvatar />
          <div className="flex w-1/2 flex-col gap-4">
            <Input label="First Name" type="text" />
            <Input label="Last Name" type="text" />
            <Input label="Job Title" type="text" />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-medium text-gray-600">Contact Details</span>
          <Input label="Phone Number" type="number" />
          <Input label="Email Address" type="email" />
          <Input label="Personal Website" type="text" />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-medium text-gray-600">Location</span>
          <div className="flex gap-4">
            <Input label="City" type="text" />
            <Input label="State or Country" type="email" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Personal;
