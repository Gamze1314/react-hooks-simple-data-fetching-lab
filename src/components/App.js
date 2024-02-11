import React, { useEffect , useState } from 'react'

export default function App() {
    // use useEffect hook to fetch random dog images

    const [ image, setImage ] = useState("")
    const [isLoading, setIsLoading] = useState(true); // to check whether img has finished loading

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(data => {
        setImage(data.message); // update state with random img we fetched from API
        setIsLoading(!true); // update state
      });

  }, []);


  return (
    <div>
        {isLoading ? <p>Loading...</p> : <img src={image} alt="A Random Dog" />}
    </div>
  );
}

