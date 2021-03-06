import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Character from './Character';

const App = () => (
  <>
    <Header />
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      name="Rick Sanchez"
      species="Human"/>
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
      name="Jerry Smith"
      species="Human"/>
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/22.jpeg"
      name="Aqua Rick"
      species="Fish-Person"/>
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      name="Summer Smith"
      species="Human"/>
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/363.jpeg"
      name="Trandor"
      species="Alien"/>
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/190.jpeg"
      name="Keara"
      species="Alien"/>
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/421.jpeg"
      name="Rich Plutonian"
      species="Alien"/>
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/88.jpeg"
      name="Cynthia"
      species="Human"/>
    <Character
      img="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      name="Morty Smith"
      species="Human"/>
    <Footer />
  </>
);

export default App;
