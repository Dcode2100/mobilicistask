import React from "react";
import EditButton from "./ui/EditButton";
import professionalDetailsSvg from "../../public/assets/svg/professionalDetailsSvg.svg";

const ProfilePhoto = ({ photo }) => {
  return (
    <div className=" m-auto relative mt-[26.7px]  flex justify-between items-center">
      <img
        className="w-[88.89px] h-[88.89px] relative rounded-full shadow border border-slate-50"
        src="https://via.placeholder.com/89x89"
      />
      <div className="w-[82.44px] h-[19.89px] px-[14.22px] py-[4.44px] bg-indigo-50 rounded-[88.89px] mr-4 ">
        <div className="text-stone-900 whitespace-nowrap text-opacity-80 text-[8.89px] font-medium">
          Upload Photo
        </div>
      </div>
    </div>
  );
};
``;

const ContactInfoContainerReusable = ({ label, input, edit }) => {
  return (
    <div className="flex justify-between relative">
      <div className="left-section flex flex-col gap-[8.33px]">
        <p className="title text-stone-900 text-opacity-70 text-[10.67px] font-medium">
          {label}
        </p>
        <input
          className="text-neutral-800 text-opacity-90 text-[10.67px] font-medium"
          value={input}
        ></input>
      </div>
      <EditButton />
    </div>
  );
};
const ContactInfo = () => {
  return (
    <div className="md:mt-[21px] flex flex-col gap-[17.22px] border rounded-[4.444px] py-[16px] px-[14.22px] ">
      <ContactInfoContainerReusable
        label={"Your Name"}
        input={"Dikshant Solanki"}
        edit={"edit"}
      />
      <ContactInfoContainerReusable
        label={"Email"}
        input={"dikshant214@gmail.com"}
        edit={"edit"}
      />
      <ContactInfoContainerReusable
        label={"Phone Number"}
        input={"+91 8412687423"}
        edit={"edit"}
      />
    </div>
  );
};
const AboutUser = ({ Username }) => {
  return (
    <div className="mt-[21px] flex flex-col gap-[17.22px] border rounded-[4.444px] py-[16px] px-[14.22px] ">
      <div className="w-full flex justify-between items-center">
        <div>
          <span className="text-neutral-800 text-opacity-90 text-sm font-medium">
            About
          </span>{" "}
          <span className="text-indigo-900 text-sm font-medium">
            {Username ? Username : "Vishnu"}
          </span>
        </div>
        <EditButton />
      </div>
      <div className="w-[267.56px] max-xs:w-full text-zinc-700 text-opacity-80 text-[10.67px] max-xs:text-[8.55px] font-normal tracking-tight">
        Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue
        luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit amet
        consectetur.
      </div>
    </div>
  );
};

const SkillsReusable = ({ title }) => {
  return (
    <div className="text-neutral-800 text-opacity-90 text-[10.67px] font-medium">
      {title ? title : "NextJs "}
    </div>
  );
};
const Skills = () => {
  return (
    <div className="mt-[21px] flex flex-col gap-[17.22px] border rounded-[4.444px] py-[16px] px-[14.22px] mb-[37.33px] max-md:mb-[21px]">
      <div className="flex justify-between items-center">
        <p className="text-neutral-800 text-opacity-90 text-sm font-medium">
          Skills
        </p>
        <EditButton />
      </div>
      <SkillsReusable />
      <SkillsReusable />
    </div>
  );
};

const ProfessionalDetails = () => {
  return (
    <div
      className="md:mt-[21px] flex flex-row gap-[17.22px] border justify-between rounded-[4.444px] py-[16px] px-[14.22px]
    "
    >
      <div>
        <div className="text-neutral-800 text-opacity-90 text-[10.67px] font-medium">
          Professional Details
        </div>
        <div className="w-[152px] text-zinc-700 text-opacity-80 text-[10.67px] font-normal tracking-tight">
          This are the professional details shown to users in the app.
        </div>
      </div>
      <div className="w-12 h-12 relative bg-blue-200">
        <professionalDetailsSvg />
      </div>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="  flex flex-col gap-[14px]  justify-between rounded-[4.444px] py-[16px] ">
      <div className="flex justify-between items-center">
        <div className="text-neutral-800 text-opacity-90 text-[10.67px] font-medium">
          Certifications
        </div>
        <EditButton />
      </div>
      <div className="h-[46px] relative flex justify-between bg-white rounded-[26.67px] border border-stone-300 items-center">
        <div className="h-[24px] w-[23px] ml-[22px] bg-blue-300">SVG</div>
        <div className="flex  flex-col items-center m-auto gap-[6px]">
          <div className="text-zinc-700 text-opacity-80 text-xs font-normal tracking-tight">
            Python
          </div>
          <div className=" text-zinc-700 text-opacity-80 text-[10.67px] font-normal tracking-tight">
            Coding Ninjas
          </div>
        </div>
      </div>
    </div>
  );
};

