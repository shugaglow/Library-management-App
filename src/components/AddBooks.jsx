import { useContext } from "react"
import { userContext } from "../contextApi/ContextProvider"

function AddBooks() {
const {setValue, value, setWantToReadArray, wantToReadArray} = useContext(userContext)
    function addToWantToRead(){
        if (value[0] === "americanah"){
            setWantToReadArray([...value, value[0]])
        }
    }

    console.log(wantToReadArray)



    return (
    <div className="add-book-wrapper">
        <h1>Add New Book</h1>

        <div className="add-book-select">
            
                <select onChange={(e)=>setValue(e.target.value)}>
                    <option value="">Select a book</option>
                    <option value={value[0]}>Americanah</option>
                    <option value={value[1]}>Purple Hibiscus</option>
                    <option value={value[2]}>The Alchemist</option>
                    </select>
        </div>

        <div className="add-books-buttons">
            <button onClick={addToWantToRead}>Want to Read</button>
            <button>Curently Reading</button>
            <button>Finished Reading</button>

        </div>
    </div>
    )
}

export default AddBooks