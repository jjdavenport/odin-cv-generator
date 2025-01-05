import Button from "./button";
import profileIcon from "../assets/profile-icon.svg";
import briefcaseIcon from "../assets/briefcase-icon.svg";
import graduationIcon from "../assets/graduation-icon.svg";
import lightningIcon from "../assets/lightning-icon.svg";
import languageIcon from "../assets/language-icon.svg";
import certificateIcon from "../assets/certificate-icon.svg";

const Inputs = () => {
  return (
    <>
      <main>
        <h1>CV</h1>
        <ul>
          <Button img={profileIcon} title="Personal Details" />
          <Button img={briefcaseIcon} title="Experience" />
          <Button img={graduationIcon} title="Education" />
          <Button img={lightningIcon} title="Skills" />
          <Button img={languageIcon} title="Languages" />
          <Button img={certificateIcon} title="Certificates" />
        </ul>
      </main>
    </>
  );
};

export default Inputs;
