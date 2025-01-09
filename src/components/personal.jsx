import useDrop from "../hooks/useDrop";
import EmptyAvatar from "./empty-avatar";
import Input from "./input";
import Title from "./title";
import Avatar from "./avatar";
import cameraIcon from "../assets/camera-icon.svg";

const Personal = ({ onClose, setPersonal, personal }) => {
  const {
    handleUpload,
    fileInputRef,
    handleDragEnter,
    handleDragLeave,
    handleDragOver,
  } = useDrop({ setPersonal });
  return (
    <>
      <form noValidate className="flex flex-col gap-4">
        <Title onClick={onClose} text="Personal Details" />
        <div className="flex w-full gap-2">
          {personal.avatar === "" ? (
            <EmptyAvatar
              fileInputRef={fileInputRef}
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
              handleUpload={handleUpload}
              handleDragOver={handleDragOver}
              cameraIcon={cameraIcon}
              type="button"
            />
          ) : (
            <Avatar
              fileInputRef={fileInputRef}
              handleDragEnter={handleDragEnter}
              handleDragLeave={handleDragLeave}
              handleUpload={handleUpload}
              handleDragOver={handleDragOver}
              onClose={() => setPersonal((prev) => ({ ...prev, avatar: "" }))}
              cameraIcon={cameraIcon}
              img={personal.avatar}
              type="button"
            />
          )}
          <div className="flex w-1/2 flex-col gap-4">
            <Input
              value={personal.firstName}
              onChange={(e) =>
                setPersonal((prev) => ({ ...prev, firstName: e.target.value }))
              }
              label="First Name"
              type="text"
            />
            <Input
              value={personal.lastName}
              onChange={(e) =>
                setPersonal((prev) => ({ ...prev, lastName: e.target.value }))
              }
              label="Last Name"
              type="text"
            />
            <Input
              value={personal.jobTitle}
              onChange={(e) =>
                setPersonal((prev) => ({ ...prev, jobTitle: e.target.value }))
              }
              label="Job Title"
              type="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-medium text-gray-600">Contact Details</span>
          <Input
            value={personal.phoneNumber}
            onChange={(e) =>
              setPersonal((prev) => ({ ...prev, phoneNumber: e.target.value }))
            }
            label="Phone Number"
            type="number"
          />
          <Input
            value={personal.emailAddress}
            onChange={(e) =>
              setPersonal((prev) => ({ ...prev, emailAddress: e.target.value }))
            }
            label="Email Address"
            type="email"
          />
          <Input
            value={personal.website}
            onChange={(e) =>
              setPersonal((prev) => ({ ...prev, website: e.target.value }))
            }
            label="Personal Website"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-medium text-gray-600">Location</span>
          <div className="flex gap-4">
            <Input
              value={personal.city}
              onChange={(e) =>
                setPersonal((prev) => ({ ...prev, city: e.target.value }))
              }
              label="City"
              type="text"
            />
            <Input
              value={personal.stateCountry}
              onChange={(e) =>
                setPersonal((prev) => ({
                  ...prev,
                  stateCountry: e.target.value,
                }))
              }
              label="State or Country"
              type="email"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Personal;
