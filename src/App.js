import './App.css';
import Login from "./Components/Login";
import { SignUp } from './Components/SignUp';
import {Routes,Route} from "react-router-dom";
import Todo from "./Components/Todo";

function App() {
return (
<div className="App">
    <Routes>
        <Route path="/home" element={<Todo/>} />
         <Route path="/signup" element={<SignUp/>} /> 
        <Route path="/" element={<Login/>}/> 
    </Routes>
{/*<Login/>*/}
</div>
);
}

export default App;
