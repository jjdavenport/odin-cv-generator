import phoneIcon from "../assets/phone-icon.svg";
import mailIcon from "../assets/mail-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import linkIcon from "../assets/link-icon.svg";

const Output = ({
  personal,
  experience,
  education,
  skills,
  languages,
  certificate,
}) => {
  const monthNumber = (month) => {
    const months = {
      January: "01",
      February: "02",
      March: "03",
      April: "04",
      May: "05",
      June: "06",
      July: "07",
      August: "08",
      September: "09",
      October: "10",
      November: "11",
      December: "12",
    };
    return months[month];
  };

  return (
    <>
      <section className="flex w-full bg-gray-300 p-4 text-xs md:h-full md:min-h-screen md:w-1/2">
        <div className="flex w-full flex-1 flex-col gap-4 bg-white p-4 shadow-md">
          <div className="flex justify-between">
            <div className="flex gap-1">
              {personal.avatar === "" ? null : (
                <img
                  className="h-10 w-10 rounded-full object-contain"
                  src={personal.avatar}
                />
              )}
              <div className="flex flex-col">
                <span className="text-lg">
                  {personal.firstName} <span>{personal.lastName}</span>
                </span>
                <span className="text-lg">{personal.jobTitle}</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-1">
                <img className="w-3 object-contain" src={phoneIcon} />
                {personal.phoneNumber}
              </span>
              <span className="flex items-center gap-1">
                <img className="w-3 object-contain" src={mailIcon} />
                {personal.emailAddress}
              </span>
              <span className="flex items-center gap-1">
                <img className="w-3 object-contain" src={locationIcon} />
                {personal.city},<span>{personal.stateCountry}</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="uppercase">Experience</span>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>{experience.jobTitle}</span>
                {experience.companyWebsite === "" ? (
                  <span>{experience.company}</span>
                ) : (
                  <a
                    className="flex gap-1"
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
              <div className="flex gap-1">
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
                      <span>Present</span>
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
          </div>
          <div className="flex flex-col">
            <span className="uppercase">Education</span>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <div className="flex gap-1">
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
                {education.startMonth === "" &&
                education.startYear === "" ? null : (
                  <>
                    <div>
                      <span>
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
                      <span>Present</span>
                    ) : (
                      <span>
                        {monthNumber(education.endMonth)}/
                        <span>{education.endYear}</span>
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <span className="uppercase">Certificates</span>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <span>{certificate.certificationName}</span>
                {certificate.credentialURL === "" ? (
                  <span>{certificate.issuingOrganisation}</span>
                ) : (
                  <a
                    className="flex gap-1"
                    target="_blank"
                    href={`https://${certificate.credentialURL}`}
                  >
                    {certificate.issuingOrganisation}
                    <img className="w-3 object-contain" src={linkIcon} />
                  </a>
                )}
                {certificate.description === "" ? null : (
                  <ul>
                    <li className="list-inside list-disc">
                      {certificate.description}
                    </li>
                  </ul>
                )}
              </div>
              <div className="flex gap-1">
                {certificate.startMonth === "" &&
                certificate.startYear === "" ? null : (
                  <>
                    <div>
                      <span>
                        {monthNumber(certificate.startMonth)}/
                        <span>{certificate.startYear}</span>
                      </span>
                    </div>
                    <span>-</span>
                  </>
                )}
                {certificate.endMonth === "" &&
                certificate.endYear === "" &&
                certificate.doesNotExpire === false ? null : (
                  <div>
                    {certificate.doesNotExpire ? (
                      <span>Present</span>
                    ) : (
                      <span>
                        {monthNumber(certificate.endMonth)}/
                        <span>{certificate.endYear}</span>
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div>
            <span className="uppercase">Skills</span>
            <div className="flex justify-between">
              <span>{skills.skill}</span>
              <span>{skills.proficiency}</span>
            </div>
          </div>
          <div>
            <span className="uppercase">Languages</span>
            <div className="flex justify-between">
              <span>{languages.language}</span>
              <span>{languages.proficiency}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Output;
