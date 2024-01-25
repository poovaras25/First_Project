// Router install cmd : npm i react-router-dom
// Router.js

import React, {Component} from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'
import ContactUs from './ContactUs'



class RouterExample extends Component {

    render() {
        return(
            <>
            <BrowserRouter>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
                <li>
                    <Link to='/contactUs'>ContactUs</Link>
                </li>
            </ul>

            <Routes>
              <Route path='/' element={ <Home /> } ></Route>
              <Route path='/about' element={ <About /> }></Route>
              <Route path='/contactUs' element={ <ContactUs /> }></Route>
            </Routes>

            </BrowserRouter>   
            
            </>
        )
    }
}
        
export default RouterExample