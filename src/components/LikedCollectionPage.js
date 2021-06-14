import React, { useState, useEffect } from 'react'
import ImageCard from './ImageCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'
import { render } from '@testing-library/react'

const LikedCollectionPage = (props) => {
    const allLikedImages = []
    const [ allImages, setAllImages ] = useState([])
    const [ likedImage, setLikedImage ] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:3001/images")
        .then(response => response.json())
        .then(images  => {
            images.map( image => {
                if(image.isLiked === true) {
                    setLikedImage(image)
                    console.log(likedImage)
                } else {
                    console.log("image not liked")
                } 
            })
        })
    }, [])
    
    

    const renderRow = (arg) => {
        return (<Row lg={3}>{arg}</Row>)
    }

    const renderLikedImages = () => {   
        return allLikedImages.map( image => {
            return <ImageCard likeHandler={props.likeHandler} src={image.imageURL} title={image.imageTitle} id={image.id} isLiked={image.isLiked}/>
        })
    } 

    return (
        <Container>
            <div>We're still working on this feature. Please try again soon!</div>
            {/* {renderRow(renderLikedImages())} */}
        </Container>
    )
}

export default LikedCollectionPage