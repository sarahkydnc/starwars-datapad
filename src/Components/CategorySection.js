import { useState } from 'react'
import CategoryButton from './CategoryButton'
import './CategorySection.css'
import SearchBar from './SearchBar'

export default function Category(props) {
    
    const categoryTypes = ["people", "films", "starships", "vehicles", "species", "planets"]
    const DEFAULTURL = 'swapi.dev/api/'
    const [link, setLink] = useState('')


    function handleCatClick(e) {
        // adjusts URL based on button clicked, updates PropsHandler to reflect the latest URL.
        e.preventDefault();
        let newLink = DEFAULTURL + e.target.value + "/"
        setLink(newLink)
        props.updateLinkToDataPadForm(newLink)
    }
    
    return(
        <div>
            {categoryTypes.map((type)=>{return(
                <CategoryButton 
                    name={type} 
                    handleCatClick={handleCatClick}
                />
                )})}

        </div>
    )
}