import f3 from './images/f3.png';
import f4 from './images/f4.png';
import f5 from './images/f5.png';
import './App.css';
import ToDo from './components/ToDo';
function App() {
  return (
    <div className="container">
    <h2 className="main_title">Что будет по плану?</h2>
        <div className="main_block">
        <ToDo title="Обучение" img={f3} text='Почему бы вам не научиться создавать сайты наподобии этого?'/>
        <ToDo title="Возможности" img={f4} text='Путь к идеалу долгий, но можно хотя бы приблизится к нему.'/>
        <ToDo title="Успех" img={f5} text='Мы гарантируем, что вы сумеете трудоустроиться в высшие компании.'/>
        </div>
    </div>
  );
}

export default App;
