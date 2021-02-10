import { useState, useEffect} from "react";
import './App.css';
import {WidgetContainer} from "./WidgetContainer";

function App() {
  
  const [license, setLicense] = useState("");
  
  useEffect( () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString); // doesn't work in IE, but who cares ;)
    const license = urlParams.get("license");
    setLicense(license);
  },[]);
  
  return (
      <WidgetContainer license={license} />
  );
}

export default App;
