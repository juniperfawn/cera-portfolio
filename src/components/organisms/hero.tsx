const Hero = () => {
  return (
    <div
      data-hover="Interact with me"
      className="h-[600px] md:h-[700px] px-1 pt-1 relative max-w-full"
    >
      <iframe
        src="https://my.spline.design/untitled-4WzpUmVVQWv9SI8nhxDAPPtu/"
        className="rounded-lg h-full w-full"
      ></iframe>
      <div className="z-10 absolute bottom-0 left-5 right-5 pointer-events-none">
        <p className="text-md font-mono uppercase">creative developer</p>
        <h1 className="text-6xl md:text-8xl font-sans font-bold">Portfolio</h1>
      </div>
    </div>
  );
};

export default Hero;
