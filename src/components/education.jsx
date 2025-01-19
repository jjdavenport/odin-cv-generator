import { motion, AnimatePresence } from "framer-motion";
import Input from "./input";
import AddButton from "./add-button";
import Title from "./title";
import Dropdown from "./dropdown";
import TextArea from "./textarea";
import DeleteButton from "./delete-button";
import Checkbox from "./checkbox";

const Education = ({
  onClose,
  months,
  years,
  education,
  updateEducation,
  addEducation,
  deleteEducation,
}) => {
  return (
    <>
      <form noValidate className="flex flex-col items-end gap-6">
        <Title onClick={onClose} type="button" text="Education" />
        <AddButton onClick={addEducation} type="button" text="Add Education" />
        <AnimatePresence>
          {education.map((i) => (
            <motion.div
              key={i.id}
              layout
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex w-full flex-col items-end gap-6 border-b border-gray-300 pb-8"
            >
              <div className="flex w-full flex-col items-end gap-4">
                <DeleteButton
                  onClick={() => deleteEducation(i.id)}
                  type="button"
                />
                <Input
                  value={i.school}
                  onChange={(e) =>
                    updateEducation(i.id, "school", e.target.value)
                  }
                  label="University/School"
                  type="text"
                />
                <Input
                  value={i.degree}
                  onChange={(e) =>
                    updateEducation(i.id, "degree", e.target.value)
                  }
                  label="Degree"
                  type="text"
                />
                <Input
                  value={i.fieldOfStudy}
                  onChange={(e) =>
                    updateEducation(i.id, "fieldOfStudy", e.target.value)
                  }
                  label="Field of Study"
                  type="text"
                />
              </div>
              <div className="flex w-full flex-col gap-4 lg:flex-row">
                <div className="flex w-full flex-col gap-1">
                  <span className="text-sm uppercase text-gray-400">
                    Start Date
                  </span>
                  <div className="flex w-full gap-4">
                    <Dropdown
                      value={i.startMonth}
                      onChange={(e) =>
                        updateEducation(i.id, "startMonth", e.target.value)
                      }
                      type={months}
                      placeholder="Month"
                    />
                    <Dropdown
                      value={i.startYear}
                      onChange={(e) =>
                        updateEducation(i.id, "startYear", e.target.value)
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
                          updateEducation(i.id, "endMonth", e.target.value)
                        }
                        type={months}
                        placeholder="Month"
                      />
                      <Dropdown
                        value={i.endYear}
                        onChange={(e) =>
                          updateEducation(i.id, "endYear", e.target.value)
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
                          updateEducation(i.id, "toPresent", !i.toPresent)
                        }
                      />
                      <span className="text-sm text-gray-400">Present</span>
                    </motion.div>
                  </div>
                </div>
              </div>
              <TextArea
                value={i.achievements}
                onChange={(e) =>
                  updateEducation(i.id, "achievements", e.target.value)
                }
                label="Achievements"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </form>
    </>
  );
};

export default Education;
