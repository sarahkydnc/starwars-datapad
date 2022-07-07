import { useState } from 'react'

// Reason for SearchBar being inside CategorySection:
// Easier to grab props for dynamic text change when user clicks on CategoryButton(s)

export default function SearchBar() {
    let [searchText, setSearchText] = useState('')
    
    function handleChange(e) {
        setSearchText(e.target.value)
    }

    return(
        <div> 
            <input 
                className="form-control search-bar" 
                type="text" 
                onChange={handleChange} 
                placeholder="Enter Your Query" 
                value={searchText} 
            />
        </div>
    )
}