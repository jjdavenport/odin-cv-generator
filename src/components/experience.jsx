import Input from "./input";
import AddButton from "./add-button";
import Title from "./title";
import Dropdown from "./dropdown";
import TextArea from "./textarea";
import { useEffect } from "react";

const Experience = ({ onClose, months, years, setExperience, experience }) => {
  useEffect(() => {
    console.log(experience.startMonth);
  }, [experience.startMonth]);
  return (
    <>
      <form noValidate className="flex flex-col gap-4">
        <Title onClick={onClose} type="button" text="Experience" />
        <AddButton type="button" text="Add Experience" />
        <div className="flex flex-col gap-4">
          <Input
            value={experience.jobTitle}
            onChange={(e) =>
              setExperience((prev) => ({ ...prev, jobTitle: e.target.value }))
            }
            label="Job Title"
            type="text"
          />
          <Input
            value={experience.company}
            onChange={(e) =>
              setExperience((prev) => ({ ...prev, company: e.target.value }))
            }
            label="Company or Project Name"
            type="text"
          />
          <Input
            value={experience.companyWebsite}
            onChange={(e) =>
              setExperience((prev) => ({
                ...prev,
                companyWebsite: e.target.value,
              }))
            }
            label="Company Website"
            type="text"
          />
        </div>
        <div className="flex w-full gap-4">
          <div className="w-full">
            <span>Start Date</span>
            <div className="flex w-full gap-4">
              <Dropdown
                value={experience.startMonth}
                onChange={(e) =>
                  setExperience((prev) => ({
                    ...prev,
                    startMonth: e.target.value,
                  }))
                }
                type={months}
                placeholder="Month"
              />
              <Dropdown
                value={experience.startYear}
                onChange={(e) =>
                  setExperience((prev) => ({
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
                value={experience.endMonth}
                onChange={(e) =>
                  setExperience((prev) => ({
                    ...prev,
                    startMonth: e.target.value,
                  }))
                }
                type={months}
                placeholder="Month"
              />
              <Dropdown
                value={experience.endYear}
                onChange={(e) =>
                  setExperience((prev) => ({
                    ...prev,
                    startYear: e.target.value,
                  }))
                }
                type={years}
                placeholder="Year"
              />
            </div>
            <div className="flex gap-2 p-1">
              <input
                onChange={(e) =>
                  setExperience((prev) => ({
                    ...prev,
                    toPresent: e.target.checked,
                  }))
                }
                checked={experience.toPresent}
                type="checkbox"
              />
              <span>Present</span>
            </div>
          </div>
        </div>
        <TextArea
          value={experience.accomplishments}
          onChange={(e) =>
            setExperience((prev) => ({
              ...prev,
              accomplishments: e.target.value,
            }))
          }
          label="Accomplishments"
        />
      </form>
    </>
  );
};

export default Experience;
