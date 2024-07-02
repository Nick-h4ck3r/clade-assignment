import SkillLogo from "./SkillLogo";
import SmHeading from "./SmHeading";

type Props = {};

const JobDetails = (props: Props) => {
  return (
    <div className="border-b-2">
      <div className="grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-4 py-6 w-fit *:border-gray-300 *:text-sm *:pr-10 *:flex *:flex-col *:gap-2">
        <div>
          <SmHeading heading="Skills Required" />

          <div className="flex flex-col gap-2">
            <SkillLogo
              name="Figma"
              logo="/figma.png"
            />
            <SkillLogo
              name="Adobe Illustrator"
              logo="/ai.png"
            />
            <SkillLogo
              name="Adobe XD"
              logo="/xd.png"
            />
          </div>
        </div>

        <div>
          <SmHeading heading="Preferred Language" />

          <p className="font-semibold text-base">English</p>
        </div>

        <div>
          <SmHeading heading="Type" />

          <p className="font-semibold text-base">Full-time</p>
        </div>

        <div>
          <SmHeading heading="Years of Experience" />

          <p className="font-semibold text-base">3+ Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
