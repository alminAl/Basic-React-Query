import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Post from "./component/Post";
import Quote from "./component/Quote";
import SinglePost from "./component/SinglePost";
import Videos from "./component/Videos";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h1>React Query-2</h1>
          <Routes>
            <Route path="/" element={<Videos />} />
            <Route path="/:id" element={<SinglePost />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
