import React, {useEffect, useState} from 'react';
import {Button, Modal} from 'react-bootstrap';


const DrawGameWordChoice = (props) =>{
    const [words, setWords] = useState(undefined)
    useEffect(() => {
        props.socket.emit("getWord", function(data){
            setWords(data)
        })
    }, [])

    const chooseWord = (choice) =>{
        props.socket.emit("choosenWord", choice)
        props.onHide()
    }
    return (
        <Modal
            {...props}
            show={props.show}
            onHide={props.onHide}
            size="l"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="Modal">
            <Modal.Body className="modal-body">
               <div>
                   <div>
                       <h2>Vous devez choisir un mot !</h2>
                   </div>
                <br/>
                <br/>
                <br/>
                   { words && (
                        <div>
                            <Button onClick={() => chooseWord(words.first)} variant="outline-dark">{words.first}</Button>
                            <Button onClick={() => chooseWord(words.second)} variant="outline-dark">{words.second} </Button>
                        </div>
                   )}
               </div>
            </Modal.Body>
        </Modal>
    )
}

export default DrawGameWordChoice;