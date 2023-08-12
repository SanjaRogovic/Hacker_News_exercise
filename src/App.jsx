import './App.css'
import {useState, useEffect} from "react"
import FetchData from "./Components/FetchData"


function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = () => {
    fetch("http://hn.algolia.com/api/v1/items/:id")
    .then ((response) => {
      if(!response.ok) {
        throw newError (`The fetch has failed with status ${response.status}`)
      }

      return response.json()
    })

    .then((data) => {
      setData(data)
    })

    .catch((error) => {
      console.log(error, "error")
    })

    .finally(() => {
      console.log("fetch completed")
    })

  }
  
  

  return (
    <>
      <div>
        <FetchData/>
       </div>
    </>
  )
}

export default App
