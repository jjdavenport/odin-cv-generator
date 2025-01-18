import { motion, AnimatePresence } from "framer-motion";
import Input from "./input";
import AddButton from "./add-button";
import Title from "./title";
import Dropdown from "./dropdown";
import TextArea from "./textarea";
import DeleteButton from "./delete-button";
import Checkbox from "./checkbox";

const Experience = ({
  onClose,
  months,
  years,
  addExperience,
  updateExperience,
  experience,
  deleteExperience,
}) => {
  return (
    <>
      <form noValidate className="flex flex-col items-end gap-6">
        <Title onClick={onClose} type="button" text="Experience" />
        <AddButton
          onClick={addExperience}
          type="button"
          text="Add Experience"
        />
        {experience.map((i, index) => (
          <div
            key={index}
            className="flex w-full flex-col items-end gap-6 border-b border-gray-300 pb-8"
          >
            <DeleteButton
              onClick={() => deleteExperience(index)}
              type="button"
            />
            <div className="flex w-full flex-col gap-4">
              <Input
                value={i.jobTitle}
                onChange={(e) =>
                  updateExperience(index, "jobTitle", e.target.value)
                }
                label="Job Title"
                type="text"
              />
              <Input
                value={i.company}
                onChange={(e) =>
                  updateExperience(index, "company", e.target.value)
                }
                label="Company or Project Name"
                type="text"
              />
              <Input
                value={i.companyWebsite}
                onChange={(e) =>
                  updateExperience(index, "companyWebsite", e.target.value)
                }
                label="Company Website"
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
                      updateExperience(index, "startMonth", e.target.value)
                    }
                    type={months}
                    placeholder="Month"
                  />
                  <Dropdown
                    value={i.startYear}
                    onChange={(e) =>
                      updateExperience(index, "startYear", e.target.value)
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
                      opacity: i.toPresent ? 0 : 1,
                      height: i.toPresent ? 0 : "auto",
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 flex w-full gap-4"
                  >
                    <Dropdown
                      value={i.endMonth}
                      onChange={(e) =>
                        updateExperience(index, "endMonth", e.target.value)
                      }
                      type={months}
                      placeholder="Month"
                    />
                    <Dropdown
                      value={i.endYear}
                      onChange={(e) =>
                        updateExperience(index, "endYear", e.target.value)
                      }
                      type={years}
                      placeholder="Year"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 40 }}
                    animate={{ y: i.toPresent ? 3 : 40 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-0 flex gap-2 py-1"
                  >
                    <Checkbox
                      checked={i.toPresent}
                      type="button"
                      onChange={() =>
                        updateExperience(index, "toPresent", !i.toPresent)
                      }
                    />
                    <span className="text-sm text-gray-400">Present</span>
                  </motion.div>
                </div>
              </div>
            </div>
            <TextArea
              value={i.accomplishments}
              onChange={(e) =>
                updateExperience(index, "accomplishments", e.target.value)
              }
              label="Accomplishments"
            />
          </div>
        ))}
      </form>
    </>
  );
};

export default Experience;
