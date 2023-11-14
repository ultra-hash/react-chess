import { Switch, Route } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>
}


function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}

export default App;
