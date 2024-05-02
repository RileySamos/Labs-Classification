import f3 from './images/f3.png';
import f4 from './images/f4.png';
import f5 from './images/f5.png';
import './App.css';

function App() {
  return (
      <div className="container">
          <h2 className="main_title">Что будет по плану?</h2>
          <div className="main_block">
              <div className="blocks">
                  <img src={f3} alt="pic"/>
                      <h3>Обучение</h3>
                      <p>Почему бы вам не научиться создавать сайты наподобии этого?</p>
              </div>
              <div className="blocks">
                  <img className="imagen" src={f4} alt="pic"/>
                      <h3>Возможности</h3>
                      <p>Путь к идеалу долгий, но можно хотя бы приблизится к нему.</p>
              </div>
              <div className="blocks">
                  <img src={f5} alt="pic"/>
                      <h3>Успех</h3>
                      <p>Мы гарантируем, что вы сумеете трудоустроиться в высшие компании.</p>
              </div>
          </div>
      </div>
  );
}

export default App;
