import CategoryButton from './CategoryButton'
import './CategorySection.css'

export default function Category(props) {
    
    const categoryTypes = ["people", "films", "starships", "vehicles", "species", "planets"]
    const DEFAULTURL = 'swapi.dev/api/'


    function handleCatClick(e) {
        // adjusts URL based on button clicked, updates PropsHandler to reflect the latest URL.
        e.preventDefault();
        let newLink = DEFAULTURL + e.target.value + "/?search="
        // setLink(newLink)
        props.updateLinkToDataPadForm(newLink)
        console.log("button clicked")
    }
    
    return(
        <div className='button-container'>
            {categoryTypes.map((type)=>{return(
                <CategoryButton 
                    name={type} 
                    handleCatClick={handleCatClick}
                />
                )})}

        </div>
    )
}