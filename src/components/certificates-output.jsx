import { useEffect } from "react";

const CertificatesOutput = ({ certificates, linkIcon, monthNumber }) => {
  useEffect(() => {
    console.log(certificates.startYear);
  }, [certificates.startYear]);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>{certificates.certificationName}</span>
          {certificates.credentialURL === "" ? (
            <span>{certificates.issuingOrganisation}</span>
          ) : (
            <a
              className="flex gap-1"
              target="_blank"
              href={`https://${certificates.credentialURL}`}
            >
              {certificates.issuingOrganisation}
              <img className="w-3 object-contain" src={linkIcon} />
            </a>
          )}
          {certificates.description === "" ? null : (
            <ul>
              <li className="list-inside list-disc">
                {certificates.description}
              </li>
            </ul>
          )}
        </div>
        <div className="flex gap-1">
          {certificates.startMonth === "" &&
          certificates.startYear === "" ? null : (
            <>
              <div>
                <span>
                  {monthNumber(certificates.startMonth)}/
                  <span>{certificates.startYear}</span>
                </span>
              </div>
              <span>-</span>
            </>
          )}
          {certificates.endMonth === "" &&
          certificates.endYear === "" &&
          certificates.doesNotExpire === false ? null : (
            <div>
              {certificates.doesNotExpire ? (
                <span>Present</span>
              ) : (
                <span>
                  {monthNumber(certificates.endMonth)}/
                  <span>{certificates.endYear}</span>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CertificatesOutput;
