import SideNav from "./components/SideNav";
import MainRoute from "./connection/MainRoute";
import ChatPage from "./pages/ChatPage";
import './App.css'
import HomePage from "./pages/HomePage";


function App() {
  return (

    <div className="container">
      <SideNav/>
      <ChatPage/>
    </div>

  //   <div className="container">
  //   <SideNav/>
  //   <HomePage/>
  // </div>



  );
}

export default App;
