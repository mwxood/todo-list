import React, { useState } from 'react';
import { Button, Input, Card, CardContent, Grid } from '@material-ui/core';
import './Create.css';

const Create = (props) => {
    const [list, setList] = useState('')
    const [errorMessage, setErrorMesage] = useState('')


    const addListHandler = (event) => {
        event.preventDefault()
      
        if(list.trim().length === 0) {
            setErrorMesage('This field is required.')
            return
        }

        props.onAddList(Math.floor(Math.random() * 100), list)
        setList('')
    }

    const listChangeHandler = (event) => {
        setErrorMesage('')
        setList(event.target.value)
    }

    return(
        <Card variant="outlined">
            <CardContent>
                <form className="list-form d-flex align-content-center" onSubmit={addListHandler}>
                    <label className="list-input">
                    <Input className="full-width mr-1" value={list} onChange={listChangeHandler} />
                        <span className="error-message">{errorMessage}</span>
                    </label>
                    <Button variant="outlined" onClick={addListHandler}>Create</Button>
                </form>
            </CardContent>
        </Card>
    )
}

export default Create;