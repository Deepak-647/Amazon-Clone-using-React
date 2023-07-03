import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const ResultsSuggestionContainer = ({suggestion}) => {
   
    if(!suggestion) return null;
  return (
     
        <div>
            
      <Link to ={`/results?search_query=${suggestion}`}>
        <p className="p-1 px-2 hover:bg-gray-700 hover:text-white cursor-pointer" >
          <FontAwesomeIcon className='mr-2' icon={faMagnifyingGlass}  />
          {suggestion}
        </p>
      </Link>
    </div>
    
  )
}

export default ResultsSuggestionContainer