import { useEffect, useState } from 'react'
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

function App() {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    async function loadAll() {
      //pegando a lista Total
      let list = await Tmdb.getHomeList();
      setMovieList(list)

      //pegando o Featured
      let originais = list.filter(i => i.slug === 'originals');
      let ramdomChosen = Math.floor(Math.random() * (originais[0].items.results.length - 1));
      let chosen = originais[0].items.results[ramdomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);

    }

    loadAll();
  }, [])
  /**Esse useEffect esta apenas monitorando o o sroll da janela */
  useEffect(() => {
    function srollListener() {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    /**Fica ouvindo o evento */
    window.addEventListener('scroll', srollListener);

    return () => {
      /**AQUI REMOVE o evento, quando sai da pagina
       * Sempre que tiver return no useEffect quer dizer isso
       */
      window.removeEventListener('scroll', srollListener)
    }
  }, [])

  return (
    <div className="page">
      <Header black={blackHeader} />
      {featuredData &&
        <FeaturedMovie item={featuredData} />
      }
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer>
        Direitos de imagem para a Netflix
      </footer>
      {movieList.length == 0 &&
        <div className="loading">
          <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="Carregando" />
        </div>}


    </div>
  );
}

export default App;
