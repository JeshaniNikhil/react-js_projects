import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Sidebar } from "./components/Sidebar";
import { CreatePost } from "./components/CreatePost";
import { Postlist } from "./components/Postlist";
import PostListProvider from "./store/postliststore";
function App() {
  const [selectedtab, setselectedtab] = useState("Home");
  return (
    <PostListProvider>
    <div className="appcontainer">
      <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab}></Sidebar>
      <div className="content">
        <Header />
        {selectedtab == "Home" ? (
          <Postlist></Postlist>
        ) : (
          <CreatePost></CreatePost>
        )}
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}
export default App;