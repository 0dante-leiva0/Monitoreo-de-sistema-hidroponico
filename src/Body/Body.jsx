import react from 'react'
import "../Body/Body.css"
import tipoTransitor from "./img/hidroponia.svg"
function App() {
    return (
        <div >
            <div className="body-container">
                <aside>
                    <div className="body-menu">
                        <h4>TIPOS DE TRANSISTORES</h4>
                        <div className="">
                            <h4>Titulo</h4>
                            <ul>
                                <li><a href="#tipos">Tipos de transistores</a></li>
                                <li><a href="#bjt">Transistores BJT</a></li>
                                <li><a href=""></a></li>
                                <li><a href=""></a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <main>
                    <div className="body-articles">
                        <article>
                            {/* <a id="tipos"></a> */}
                            <h4>MONITOREO DE SISTEMA HIDROPÓNICO</h4>
                            <figure className="figuras">
                            <img src={tipoTransitor} alt="SCADA" />
                            {/* <figcaption>Charcoal on wood. Anonymous, circa 1423.</figcaption> */}
                            </figure>
                        </article>

                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
