import { Switch , Route, BrowserRouter ,  } from 'react-router-dom'

import Page1  from "./pages/pages1";
import Page2 from "./pages/pages2";
import Page3 from "./pages/pages3";
import Homme from './pages/homme';

function App(){
  
  return(

          <BrowserRouter>
                  <Switch>
                          <Route exact  path= "/" component = {Homme}/>
                          <Route exact  path= "/page1" component = {Page1}/>
                          <Route exact  path = "/page2" component = {Page2}/>
                          <Route exact  path= "/page3" component = {Page3}/>                   
                  </Switch>
          </BrowserRouter> 
 
  )
 
}

export default App;
