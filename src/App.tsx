import "./App.css";
import { Button } from "./components/atoms/button/button";
import CustomCursor from "./components/atoms/custom-cursor/custom-cursor";

function App() {
  return (
    <>
      <CustomCursor />
      <div className="relative z-0">
        <div data-hover="true" className="flex gap-6">
          <Button
            title="LIVE SITE"
            link=""
            backgroundColor="bg-client-green-01"
            textColor="text-pf-black-01"
          />
          <Button title="LIVE SITE" link="" />
          <Button title="LIVE SITE" link="" />
        </div>
      </div>
    </>
  );
}

export default App;
