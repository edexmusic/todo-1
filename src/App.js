import React from "react";
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Todo from "./components/todo/todo";
import {Component} from "react";
import Login from "./components/login/login";
import {Location, Router, Route} from "@reach/router";
import {BrowserRouter, Routes} from "react-router-dom";
import {connect} from "react-redux";
import store from "./containers/redux/store";


export class App extends Component {
    render() {
        return (

            <div>
                <Router>
                    <Header path='*'/>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/todo-app' element={<Todo />} />
                    <Route path='/login' element={<Login />} />
                </Router>
            </div>
            // <BrowserRouter>
            //     <Header/>
            //     <Routes>
            //         <Route path='/' element={<Home/>}/>
            //         <Route path='/about' element={<About/>}/>                  works
            //         <Route path='/todo-app'
            //                element={<Todo/>}/>
            //         <Route path='/login' element={<Login/>}/>
            //     </Routes>
            // </BrowserRouter>
        )
    }
}

export default connect(null, store);


