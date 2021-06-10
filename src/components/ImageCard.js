import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Card } from 'react-bootstrap'
import { useState } from 'react'
import LikeImage from './LikeImage'


const ImageCard = (props) => {
    const [likedImageCollection, setLikedImageCollection] = useState([null])

    const [ isLiked, setIsLiked ] = useState('')



    return (
        <Col lg={4} className="mb-4"> 
            <Card >
                <Card.Body>
                    <Card.Title className="text-muted">{props.title}</Card.Title>
                </Card.Body>
                <Card.Img src={props.src} alt="Moutain biker Jumps bike over jump"  />
                <LikeImage likeHandler={props.likeHandler} image={props} />
            </Card>
        </Col>

    )

}

export default ImageCard