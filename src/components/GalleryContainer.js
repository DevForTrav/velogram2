import React,{useState, useEffect} from 'react'
import ImageCard from './ImageCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row } from 'react-bootstrap'

const GalleryContainer = (props) => {


    useEffect(() => {
        fetch("http://localhost:3001/images")
        .then(response => response.json())
        .then(data => {
            setImageData(data)
        })
    }, [])

    const [imageData, setImageData ] = useState([])
    

    const renderRow = (arg) => {
        return (<Row lg={3}>{arg}</Row>)
    }

    const renderImageData = () => {
        return imageData.map( uniqueImage => {
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

export default GalleryContainer