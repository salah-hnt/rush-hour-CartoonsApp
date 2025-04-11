import { useEffect, useState } from "react"
import { useParams } from "react-router"


interface CartoonsCharacter {

    title: string
    year: number
    creator: string
    rating: number
    genre: string
    episodes: number
    image: string
 
  }
    
export const CartoonsDetails = () => {
  const { id } = useParams()
  const [cartoonsDetails, setCartoonsDetails] =
    useState<null | CartoonsCharacter>(null)

  useEffect(() => {
    async function fetchCharacter() {
      const response = await fetch(
        `https://api.sampleapis.com/cartoons/cartoons2D/${id}`
      )
      const result = await response.json()
      setCartoonsDetails(result)
    }
    fetchCharacter();
  }, [id])

  return (
    <>
    
      {cartoonsDetails ? (
        <section>
          <h1>{cartoonsDetails.title}</h1>
          <img src={cartoonsDetails.image} alt={cartoonsDetails.title}></img>
          <p>genre : {cartoonsDetails.genre}</p>
          <p> creator : {cartoonsDetails.creator}</p>
          <p>year : {cartoonsDetails.year}</p>
          
        </section>
      ) : (
        <section>This character is not here (yet)</section>
      )}
    </>
  )
}