import logo from './logo6.svg';
import './App.css';
import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import Button from '@material-ui/core/Button';

const data = [
  { option: '?איזה מפקד אתה' ,style: { textColor: '#ffffff' }},
  { option: '?איך אתה מרגיש' ,style: { textColor: '#ffffff' }},
  { option: '?למה יצאת לקצונה', style: { textColor: '#ffffff' } },
  { option: '?מה החלומות שלך' ,style: { textColor: '#ffffff' }},
];

const names = [
  { option: 'אבירם אימבר' },
  { option: 'עמרי אבני' },
  { option: 'אוהד חאוסמיד'},
  { option: 'אלעד יונגלר' },
  { option: 'אלעד ברוש' },
  { option: 'בנפו' },
  { option: 'הוד לוי'},
  { option: 'טל בן אסא' },
  { option: 'יובל שנרך' },
  { option: 'יניב בלדינגר' },
  { option: 'ליר יודלביץ' },
  { option: 'מיכאל סימקין' },
  { option: 'נבו מנשה' },
  { option: 'עדי דניאל' },
  { option: 'עמית סדן' },
  { option: 'עמית קפלן' },
  { option: 'ערן קרביץ' },
  { option: 'שחר חוזה' },
  { option: 'שחר לופטיג' },
  { option: 'גל פינדר' },
  { option: 'ניר שובל' },
  { option: 'עומר קסנטבאום' },
  { option: 'ליאל מצא' },
  { option: 'אורין שיטרית' },
  { option: 'לירון חמו' },
  { option: 'עמית בנימינוב' },
  { option: 'שרי באוור' },
  { option: 'שני להב' },
  { option: 'ליאן בן יצחק' },
  { option: 'דוב איזן' },
  { option: 'שחר משה' },
  { option: 'טל הורן' },
  { option: 'שי מסלטון' },
  { option: 'עדיאל לרר' },
  { option: 'יהל זמוש' },
  { option: 'תומר ערד' },
  { option: 'ליאל ברמי' },
  { option: 'הדר אלקלעי' },
  { option: 'קים גולדנשטיין' },
  { option: 'דר חבקוק' },
  { option: 'אלעד נצר' },
  { option: 'בועז בן דוב' },
  { option: 'עמית מאמו' },

];


const backgroundColors = ['#03045e', '#0096c7', '#0077b6', '#023e8a'];
const backgroundColors2 = ['#000000', '#e01919'];

const textColors = ['#0b3351'];
const textColors2 = ['#ffffff'];

const outerBorderColor = '#eeeeee';
const outerBorderWidth = 10;
const innerBorderColor = '#30261a';
const innerBorderWidth = 0;
const innerRadius = 0;
const radiusLineColor = '#eeeeee';
const radiusLineWidth = 8;
const fontSize = 11;
const fontSize2 = 15;
const textDistance = 60;
const radiusLineWidth2 = 4;


const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [mustSpin2, setMustSpin2] = useState(false);
  const [prizeNumber2, setPrizeNumber2] = useState(0);
  const [winName, setWinName] = useState('');
  const [winQuestion, setWinQuestion] = useState('');




  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
    setWinQuestion(data[newPrizeNumber].option)
  }

  const handleSpinClick2 = () => {
    const newPrizeNumber = Math.floor(Math.random() * names.length)
    setPrizeNumber2(newPrizeNumber)
    setMustSpin2(true)
    setWinName(names[newPrizeNumber].option)
  }
  return (
    <div className="App">
           <h1 className="App-header-2">
    דייט"ש - פלוגת שיאון</h1>
      <div className="flex-container">
        <div>
  <Wheel
          mustStartSpinning={mustSpin2}
          prizeNumber={prizeNumber2}
          data={names}
          backgroundColors={backgroundColors2}
          textColors={textColors2}
          fontSize={fontSize}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth2}
          // perpendicularText
          textDistance={textDistance}

          onStopSpinning={() => {
            setMustSpin2(false)
          }}
        />
        <Button variant="contained"     style={{
        backgroundColor: "#21b6ae",
        fontSize: "18px"
    }} href="#contained-buttons"
    onClick={handleSpinClick2}>
          SPIN
        </Button>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={backgroundColors}
          textColors={textColors}
          fontSize={fontSize2}
          outerBorderColor={outerBorderColor}
          outerBorderWidth={outerBorderWidth}
          innerRadius={innerRadius}
          innerBorderColor={innerBorderColor}
          innerBorderWidth={innerBorderWidth}
          radiusLineColor={radiusLineColor}
          radiusLineWidth={radiusLineWidth}
          // perpendicularText
          textDistance={textDistance}

          onStopSpinning={() => {
            setMustSpin(false)
          }}
        />
        <Button variant="contained"  style={{
        backgroundColor: "#21b6ae",
        fontSize: "18px"
    }} href="#contained-buttons" onClick={handleSpinClick}>
          SPIN
        </Button>
        </div>
        <div>
        </div>
        </div>
      <header className="App-header-2">
      {winName}
      </header>
      <header className="App-header-2">
      {winQuestion}
      </header>
    </div>
  );
}

export default App;
