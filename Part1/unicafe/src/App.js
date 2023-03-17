import './App.css';
import { useState } from 'react'

const StatisticLine=(props)=>{
  return (
   <table>
    <tbody>
    <tr>
      <td>
    <p>{props.text} : {props.value}</p> 
      </td>
    </tr>
    </tbody>
    </table> 
  )
}
const Statistics=(props)=>{
  if ((props.good+props.bad+props.neutral)==0)
  { 
  return(
    <h3>No feedback given</h3>
  )
  }
  { 
  return (
   
    <>
        <h2>Statistic</h2>

    <StatisticLine text="good" value={props.good}/>
    <StatisticLine text="neutral" value={props.neutral}/>
    <StatisticLine text="bad" value={props.bad}/>
    <StatisticLine text="all" value={props.bad+props.good+props.neutral}/>
    <StatisticLine text="average" value={(((props.good)+(props.bad*-1))/(props.bad+props.good+props.neutral)).toFixed(2)}/>
    <StatisticLine text="positive" value={(100*props.good/(props.bad+props.good+props.neutral)).toFixed(2)+"%"}/>

    </>
  )
  }
}

function Button(props){
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
function App() {
const[good,setGood]=useState(0)
const[neutral,setNeutral]=useState(0)
const[bad,setBad]=useState(0)

const handleGood=()=>{
  setGood(good+1)
}
const handleBad=()=>{
  setBad(bad+1)
}
const handleNeutral=()=>{
  setNeutral(neutral+1)
}


  return (
    <div>
    <h1>give feedback</h1>
    <Button handleClick={handleGood} text="good" />
    <Button handleClick={handleNeutral} text="neutral" />
    <Button handleClick={handleBad} text="bad" />
    <Statistics good={good} bad={bad} neutral={neutral} />
    
    </div>
  );
}

export default App;
