import { motion, AnimatePresence } from "framer-motion";
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
  deleteCertificate,
}) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-6">
        <Title onClick={onClose} type="button" text="Certificates" />
        <AddButton onClick={addCertificates} type="button" text="Add" />
        <AnimatePresence>
          {certificates.map((i) => (
            <motion.div
              key={i.id}
              layout
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex w-full flex-col items-end gap-6 border-b border-gray-300 pb-8"
            >
              <DeleteButton
                onClick={() => deleteCertificate(i.id)}
                type="button"
              />
              <div className="flex w-full flex-col gap-4">
                <Input
                  value={i.certificationName}
                  onChange={(e) =>
                    updateCertificates(
                      i.id,
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
                    updateCertificates(i.id, "credentialURL", e.target.value)
                  }
                  label="Credential URL"
                  type="text"
                />
                <Input
                  value={i.issuingOrganisation}
                  onChange={(e) =>
                    updateCertificates(
                      i.id,
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
                        updateCertificates(i.id, "startMonth", e.target.value)
                      }
                      type={months}
                      placeholder="Month"
                    />
                    <Dropdown
                      value={i.startYear}
                      onChange={(e) =>
                        updateCertificates(i.id, "startYear", e.target.value)
                      }
                      type={years}
                      placeholder="Year"
                    />
                  </div>
                </div>
                <span className="hidden items-center text-gray-400 lg:flex">
                  -
                </span>
                <div className="flex w-full flex-col gap-1">
                  <span className="text-sm uppercase text-gray-400">
                    End Date
                  </span>
                  <div className="relative h-[60px]">
                    <motion.div
                      initial={{ opacity: 1, height: "auto" }}
                      animate={{
                        opacity: i.doesNotExpire ? 0 : 1,
                        height: i.doesNotExpire ? 0 : "auto",
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute left-0 top-0 flex w-full gap-4"
                    >
                      <Dropdown
                        value={i.endMonth}
                        onChange={(e) =>
                          updateCertificates(i.id, "endMonth", e.target.value)
                        }
                        type={months}
                        placeholder="Month"
                      />
                      <Dropdown
                        value={i.endYear}
                        onChange={(e) =>
                          updateCertificates(i.id, "endYear", e.target.value)
                        }
                        type={years}
                        placeholder="Year"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ y: 40 }}
                      animate={{ y: i.doesNotExpire ? 3 : 40 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="absolute left-0 top-0 flex gap-2 py-1"
                    >
                      <Checkbox
                        checked={i.doesNotExpire}
                        type="button"
                        onChange={() =>
                          updateCertificates(
                            i.id,
                            "doesNotExpire",
                            !i.doesNotExpire,
                          )
                        }
                      />
                      <span className="text-sm text-gray-400">
                        Does not expire
                      </span>
                    </motion.div>
                  </div>
                </div>
              </div>
              <TextArea
                value={i.description}
                onChange={(e) =>
                  updateCertificates(i.id, "description", e.target.value)
                }
                label="Description"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </form>
    </>
  );
};

export default Certificates;
