import { Button } from "../atoms/button/button";

const Nav = () => {
  return (
    <div className="flex gap-2 justify-center pt-4">
      <Button title="work" backgroundColor="bg-pf-black-01-20" link="/" />
      <div className="hidden lg:block">
        <Button
          title="Cera Kocher Portfolio"
          backgroundColor="bg-pf-black-01-20"
          link="/"
        />
      </div>
      <Button title="about" backgroundColor="bg-pf-black-01-20" link="/about" />
    </div>
  );
};

export default Nav;
