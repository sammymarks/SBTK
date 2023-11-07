import { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'


export default function ArtworkSearchResults (props) {
    const [artworkResults, setArtworkResults] = useState(null)
    const [searchText, setSearchText] = useState(null)

    const getArtworkSearch = async () => {
        const response = await axios.get("http://localhost:3001/artworks")
        setArtworkResults(response.data)
    }

    useEffect(() => {
        setSearchText(props.text)
        getArtworkSearch()
    }, [searchText])

    console.log("searchText", searchText)
    console.log(artworkResults)


    return (
        !artworkResults ?
        <div>LOADING</div>
        :
        <div className='ArtistSearchResults'> 
        {
            artworkResults.map((item, index) => (
                <div 
                    className='search-results-grid-item' 
                    key={index} 
                    // onClick={() => goToGridItem(index)}
                >
                    <img className='search-results-image' src={item.imageURLs[0]}></img>
                    <div className='search-results-title-one'>{item.title}</div>
                    <div className='search-results-title-two'>{item.artist}</div>
                    <div className='search-results-description'>{item.description}</div>
                </div>
            ))
        }
        </div>
    )
}