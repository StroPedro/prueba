import { Switch , Route, HashRouter ,  } from 'react-router-dom'

import Page1  from "./pages/pages1";
import Page2 from "./pages/pages2";
import Page3 from "./pages/pages3";
import Homme from './pages/homme';

function App(){
  
  return(

          <HashRouter>
                  <Switch>
                          <Route exact  path= "/prueba" component = {Homme}/>
                          <Route exact  path= "/prueba/page1" component = {Page1}/>
                          <Route exact  path = "/prueba/page2" component = {Page2}/>
                          <Route exact  path= "/prueba/page3" component = {Page3}/>                   
                  </Switch>
          </HashRouter> 
 
  )
 
}

export default App;
