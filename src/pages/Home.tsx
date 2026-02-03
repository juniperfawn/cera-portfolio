import CustomCursor from "../components/atoms/custom-cursor/custom-cursor";
import PortfolioCard from "../components/molecules/portfolio-card/portfolio-card";
import ShortCutCard from "../components/molecules/short-cut-card/short-cut-card";

export default function Home() {
  return (
    <main>
      <>
        <CustomCursor />
        <div className="relative z-0">
          <div className="flex flex-col md:flex-row md:justify-between px-2 py-[100px]">
            <div className="flex justify-center pb-2 md:pb-0 md:justify-between md:w-1/3">
              <h2 className="font-sans font-semibold text-pf-black-01">
                Quick Links
              </h2>
              <div className="hidden md:block w-[2px] h-full bg-pf-black-01 mr-8"></div>
            </div>
            <div className="flex gap-2 flex-col md:grid grid-cols-2 grid-rows-2 md:gap-3 md:w-2/3">
              <ShortCutCard
                title="arcé studios"
                subtitle="Figma, Framer, Shopify"
                link=""
                image="/images/klaus-cover.png"
                cta="see more"
              />
              <ShortCutCard
                title="arcé studios"
                subtitle="Figma, Framer, Shopify"
                link=""
                image="/images/ces-cover.png"
                cta="see more"
              />
              <ShortCutCard
                title="arcé studios"
                subtitle="Figma, Framer, Shopify"
                link=""
                image="/images/deb-cover.png"
                cta="see more"
              />
              <ShortCutCard
                title="about"
                subtitle="Figma, Framer, Shopify"
                link="/about"
                image="/images/haga-cover.png"
                cta="see more"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2">
            <h2 className="md:hidden font-sans font-semibold text-pf-black-01">
              Select Works
            </h2>
            <div className="h-[420px]">
              <PortfolioCard
                title="arcé studios"
                tech="Figma, Framer, Shopify"
                link=""
                image="/images/arce-cover.png"
              />
            </div>
            <div className="h-[600px]">
              <PortfolioCard
                title="Colorado Energy Systems"
                tech="Figma, Framer"
                link=""
                image="/images/ces-cover.png"
              />
            </div>
            <div className="h-[600px]">
              <PortfolioCard
                title="HagaDirect"
                tech="Next.js, Typescript, Storyblok"
                link=""
                image="/images/haga-cover.png"
              />
            </div>
            <div className="h-[600px]">
              <PortfolioCard
                title="Klaus Kocher Fotograf"
                tech="Figma, Framer"
                link=""
                image="/images/klaus-cover.png"
              />
            </div>
            <div className="h-[600px]">
              <PortfolioCard
                title="DB Shannan Photography"
                tech="Figma, Framer"
                link=""
                image="/images/deb-cover.png"
              />
            </div>
          </div>
        </div>
      </>
    </main>
  );
}
