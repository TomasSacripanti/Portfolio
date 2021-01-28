import React, { Component } from 'react';
import Lines from '../components/Lines';
import Main from '../components/Main';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export class Homepage extends Component {
    render() {
        return (
            <>
                <Lines></Lines>
                <Main></Main>
                <About></About>
                <Projects></Projects>
                <Contact></Contact>
                <Footer></Footer>
            </>
        )
    }
}

export default Homepage;
