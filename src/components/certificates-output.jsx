const CertificatesOutput = ({ certificates, linkIcon, monthNumber }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>{certificates.certificationName}</span>
          {certificates.credentialURL === "" ? (
            <span>{certificates.issuingOrganisation}</span>
          ) : (
            <a
              className="flex gap-1 text-gray-500"
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
                <span className="text-gray-500">
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
                <span className="text-gray-500">Present</span>
              ) : (
                <span className="text-gray-500">
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
