import React from 'react'
import ImageCard from './ImageCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'

const LikedCollectionPage = (props) => {
    

    const renderRow = (arg) => {
        return (<Row lg={3}>{arg}</Row>)
    }

    const renderImageData = () => {
        return props.map( uniqueImage => {
                return <ImageCard likeHandler={props.likeHandler} src={uniqueImage.imageURL} title={uniqueImage.imageTitle} id={uniqueImage.id} isLiked={uniqueImage.isLiked}/>
            }
        )
    }
        

    return (
        <Container>
            {renderRow(renderImageData())}
        </Container>
    )
}

export default LikedCollectionPage