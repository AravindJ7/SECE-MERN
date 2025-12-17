import Navbar from "./functionalComponents/Navbar"
import "./App.css"
import ClassComponent from "./ClassComponents/ClassComponent";
function App(){  
  const styleh1 = {
    backgroundColor:"green",
    color:"white",
    textAlign:"center",
  }
  return (
    <header>
    <Navbar/>
    <div>
      <h1  style={styleh1}>Welcome to JSX</h1>
      <h2>This is a Simple react component🍼</h2>
      <ClassComponent />
      <img src="vite.svg" alt="" style={{ marginLeft:"100px", width:"200px"}}/>
      
    </div>
    </header>
  );
}

export default App
