const ExperienceOutput = ({ experience, linkIcon, monthNumber }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="font-medium">{experience.jobTitle}</span>
          {experience.companyWebsite === "" ? (
            <span className="text-gray-500">{experience.company}</span>
          ) : (
            <a
              className="flex gap-1 text-gray-500"
              target="_blank"
              href={`https://${experience.companyWebsite}`}
            >
              {experience.company}
              <img className="w-3 object-contain" src={linkIcon} />
            </a>
          )}
          <span>{experience.jobDescription}</span>
          {experience.accomplishments === "" ? null : (
            <ul>
              <li className="list-inside list-disc">
                {experience.accomplishments}
              </li>
            </ul>
          )}
        </div>
        <div className="flex gap-1 text-gray-500">
          {experience.startMonth === "" &&
          experience.startYear === "" ? null : (
            <>
              <div>
                <span>
                  {monthNumber(experience.startMonth)}/
                  <span>{experience.startYear}</span>
                </span>
              </div>
              <span>-</span>
            </>
          )}
          {experience.endMonth === "" &&
          experience.endYear === "" &&
          experience.toPresent === false ? null : (
            <div>
              {experience.toPresent ? (
                <span className="text-gray-500">Present</span>
              ) : (
                <span>
                  {monthNumber(experience.endMonth)}/
                  <span>{experience.endYear}</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ExperienceOutput;
