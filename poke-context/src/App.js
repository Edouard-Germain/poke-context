import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Nav from './Component/Nav'
import Home from './Pages/Home'
import Login from './Pages/Login'
import NotFound from './Pages/404';
import { ChakraProvider } from "@chakra-ui/react"


function App() {
  

  return (
    <ChakraProvider>
    <BrowserRouter>

    <Nav />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
  </ChakraProvider>

  );
}

export default App;