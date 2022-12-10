import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useParams } from "react-router";
import './App.css';

const Home = (props) => {
  return (
    <div className="App">
      <h1>Welcome</h1>
    </div>
  )
}

// const Word = (props) => {
//   const { word, font, background  } = useParams();
//   return (
//     <div className="App">
//       <h1 style = {{ color: font, backgroundColor: background }}>The word is: { word } </h1>
//     </div>
//   )
// }

// const Number = (props) => {
//   const { number } = useParams();
//   return (
//     <div className="App">
//       <h1>The number is: { number }</h1>
//     </div>
//   )
// }

const WordNum = (props) => {
  const { wordNum, font, background } = useParams();

  return (
    <div className="App">
        {
          (!isNaN(wordNum))
            ? <h1>The number is: { wordNum }</h1>
              : <h1 style = {{ color: font, backgroundColor: background }}>The word is: { wordNum } </h1>
        }
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/:wordNum" element={<WordNum/>}/>
          <Route path="/:wordNum/:font/:background" element={<WordNum/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;