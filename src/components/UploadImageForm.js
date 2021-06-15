import React, { useState } from 'react'
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap'



const UploadImageForm = () => {
    const [newImageURL, setNewImageURL] = useState([])
    const [newImageTitle, setNewImageTitle] = useState([])
    const [newImageCaption, setNewImageCaption] = useState([])
    let imageID;

    const createID = () => {
        fetch('http://localhost:3001/images')
        .then(res => res.json())
        .then(data => {
            imageID = ++data.length
        })
    }
    createID()
    
    const handleClick = () => {
        const data =  {id: imageID , imageTitle : newImageTitle, imageURL  : newImageURL, imageCaption : newImageCaption, "isLiked" : false }
        fetch("http://localhost:3001/images", {
            method: "POST",
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify(data)
        })
        .then(res => {
            console.log("Request complete! response:", res)
            window.location.reload()
        })

    }

    return(
            <Form >
                <FormControl onChange={ e => setNewImageURL(e.target.value)} className="mb-2" type="url" placeholder="Enter Image Url"></FormControl>
                <InputGroup>
                    <FormControl onChange={ e => setNewImageTitle(e.target.value)} type="input" placeholder="Enter Caption" ></FormControl>
                    <FormControl onChange={ e => setNewImageCaption(e.target.value)} type="input" placeholder="Enter Description"></FormControl>
                    <Button onClick={handleClick} variant="dark">Submit</Button>
                </InputGroup>
            </Form>
    )

}

export default UploadImageForm