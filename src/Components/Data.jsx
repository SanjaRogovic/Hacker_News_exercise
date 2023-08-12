import {useState} from "react";

const Data = () => {

    const [inputValue, setInputValue] = useState("")

    const handleSubmit = (e) => {
        e.prevent.default()
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
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

export default Data;