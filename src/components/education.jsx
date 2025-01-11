import Input from "./input";
import AddButton from "./add-button";
import Title from "./title";
import Dropdown from "./dropdown";
import TextArea from "./textarea";
import { useEffect } from "react";

const Education = ({ onClose, months, years, setEducation, education }) => {
  useEffect(() => {
    console.log(education.startMonth);
  }, [education.startMonth]);

  return (
    <>
      <form noValidate className="flex flex-col gap-6">
        <Title onClick={onClose} type="button" text="Education" />
        <AddButton type="button" text="Add Education" />
        <div className="flex flex-col gap-4">
          <Input
            value={education.school}
            onChange={(e) =>
              setEducation((prev) => ({ ...prev, school: e.target.value }))
            }
            label="University.School"
            type="text"
          />
          <Input
            value={education.degree}
            onChange={(e) =>
              setEducation((prev) => ({ ...prev, degree: e.target.value }))
            }
            label="Degree"
            type="text"
          />
          <Input
            value={education.fieldOfStudy}
            onChange={(e) =>
              setEducation((prev) => ({
                ...prev,
                fieldOfStudy: e.target.value,
              }))
            }
            label="Field of Study"
            type="text"
          />
        </div>
        <div className="flex w-full gap-4">
          <div className="w-full">
            <span>Start Date</span>
            <div className="flex w-full gap-4">
              <Dropdown
                value={education.startMonth}
                onChange={(e) =>
                  setEducation((prev) => ({
                    ...prev,
                    startMonth: e.target.value,
                  }))
                }
                type={months}
                placeholder="Month"
              />
              <Dropdown
                value={education.startYear}
                onChange={(e) =>
                  setEducation((prev) => ({
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
            <span>End Date</span>
            <div className="flex w-full gap-4">
              <Dropdown
                value={education.endMonth}
                onChange={(e) =>
                  setEducation((prev) => ({
                    ...prev,
                    endMonth: e.target.value,
                  }))
                }
                type={months}
                placeholder="Month"
              />
              <Dropdown
                value={education.endYear}
                onChange={(e) =>
                  setEducation((prev) => ({
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
                  setEducation((prev) => ({
                    ...prev,
                    toPresent: e.target.checked,
                  }))
                }
                checked={education.toPresent}
                type="checkbox"
              />
              <span className="text-sm">Present</span>
            </div>
          </div>
        </div>
        <TextArea
          value={education.achievements}
          onChange={(e) =>
            setEducation((prev) => ({
              ...prev,
              achievements: e.target.value,
            }))
          }
          label="Achievements"
        />
      </form>
    </>
  );
};

export default Education;
