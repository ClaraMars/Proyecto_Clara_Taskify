// import classes from './App.module.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';

const App = () => {
    return (
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/*" element={<NotFound/>} />
        </Routes>
        </>
    );
}

export default App;