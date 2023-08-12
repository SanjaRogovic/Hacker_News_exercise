import { useState } from "react";
import axios from "axios";

const Data = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  
//   useEffect(() => {
//     fetchData();
//   }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.prevent.default();

    try{
        const displayData = await axios(`http://hn.algolia.com/api/v1/search?query=${inputValue}`);
        if(!displayData) throw new Error(`The request has failed with status ${displayData.status}`);
        const response = await displayData.data.hits;
        setData ([response]);
    }
    
    catch(error) {
        console.log(error, "ERROR");
    }
  };


//   const fetchData = () => {
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
      {data.length ? (
        <div key={response.created_at}>
          <h3>{response.title}</h3>
          <p>{response.url}</p>
        </div>
      ): <p>Error loading data</p>}
    </div>
  );
};

export default Data;
