import Input from "./input";
import AddButton from "./add-button";
import Title from "./title";
import Dropdown from "./dropdown";
import TextArea from "./textarea";
import DeleteButton from "./delete-button";

const Education = ({
  onClose,
  months,
  years,
  education,
  updateEducation,
  addEducation,
}) => {
  return (
    <>
      <form noValidate className="flex flex-col gap-6">
        <Title onClick={onClose} type="button" text="Education" />
        <AddButton onClick={addEducation} type="button" text="Add Education" />
        {education.map((i, index) => (
          <>
            <div className="flex w-full flex-col items-end gap-6 border-b border-gray-300 pb-8">
              <div key={index} className="flex w-full flex-col items-end gap-4">
                <DeleteButton type="button" />
                <Input
                  value={i.school}
                  onChange={(e) =>
                    updateEducation(index, "school", e.target.value)
                  }
                  label="University.School"
                  type="text"
                />
                <Input
                  value={i.degree}
                  onChange={(e) =>
                    updateEducation(index, "degree", e.target.value)
                  }
                  label="Degree"
                  type="text"
                />
                <Input
                  value={i.fieldOfStudy}
                  onChange={(e) =>
                    updateEducation(index, "fieldOfStudy", e.target.value)
                  }
                  label="Field of Study"
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
                        updateEducation(index, "startMonth", e.target.value)
                      }
                      type={months}
                      placeholder="Month"
                    />
                    <Dropdown
                      value={i.startYear}
                      onChange={(e) =>
                        updateEducation(index, "startYear", e.target.value)
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
                        updateEducation(index, "endMonth", e.target.value)
                      }
                      type={months}
                      placeholder="Month"
                    />
                    <Dropdown
                      value={i.endYear}
                      onChange={(e) =>
                        updateEducation(index, "endYear", e.target.value)
                      }
                      type={years}
                      placeholder="Year"
                    />
                  </div>
                  <div className="flex gap-2 p-1">
                    <input
                      onChange={(e) =>
                        updateEducation(index, "toPresent", e.target.checked)
                      }
                      checked={i.toPresent}
                      type="checkbox"
                    />
                    <span className="text-sm text-gray-400">Present</span>
                  </div>
                </div>
              </div>
              <TextArea
                value={i.achievements}
                onChange={(e) =>
                  updateEducation(index, "achievements", e.target.value)
                }
                label="Achievements"
              />
            </div>
          </>
        ))}
      </form>
    </>
  );
};

export default Education;