const ExperienceReusable = ({ years }) => {
  return (
    <div className="h-[47.11px] relative rounded-[8.89px] shadow border border-black border-opacity-20 items-center px-[11.8px] flex justify-between">
      <div className="w-full">
        <div className="gap-[1rem] w-max text-neutral-800 flex justify-between text-opacity-90 text-[10.67px] font-medium">
          <span>7 Years (2014-2021)</span> <span>Full-time</span>
        </div>
        <div className=" text-zinc-700 w-max gap-[1rem] text-opacity-80 text-[10.67px] font-normal tracking-tight flex justify-between ">
          <span>Oruphones </span> <span>-- Full Stack Developer</span>
        </div>
      </div>
      <img
        className="w-[47px] h-[23px] max-sm:hidden"
        src="https://via.placeholder.com/47x23"
      />
    </div>
  );
};
const Experience = () => {
  return (
    <div className="flex flex-col gap-[12.78px]  justify-between rounded-[4.444px] ">
      <div className="flex justify-between items-center pr-[10px] ">
        <div className="text-neutral-800 text-opacity-90 text-[10.67px] font-medium">
          Experience
        </div>
        <EditButton />
      </div>
      <ExperienceReusable />
      <ExperienceReusable />
    </div>
  );
};

const Education = ({ college, year, degreeType }) => {
  return (
    <div className="mt-[21px] flex flex-col gap-[10px]  rounded-[4.444px] mb-[37.33px] max-md:mb-[21px]">
      <div className="flex justify-between items-center pr-[10px]">
        <p className="text-neutral-800 text-opacity-90 text-[10.67px] font-medium">
          Education
        </p>
        <EditButton />
      </div>
      <div className=" relative bg-white rounded-[8.92px] shadow border border-stone-300 gap-[10px] flex flex-col px-[14px] py-[10px] ">
        <div className="h-[20.25px] justify-start items-center inline-flex ">
          <p className="text-indigo-900 text-xs font-medium tracking-tight">
            {college ? college : "IIT BOMBAY"}
          </p>
        </div>
        <div className="text-neutral-800 flex justify-between w-[200px] text-opacity-90 text-[10.67px] font-medium">
          <p>{year ? year : "(2010-2014)"}</p>
          <p>{degreeType ? degreeType : "Btech"}</p>
        </div>
        <p className="max-w-[222.77px] text-zinc-700 text-opacity-80 text-[10.67px] font-normal tracking-tight leading-[normal]">
          Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel
          congue luctus. Leo diam cras neque mauris ac arcu elit ipsum dolor sit
          amet consectetur.
        </p>
      </div>
    </div>
  );
};

const MyProfile = () => {
  return (
    <div className="md:ml-[20%] max-xs:w-[95%] bg-blue-200 max-md:m-auto flex justify-center flex-col relative">
      <div className=" w-full m-auto h-[169px] max-sm:h-[60px] top-[18.22px] bg-indigo-900 absolute rounded-[8.89px] max-md:rounded-[2.78px] border border-white">
        <div className="left-[14.22px] top-[14.22px] max-xs:left-[5px] max-xs:top-[5px] absolute text-white text-[10.67px] max-sm:text-[5px] font-medium">
          MY PROFILE
        </div>
      </div>
      <div className="profile-section w-[90%] max-sm:w-[85%] bg-white top-[110px]  max-sm:top-[50px] m-auto overflow-hidden md:flex h-full relative rounded-[8.89px] shadow border border-gray-200">
        <div className="left-bio-section max-md:w-80%  md:w-1/2 relative px-[1.5rem]">
          <ProfilePhoto />
          <ContactInfo />
          <AboutUser />
          <Skills />
        </div>

        <div className="right-professional-section max-md:w-80%  md:w-1/2 relative px-[1.5rem] ">
          <ProfessionalDetails />
          <Certifications />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
