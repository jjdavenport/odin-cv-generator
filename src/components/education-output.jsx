const EducationOutput = ({ education, monthNumber }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="flex gap-1 text-gray-500">
            <span>{education.school}</span>
            <span>-</span>
            <span>{education.degree}</span>
          </div>
          {education.achievements === "" ? null : (
            <ul>
              <li className="list-inside list-disc">
                {education.achievements}
              </li>
            </ul>
          )}
        </div>
        <div className="flex gap-1">
          {education.startMonth === "" && education.startYear === "" ? null : (
            <>
              <div>
                <span className="text-gray-500">
                  {monthNumber(education.startMonth)}/
                  <span>{education.startYear}</span>
                </span>
              </div>
              <span>-</span>
            </>
          )}
          {education.endMonth === "" &&
          education.endYear === "" &&
          education.toPresent === false ? null : (
            <div>
              {education.toPresent ? (
                <span className="text-gray-500">Present</span>
              ) : (
                <span className="text-gray-500">
                  {monthNumber(education.endMonth)}/
                  <span>{education.endYear}</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EducationOutput;
