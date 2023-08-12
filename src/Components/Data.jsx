import { useState, useEffect } from "react";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap"

const Data = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false)

  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
        const displayData = await axios.get(`http://hn.algolia.com/api/v1/search?query=${inputValue}`);
        const response = await displayData.data.hits;
        setData(response);
        setLoading(true)
        console.log(response)
    }
    
    catch(error) {
        console.log(error, "ERROR");
    }
  };


//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     setLoading(true)
//     fetch(`http://hn.algolia.com/api/v1/search?query=${inputValue}`)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`The request has failed with status ${response.status}`);
//         }

//         return response.json();
//       }) 

//       .then((data) => {
//         setData(data.hits);
//         // console.log(data.hits)
//       })

//       .catch((error) => {
//         console.log(error, "ERROR");
//       })

//       .finally(() => {
//         console.log("FETCH COMPLETED");
//       });
//   };

// console.log(data)
  return (
    <div>
      <h2>Hacker News</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleChange}
        />   
        <button type="submit">Search</button>
      </form>
      {data.length ? data.map((response) => (
        <div key={response.created_at}>
          <h3>{response.title}</h3>
          <p>{response.url}</p>
        </div>
      )): <div>{loading ? setData : (<ReactBootstrap.Spinner animation="border" variant="dark" />)}</div>}
    </div>
  );
};

export default Data;
