import GalleryContainer from './components/GalleryContainer';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'


function App() {
  const [likedImageCollection, setLikedImageCollection] = useState([])

  const likeHandler =  (props) => {
    // setLikedImageCollection(props)


    return fetch("http://localhost:3001/images")
    .then(res => res.json())
    .then(data => {
      console.log(data[props.id-1])
      return fetch("http://localhost:3001/images", {
            method: "PUT",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify({
              images: [
                {
                    id : data[props.id-1].id,
                    imageTitle: data[props.id-1].imageTitle,
                    imageUrl : data[props.id-1].imageUrl,
                    isLiked : true
                }
              ]
            })
      })
    })
  }

  return (
    <>
      <Container>
        <GalleryContainer likeHandler={likeHandler} />
      </Container>
    </>
  );
}

export default App;
