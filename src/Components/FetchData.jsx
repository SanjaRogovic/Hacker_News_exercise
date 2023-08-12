import {useState, useEffect} from "react";

const FetchData = () => {

    const [inputValue, setInputValue] = useState("")
    const [posts, setposts] = useState([])
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.prevent.default()
    }

    const handleChange = () => {
        setInputValue({
            ...inputValue, [e.target.value]: e.target.value
        })
    }


    return (
        <div>
            <h1>Hacker News</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={inputValue} onChange={handleChange}/>
                    <button type="submit">Submit</button>
                </div>             
                <div>
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>              
            </form>
        </div>
    )
}

export default FetchData;