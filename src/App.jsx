import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Table } from "./components/ag-grid-table/table";
import Cards from "./components/cards/Cards";



function App() {
return (
	<div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<><Table/></>} />
		  <Route exact path="/cards" element={<><Cards/></>} />
        </Routes>
      </BrowserRouter>
    </div>
);

}

export default App;
