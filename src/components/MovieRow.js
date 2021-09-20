import React, { useState } from 'react'
import './MovieRow.css'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MovieRow({ title, items }) {

    const [scrollX, setScrollX] = useState(0)

    function handleLeftArrow() {
        //Esse window.innerWidth ele pega a largura da tela do usuario
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x);
    }

    function handleRightArrow() {
        //Esse window.innerWidth ele pega a largura da tela do usuario
        let x = scrollX - Math.round(window.innerWidth / 2);
        let larguraLista = items.results.length * 150;
        if ((window.innerWidth - larguraLista) > x) {
            x = (window.innerWidth - larguraLista) - 60
        }
        setScrollX(x);
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="moveRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="moveRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    /** Existe esse calculo no width por conta das listas e o 150 é a largura maxima de cada item, por
                     * isso esta multiplicando
                    */
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (

                        <div key={key} className="moveRow--item">
                            <img src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )

}

export default MovieRow