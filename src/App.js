import { Suspense } from "react";
import "./App.css";
import Quote from "./component/Quote";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Query</h1>
        <Suspense fallback={<h1>Loading1...</h1>}>
          <Quote />
          <Quote />
          <Quote />
          <Quote />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
