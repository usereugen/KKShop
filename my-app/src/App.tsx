import React from 'react';
import './App.css';
import RoutesPage from "./routes/Routes";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="App">
            <Header/>
            <RoutesPage/>
            <Footer/>
        </div>
    );
}

export default App;
