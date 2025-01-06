const Output = ({ personal, experience, education }) => {
  return (
    <>
      <section className="w-full bg-gray-300 p-4 md:h-full md:min-h-screen md:w-1/2">
        <div className="flex w-full flex-col gap-4 bg-white p-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <img src={personal.avatar} />
              <span>
                {personal.firstName} <span>{personal.lastName}</span>
              </span>
              <span>{personal.jobTitle}</span>
            </div>
            <div className="flex flex-col gap-2">
              <span>{personal.phoneNumber}</span>
              <span>{personal.emailAddress}</span>
              <span>
                {personal.city}, <span>{personal.stateCountry}</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span>Experience</span>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>{experience.jobTitle}</span>
                <span>{experience.company}</span>
                <span>{experience.jobDescription}</span>
              </div>
              <div>
                <span>
                  {experience.startMonth}/<span>{experience.startYear}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span>Education</span>
            <div className="flex justify-between">
              <div className="flex gap-1">
                <span>{education.school}</span>
                <span>-</span>
                <span>{education.degree}</span>
              </div>
              <div>
                <span>{education.startMonth}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Output;
