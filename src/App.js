import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavigasiBottom from "./components/mainNav.js";
import Header from "./components/Header/Header.js";
import { Container } from "@material-ui/core";
import Trending from "./Pages/Trending/Trending.js";
import Movies from "./Pages/Movies/Movie.js";
import Series from "./Pages/Series/Series.js";
import Search from "./Pages/Search/Search.js";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path='/' component={Trending} exact/>
            <Route path='/movies' component={Movies}/>
            <Route path='/series' component={Series}/>
            <Route path='/search' component={Search}/>
          </Switch>
        </Container>
      </div>
      <NavigasiBottom />
    </BrowserRouter>
  );
}

export default App;
