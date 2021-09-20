import React from 'react'
import './FeaturedMovie.css'

function FeaturedMovie({ item }) {

    let firstDate = new Date(item.first_air_date);
    let genres = [];
    for (let i in item.genres) {
        genres.push(item.genres[i].name);
    }

    let description = item.overview;

    //Pegando apenas uma parte
    if (description.length > 200) {
        description = description.substring(0, 22) + " ... ";
    }

    return (
        <div className="featured" style={{
            /**Lebra das propriedades das imagens?, então, aqui é aplicado o cover
             * Que fara com que a imagem se ajuste a toda a área disponivel, mas pode ser que haja recorte
             */
            backgroundSize: 'cover',
            /** Note também que normalmente num CSS padrão o nome seria background-position*/
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            { /* Tem 2 divs por que?, pq cada uma aplica aquele efeito na imagem
            Agora o pq uma ficar dentro da outra, não peguei */}
            <div className="feature--vertical">
                <div className="feature--horizontal">
                    { /* Note que aqui tem primero apenas o nome, ou seja, gasta uma linha do HTML */}
                    <div className="feature--name">{item.original_name}</div>
                    { /* Aqui é colocado em uma div para que em vez de cada item gastar 1 linha do HTML
                    todes gastem apenas 1 */}
                    <div className="feature--info">
                        <div className="feature--points">{item.vote_average} pontos</div>
                        <div className="feature--year">{firstDate.getFullYear()}</div>
                        { /* Aqui é bem bolado, para aparecer apenas o S */}
                        <div className="feature--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 && 's'}</div>
                    </div>
                    <div className="feature--description">
                        {description}
                    </div>
                    <div className="feature--buttons">
                        <a href={`/watch/${item.id}`} className="feature--watchbutton">► Assistir</a>
                        <a href={`/list/add/${item.id}`} className="feature--mylistbutton"> + Minha Lista</a>
                    </div>
                    <div className="feature-genres">
                        <strong>Generos: </strong>
                        {genres.join(', ')}
                    </div>
                </div>
            </div>

        </div>

    )

}

export default FeaturedMovie