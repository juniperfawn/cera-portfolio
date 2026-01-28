import "./App.css";
import CustomCursor from "./components/atoms/custom-cursor/custom-cursor";
import PortfolioCard from "./components/molecules/portfolio-card/portfolio-card";

function App() {
  return (
    <>
      <CustomCursor />
      <div className="relative z-0">
        <div className="flex flex-col gap-2 px-2">
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
  );
}

export default App;
