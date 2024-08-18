import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ProgressBar from "./Components/ProgressBar";
import Tab_Component from "./Components/Tab_Component";
import FormExample from "./Components/ValidationForm";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="progressbar" element={<ProgressBar />} />
            <Route path="tab_component" element={<Tab_Component />} />
            <Route path="faqcomponents" element={<FormExample />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
