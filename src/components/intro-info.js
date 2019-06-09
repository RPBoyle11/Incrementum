import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom';
import '../styles/intro-info.css';

export default function Intro_info(){
    return(
      <section className='intro'>
        <Navbar />
        <p className='intro-info'>Incrementum teaches you the Italian language by giving you daily tests.<br/>
        Each test is then processed using a complex algorithm to track which questions you<br/>
        are getting right and which ones you are getting wrong and then tests you more often on<br/>
        the words you keep getting wrong to help you learn them better. Registering allows Incrementum <br/>
        to keep track of your progress so each time you login you will resume learning where<br/>
        you left off.</p>
        <Link className='get-started' to="/register">Get Started</Link>
      </section>
    );
}