import React from 'react';
import "../Header3/Header3.css"
import logo from '../img/logo.svg'
import menu from '../img/menu.png'

function Header3(){
    
const men=()=>{
console.log("Hola mundo");
  }

return(
    <div>
        <header className="header3">
            <div className="header3-container">
                <div className="logo3">
                    <img src={logo} width="50px" alt="Milogo"/>
                </div>
                <nav className="nav3" id="nav3">
                    <a href="" className="a3">Soluciones</a>
                    <a href="" className="a3">Productos</a>
                    <a href="" className="a3">Recursos</a>
                    <a href="" className="a3">Contactanos</a>
                </nav>
                <div className="menu3">
                    <button className="btn_menu3" onClick={men}>
                        <img src={menu} alt="Menú" width="30px"/>
                    </button>
                </div>
            </div>
        </header>
    </div>
)
}
export default Header3;
