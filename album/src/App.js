import {Cart} from './component/index';
import {getAllAlbums} from './images/1_datos'
import React from 'react';
import imgCorazon from "./images/corazon.png"

function App() {
  const carts = getAllAlbums().items;

  return (
          <>
            {
                carts.map((item,i) =>(
                  <div key={i}>
                    <Cart  pic = {item.image} albumName = {item.albumName} 
                    tipo = {item.typeArtist} artista ={item.nameArtist}
                    ano = {item.year} genero = {item.calification}
                    icon = {imgCorazon}/>
                    
                  </div>                 
                  ))
            }
          </>
  );
}

export default App;
