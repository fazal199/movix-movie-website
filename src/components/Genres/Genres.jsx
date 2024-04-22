import React from 'react'
import { useSelector } from 'react-redux';
import "./genres.scss";

const Genres = ({data}) => {
  
    //28,30
  const {genres} = useSelector(movix => movix.home);

  return (
    <div>
      <div className="genres">
        {
            data?.map((g) => {
                if(!genres[g]?.name)
                return

                return(
                    <div key={g} className="genre">
                        {genres[g]?.name}
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Genres
