import GalleryContainer from './components/GalleryContainer';
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import TextInput from './components/TextInput'


function App() {
  const [likedImageCollection, setLikedImageCollection] = useState([])

  const likeHandler =  (props) => {
    // setLikedImageCollection(props)
    // console.log(likedImageCollection)
    // return fetch("http://localhost:3001/images")
    // .then(res => res.json())
    // .then(data => {
      // editJSON(props)
      console.log(props.isLiked)
    return fetch(`http://localhost:3001/images/${props.id}`, {
          method: "PUT",
          headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
              },
          body: JSON.stringify(
              {
                  id : props.id,
                  imageTitle: props.title,
                  imageURL : props.src,
                  isLiked : ( props.isLiked ? false : true )
              }
          )
      // })
    //   .catch((error)=> {
    //     console.error(error)
    //   })
    })
    
  }

  // const editJSON = (props ) => {
  //   return fetch("http://localhost:3001/images", {
  //           method: "PUT",
  //           headers : { 
  //               'Content-Type': 'application/json',
  //               'Accept': 'application/json'
  //              },
  //           body: JSON.stringify(
  //               {
  //                   id : props.id,
  //                   imageTitle: props.imageTitle,
  //                   imageUrl : props.imageUrl,
  //                   isLiked : true
  //               }
  //           )
  //     })
  //     .catch((error)=> {
  //       console.error(error)
  //     })
  // }
  
  return (
    <>
      <Container>
        <GalleryContainer likeHandler={likeHandler} />
        <TextInput />
      </Container>
    </>
  );
}

export default App;
