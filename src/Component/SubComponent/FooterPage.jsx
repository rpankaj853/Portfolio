import React from "react";
import { Button } from "primereact/button";
import resume from "../../images/resume.pdf";

const FooterPage = () => {
  const handleIconClick = (iconName) => {
    console.log(`Icon clicked: ${iconName}`);
    if (iconName === "Resume") {
      window.open(resume, "_blank");
    }
    if (iconName === "LinkedIn") {
      window.open(
        "https://www.linkedin.com/in/pankaj-rana-a09276141/",
        "_blank"
      );
    }
    if (iconName === "GitHub") {
      window.open("https://github.com/rpankaj853", "_blank");
    }
    if (iconName === "Hacker") {
      window.open("https://www.hackerrank.com/profile/rpankaj853", "_blank");
    }
  };
  return (
    <div className=" h-36 flex justify-center items-start bg-white pt-3">
      <div>
        <div className="flex space-x-8">
          <Button
            icon="pi pi-linkedin"
            onClick={() => handleIconClick("LinkedIn")}
            className=" text-5xl text-customLightAqua px-7 icon"
            text
            raised
            tooltip="LinkedIn"
            tooltipOptions={{ position: "left" }}
          />
          <Button
            icon="pi pi-github"
            onClick={() => handleIconClick("GitHub")}
            className=" text-5xl text-customLightAqua px-7 icon"
            text
            raised
            tooltip="GitHub"
            tooltipOptions={{ position: "top" }}
          />
          <Button
            icon="pi pi-code"
            onClick={() => handleIconClick("Hacker")}
            className=" text-5xl text-customLightAqua px-7 icon"
            text
            raised
            tooltip="Hacker Rank"
            tooltipOptions={{ position: "top" }}
          />
          <Button
            icon=" pi pi-file-pdf"
            onClick={() => handleIconClick("Resume")}
            className=" text-5xl text-customLightAqua px-7 icon"
            text
            raised
            tooltip="Resume"
            tooltipOptions={{ position: "right" }}
          />
        </div>
        <p className="flex justify-center mt-3">
          Pankaj Rana <span className=" text-customLightAqua pl-2"> ©2025</span>
        </p>
      </div>
    </div>
  );
};

export default FooterPage;
