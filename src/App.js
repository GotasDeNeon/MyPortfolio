import React from 'react';
import Navbar from './components/Navbar';
import WorkSection from './components/WorkSection';
import About from './components/About';
import ContactForm from './components/ContactForm';
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="header">
        <h1>John Doe</h1>
        <h2>
          <strong>I'm a graphic designer</strong>
        </h2>
      </header>
      <WorkSection />
      <About />
      <ContactForm />
    </div>
  );
}

export default App;
