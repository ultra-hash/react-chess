import { Switch, Route } from "react-router-dom";
import Board from "./components/board";

function Home() {
  return <h1>Home Page</h1>
}


function App() {
  return (
    <Switch>
      <Route path="/" exact component={Board} />
      <Route path="/home" exact component={Home} />
    </Switch>
  );
}

export default App;
