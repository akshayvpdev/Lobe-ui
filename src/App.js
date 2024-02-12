import "./App.css";
import DragablePanel from "./components/DragablePanel";
import Layout from "./components/Layout";
import SideNav from "./components/SideNav";

function App() {
  return (
<div className="container">
<SideNav/>
<DragablePanel/>
<Layout/>

</div>
      
  );
}

export default App;
