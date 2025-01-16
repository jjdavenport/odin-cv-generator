import AddButton from "./add-button";
import Title from "./title";
import Input from "./input";
import Dropdown from "./dropdown";
import TextArea from "./textarea";
import DeleteButton from "./delete-button";
import Checkbox from "./checkbox";

const Certificates = ({
  onClose,
  months,
  years,
  addCertificates,
  updateCertificates,
  certificates,
}) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-6">
        <Title onClick={onClose} type="button" text="Certificates" />
        <AddButton onClick={addCertificates} type="button" text="Add" />
        {certificates.map((i, index) => (
          <>
            <div
              key={index}
              className="flex w-full flex-col items-end gap-6 border-b border-gray-300 pb-8"
            >
              <DeleteButton type="button" />
              <div className="flex w-full flex-col gap-4">
                <Input
                  value={i.certificationName}
                  onChange={(e) =>
                    updateCertificates(
                      index,
                      "certificationName",
                      e.target.value,
                    )
                  }
                  label="Certification Name"
                  type="text"
                />
                <Input
                  value={i.credentialURL}
                  onChange={(e) =>
                    updateCertificates(index, "credentialURL", e.target.value)
                  }
                  label="Credential URL"
                  type="text"
                />
                <Input
                  value={i.issuingOrganisation}
                  onChange={(e) =>
                    updateCertificates(
                      index,
                      "issuingOrganisation",
                      e.target.value,
                    )
                  }
                  label="Issuing Organisation"
                  type="text"
                />
              </div>
              <div className="flex w-full flex-col gap-4 lg:flex-row">
                <div className="w-full">
                  <span className="text-sm uppercase text-gray-400">
                    Start Date
                  </span>
                  <div className="flex w-full gap-4">
                    <Dropdown
                      value={i.startMonth}
                      onChange={(e) =>
                        updateCertificates(index, "startMonth", e.target.value)
                      }
                      type={months}
                      placeholder="Month"
                    />
                    <Dropdown
                      value={i.startYear}
                      onChange={(e) =>
                        updateCertificates(index, "startYear", e.target.value)
                      }
                      type={years}
                      placeholder="Year"
                    />
                  </div>
                </div>
                <span className="hidden items-center text-gray-400 lg:flex">
                  -
                </span>
                <div className="w-full">
                  <span className="text-sm uppercase text-gray-400">
                    End Date
                  </span>
                  <div className="flex w-full gap-4">
                    <Dropdown
                      value={i.endMonth}
                      onChange={(e) =>
                        updateCertificates(index, "endMonth", e.target.value)
                      }
                      type={months}
                      placeholder="Month"
                    />
                    <Dropdown
                      value={i.endYear}
                      onChange={(e) =>
                        updateCertificates(index, "endYear", e.target.value)
                      }
                      type={years}
                      placeholder="Year"
                    />
                  </div>
                  <div className="flex items-center gap-2 p-1">
                    <Checkbox
                      checked={i.doesNotExpire}
                      type="button"
                      onChange={() =>
                        updateCertificates(
                          index,
                          "doesNotExpire",
                          !i.doesNotExpire,
                        )
                      }
                    />
                    <span className="text-sm text-gray-400">
                      Does not expire
                    </span>
                  </div>
                </div>
              </div>
              <TextArea
                value={i.description}
                onChange={(e) =>
                  updateCertificates(index, "description", e.target.value)
                }
                label="Description"
              />
            </div>
          </>
        ))}
      </form>
    </>
  );
};

export default Certificates;
