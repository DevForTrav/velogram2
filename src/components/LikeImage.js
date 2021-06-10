import React, { useEffect } from 'react'
import { Button, Col, Row } from 'react-bootstrap'


const LikeImage = (props) => {

    fetch("http://localhost:3001/images")
    .then(res => res.json())
    .then(data => data)

    const clickHandler = () => {
        props.likeHandler(props.image)
        // likeHandler()
    }

    return (
        <Row>
            <Col md={{ span: 3, offset: 10 }}>
                <Button size="sm" variant="dark"  image={props} onClick={clickHandler}>Like</Button>
            </Col>
        </Row>
        
    )
    

}

export default LikeImage