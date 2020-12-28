In the main js file --->
import {BrowserRouter as Router} from 'react-router-dom'

in APP where all application specific code is present wrap router inside it .
 <Router>
     <App />
</Router>

inside routerfile --->
import {Route,Switch} from 'react-router-dom';

inside render method
        <Switch>
            <Route exact path="/" component={HomePage}></Route>
            <Route  path="/CalculatorPage" component={CalculatorPage}></Route>
        </Switch>

if we need to link in the header we just have to use the path using LINK 
import {Link} from 'react-router-dom'
   <Link to="/" className="navbar-brand">
    Home
    </Link>
