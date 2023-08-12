import { useState } from "react";
import axios from "axios";
import * as ReactBootstrap from "react-bootstrap";



const Data = () => {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await axios.get(
        `http://hn.algolia.com/api/v1/search?query=${inputValue}`
      );
      const data = response.data.hits.filter(
        (data) => data.url != null
      );
    if (data.length === 0) {
        setError("Search unsuccessful. No data found.");
        setData([]);
    } else {
        setData(data);
      }
    } catch (error) {
      setError("The request has failed");
      setData([]);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div>
      <h2>Hacker News</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleChange}
          required
        />
        <button type="submit">Search</button>
      </form>
        {loading && <ReactBootstrap.Spinner animation="border" variant="secondary" />}
        {error && <div>{error}</div>}  
        {(data.length > 0) && (data.map((data) => (
        <ul>
            <li key={data.objectID}>
                <a href="{data.url}" target="-blank" rel="noopener noreferrer">{data.title} </a>
            </li>
        </ul>      
         
        )))
        }    
    </div>
  );
};

export default Data;
