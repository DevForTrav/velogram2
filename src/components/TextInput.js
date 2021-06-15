import React, { useState } from 'react'
import { Form, FormControl, Button, InputGroup } from 'react-bootstrap'

const TextInput = () => {

    const [randomText, setRandomText ] = useState('')
    const [remainingCharacters, setRemainingCharacters] = useState(40)

    const handleClick = () => {
        console.log(randomText)
    }

    const handleChange = (e) => {
        setRandomText(e.target.value)
        setRemainingCharacters( 40 - e.target.value.length )
    }

    return (
        <>
            <div>{remainingCharacters}/40</div>
            <Form>
                <FormControl onChange={handleChange} type="input"  placeholder="Hello There">
                </FormControl>
                <Button onClick={handleClick}>Submit</Button>
            </Form>
        </>
    )


}

export default TextInput