import './App.css'
import Card from './components/Card'

function App() {

  /*
  const username = "piyush kumar" //variable
  let newArray = [1,2,3]; //array
  let newObj = { //object
    username : "piyush kumar",
    rollNo : 166
  }
  */
  const name = "Piyush Kumar" //variable


  return (
    <>
      <h1 className='bg-green-400 text-black'>Tailwind test</h1>


      {/* we can assign props as object, array and variable */}
      {/* <Card name = {username} array = {newArray} obj = {newObj}/> */}


      <Card username = {name} btnText = "Click Me!"/>
      <Card username="Ayush Kumar" btnText = "Visit Me!" />
      <Card username="Aman Kumar"/>


    </>
  )
}

export default App
