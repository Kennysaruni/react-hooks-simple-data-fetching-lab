// create your App component here
import react, {useEffect,useState}from "react"
function App(){
  const [dogImage, setDogImage] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const url = "https://dog.ceo/api/breeds/image/random";
  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setDogImage(data.message);
        setLoaded(true);
      });
  }, []); 

  if (!loaded) return <p>Loading...</p>;
    return(
        <img src={dogImage} alt="A Random Dog" />
    )
}
export default App