import AddButton from "./add-button";
import Title from "./title";
import Input from "./input";
import Dropdown from "./dropdown";
import TextArea from "./textarea";

const Certificates = ({
  onClose,
  months,
  years,
  setCertificates,
  certificates,
}) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-6">
        <Title onClick={onClose} type="button" text="Certificates" />
        <AddButton type="button" text="Add" />
        <div className="flex flex-col gap-4">
          <Input
            value={certificates.certificationName}
            onChange={(e) =>
              setCertificates((prev) => ({
                ...prev,
                certificationName: e.target.value,
              }))
            }
            label="Certification Name"
            type="text"
          />
          <Input
            value={certificates.credentialURL}
            onChange={(e) =>
              setCertificates((prev) => ({
                ...prev,
                credentialURL: e.target.value,
              }))
            }
            label="Credential URL"
            type="text"
          />
          <Input
            value={certificates.issuingOrganisation}
            onChange={(e) =>
              setCertificates((prev) => ({
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
                value={certificates.startMonth}
                onChange={(e) =>
                  setCertificates((prev) => ({
                    ...prev,
                    startMonth: e.target.value,
                  }))
                }
                type={months}
                placeholder="Month"
              />
              <Dropdown
                value={certificates.startYear}
                onChange={(e) =>
                  setCertificates((prev) => ({
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
                value={certificates.endMonth}
                onChange={(e) =>
                  setCertificates((prev) => ({
                    ...prev,
                    endMonth: e.target.value,
                  }))
                }
                type={months}
                placeholder="Month"
              />
              <Dropdown
                value={certificates.endYear}
                onChange={(e) =>
                  setCertificates((prev) => ({
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
                  setCertificates((prev) => ({
                    ...prev,
                    doesNotExpire: e.target.checked,
                  }))
                }
                checked={certificates.doesNotExpire}
                type="checkbox"
              />
              <span className="text-sm">Does not expire</span>
            </div>
          </div>
        </div>
        <TextArea
          value={certificates.description}
          onChange={(e) =>
            setCertificates((prev) => ({
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
