// import './App.css';
// import Cards from './cards';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Sidebar from './sidebar/sidebar';





//  function App() {
//   return (
//       <>
//       <div className = "container"> 
//       {/* <div className="text-container">
//         <p> You know what the "Generator Operator Destroyer " I don't even understand your plans for me.</p>
//         <p>The world where I found my happiness is not now with me. You are playing lot with me. When will you stop playing??</p>    
//       </div>
//       <button className='btn-align'>Submit</button> */}
//       <Cards/>
      
// 	</div>
//   <div>
//   <Sidebar/> 
//   </div> 
	
	
//       </>
//     );
//   }

  
// export default App;



import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Name} from "./pages/Name";
import {Themes} from "./pages/Theme"; 
import LoginButton from "./Login/Auth0Login";
import LogoutButton from "./Login/Auth0Logout";
import Profile from "./Login/Profile";


function App() {
return (
	<>
	
	
	<Router>
	<Sidebar />
	<Routes>
		<Route path='/' />
	</Routes>
	</Router>
	<LoginButton/>
	<LogoutButton />
	</>
);

}

export default App;
