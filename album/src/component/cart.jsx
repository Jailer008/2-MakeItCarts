import React from 'react';
import './styles.scss'

function Cart (props) {

    return(
        <div className = "main">
          <div className = "cart">
            <div className = "cart-img">
              <img src = {props.pic} alt = {props.albumName} id = 'imgMain' />
            </div>
            <div className = "cart-info">

              <div className = "info-top">
                <p id = 'title'>{props.albumName}</p>
                <p>{props.tipo}</p>
              </div>
  
              <div className = "info-middle">
                <p>{props.artista}</p>
                <p>{props.ano}</p>
              </div>
  
              <div className = "info-bottom">
                  <div id = 'boxGen'>{props.genero}</div> 
                  <img src={props.icon} alt="" id = 'imgIcoin'/>                            
              </div>

            </div>
          </div>
        </div>
    )
}

export default Cart