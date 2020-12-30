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
             an also be used like 
             <Route path="/" render={()=><h1>NOT found</h1>}>
        </Switch>

if we need to link in the header we just have to use the path using LINK 
import {Link} from 'react-router-dom'
   <Link to="/" className="navbar-brand">
    Home
    </Link>

when we are using Link we can also pass few other details like Hashing / pathName;
<Link to={{
    pathName="",
    hash="#submit"    
}}>
we can also use search string.
<Link to={{
    pathName:"",
    hash:"#submit",
    Search:"?SomeValue" 
}}>

everytime we use the path it is always a absolute path .
<Link to={{
    pathName:"/new-text",
}}>
and 
<Link to={{
    pathName:"src/new/new-text",
}}>
both are one and the same.

If we need to use a relative path then , we must use ->
this.props.match.url+"/new-text"



using Link will not give a enhanvemnet capabilityy to customise style. we can instead use NavLink.
<Link> ---> <NavLink>
Navelink comes upwith few classes -->
ActiveClassName
ActiveStyle,



we can also mention the parameters in routes which we can get it using match API.
<route path="/:ID">
this can be fetched using thios.props.match.paramas.somename.

usng Query params:
<link to ="/my-path?start=5"> 
this.props.location.search.

<link to ="/my-path#hashValue"> 
this.props.location.hash.

Prohgramitacally we can do using -->
this.props.history.push("/newroute");
this.props.history.push({pathName:"/newroute"+id});



We can also redirect the Page using <Redirect> Tag 
<Redirect from="/" to="/newPost">
from and to can be used only when the route is decalred in between switch.

If we declare a Redirect then we can specify only to routes .
<Redirect to="/post">



we can also define <Redirect tag inside a variable.
var redirect =<Redirect to ="/new">


use{redirect} in any other files.



we can also use Replace instaed of redirect .
this.props.history.replace("/post");




for a better performance and lazy loading we can use 
<React.fragmant>
</React.fragmant>


we can also use 
<Suspense fallback ={<div>loading</div>}></Suspense>



We can also use base routes in BrowserRouter using 
<BrowserRout baseName="/">