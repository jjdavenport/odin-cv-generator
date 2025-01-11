import AddButton from "./add-button";
import Title from "./title";
import Input from "./input";
import Dropdown from "./dropdown";
import TextArea from "./textarea";

const Certificates = ({
  onClose,
  months,
  years,
  setCertificate,
  certificate,
}) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-6">
        <Title onClick={onClose} type="button" text="Certificates" />
        <AddButton type="button" text="Add" />
        <div className="flex flex-col gap-4">
          <Input
            value={certificate.certificationName}
            onChange={(e) =>
              setCertificate((prev) => ({
                ...prev,
                certificationName: e.target.value,
              }))
            }
            label="Certification Name"
            type="text"
          />
          <Input
            value={certificate.credentialURL}
            onChange={(e) =>
              setCertificate((prev) => ({
                ...prev,
                credentialURL: e.target.value,
              }))
            }
            label="Credential URL"
            type="text"
          />
          <Input
            value={certificate.issuingOrganisation}
            onChange={(e) =>
              setCertificate((prev) => ({
                ...prev,
                issuingOrganisation: e.target.value,
              }))
            }
            label="Issuing Organisation"
            type="text"
          />
        </div>
        <div className="flex w-full gap-4">
          <div className="w-full">
            <span className="text-sm uppercase">Issue Date</span>
            <div className="flex w-full gap-4">
              <Dropdown
                value={certificate.startMonth}
                onChange={(e) =>
                  setCertificate((prev) => ({
                    ...prev,
                    startMonth: e.target.value,
                  }))
                }
                type={months}
                placeholder="Month"
              />
              <Dropdown
                value={certificate.startYear}
                onChange={(e) =>
                  setCertificate((prev) => ({
                    ...prev,
                    startYear: e.target.value,
                  }))
                }
                type={years}
                placeholder="Year"
              />
            </div>
          </div>
          <div className="w-full">
            <span className="text-sm uppercase">Expiration Date</span>
            <div className="flex w-full gap-4">
              <Dropdown
                value={certificate.endMonth}
                onChange={(e) =>
                  setCertificate((prev) => ({
                    ...prev,
                    endMonth: e.target.value,
                  }))
                }
                type={months}
                placeholder="Month"
              />
              <Dropdown
                value={certificate.endYear}
                onChange={(e) =>
                  setCertificate((prev) => ({
                    ...prev,
                    endYear: e.target.value,
                  }))
                }
                type={years}
                placeholder="Year"
              />
            </div>
            <div className="flex gap-2 p-1">
              <input
                onChange={(e) =>
                  setCertificate((prev) => ({
                    ...prev,
                    doesNotExpire: e.target.checked,
                  }))
                }
                checked={certificate.doesNotExpire}
                type="checkbox"
              />
              <span className="text-sm">Does not expire</span>
            </div>
          </div>
        </div>
        <TextArea
          value={certificate.description}
          onChange={(e) =>
            setCertificate((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          label="Description"
        />
      </form>
    </>
  );
};

export default Certificates;
