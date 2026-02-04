import { Button } from "../components/atoms/button/button";
import Nav from "../components/organisms/nav";
import CustomCursor from "../components/atoms/custom-cursor/custom-cursor";
import Stat from "../components/atoms/stat/stat";

export default function About() {
  return (
    <>
      <CustomCursor />
      <div className="lg:flex lg:min-h-screen box-border">
        <div className="absolute top-0 z-40 w-full px-2 lg:px-12">
          <Nav />
        </div>
        <div className="lg:w-1/2 h-auto pb-6 lg:pb-0">
          <img
            src="/images/profile.jpg"
            alt="Cera standing in London"
            className="p-2 w-full lg:h-full lg:w-full object-cover rounded-2xl"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col-reverse lg:flex-col justify-end gap-8 px-6 lg:px-12 pb-10">
          <div className="flex justify-center lg:justify-normal flex-wrap gap-6">
            <Button
              title="Linkedin"
              link="https://www.linkedin.com/in/cera-kocher"
              textColor="text-pf-white-01"
              backgroundColor="bg-client-blue-01"
            />
            <Button
              title="CV Resume"
              link=""
              textColor="text-pf-white-01"
              backgroundColor="bg-client-blue-01"
            />
            <Button
              title="Contact"
              link="mailto:cerackocher@gmail.com"
              textColor="text-pf-white-01"
              backgroundColor="bg-client-blue-01"
            />
          </div>

          <div className="text-pf-black-01 font-sans text-start max-w-xl">
            <h2 className="font-bold text-2xl pb-3">Cera Contesse Kocher</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vitae laoreet nisl, non lacinia lorem. Nunc dictum urna ut massa
              auctor malesuada. Ut iaculis vestibulum sem at tempus. Sed laoreet
              magna sit amet vulputate efficitur. Vivamus mattis dapibus nulla
              vel interdum. Integer sit amet ultricies magna. Fusce ac varius
              magna. Nunc rutrum aliquet rhoncus.
            </p>
            <div className="flex flex-col gap-8 pt-8">
              <Stat title="Year" stats={["2026"]} />
              <Stat
                title="Tech Stack"
                stats={[
                  "Javascript",
                  "Typescript",
                  "React",
                  "Next.js",
                  "Figma",
                  "Framer",
                  "Adobe Creative Suite",
                ]}
              />
              <Stat title="Role" stats={["Designer", "Developer"]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
