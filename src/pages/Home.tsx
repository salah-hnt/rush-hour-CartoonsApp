import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface CartoonsCharacter {
  title: string;
  year: number;
  creator: string;
  rating: number;
  genre: string;
  episodes: number;
  image: string;
 
}

export const Home = () => {
  const [characters, setCharacters] = useState<CartoonsCharacter[]>([]);

  useEffect(() => {
    async function getCharacters() {
      try {
        const response = await fetch(
          "https://api.sampleapis.com/cartoons/cartoons2D"
        );
        const result = await response.json();
        setCharacters(result);
      } catch (e) {
        console.error("Error fetching characters:", e);
      }
    }

    getCharacters();
  }, []);

  return (
    <>
      <h1>Welcome to the universe of cartoons 🎨</h1>
      <h2>Cartoons List:</h2>
      <ul>
        {characters.map((character) => (
          <li key={`Cartoon-${character.id}`}>
            <Link to={`/Cartoons/${character.id}`}>
              <h2>{character.title}</h2>
              <img src={character.image} alt={character.title} width="200" />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};