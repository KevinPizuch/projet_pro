import {useState} from 'react'
import Carousel from './Carousel'
import {Button, InputGroup, FormControl, Modal} from 'react-bootstrap';
import Toast from 'light-toast';
import {useHistory} from "react-router-dom";
import dataService from '../services/data.service';

const LobbyModal = (props) => {
    const [gameCode,
        setGameCode] = useState(props.params ?? '')
    const [username,
        setUsername] = useState('')
    const [characterIndex,
        setCharacterIndex] = useState(1)
    const history = useHistory();

    function handleChange(ev) {
        setUsername(ev.target.value)
    }

    function handleChangeGameCode(ev) {
        setGameCode(ev.target.value)
    }

    function createRoom() {
        history.push({
            pathname: `/lobby`,
            state: {
                username: username,
                characterIndex: characterIndex,
                gameCode: gameCode,
                roomOwner: true
            }
        });
    }

    async function joinRoom() {
        Toast.loading("Loading ...");
        const socket = dataService.createSocket()
        await dataService.checkForRoom(socket, props.params ?? gameCode, function (response) {
            console.log(response)
            Toast.hide();
            if (!response) {
                Toast.fail("Erreur cette partie n'existe pas", 2000);
            } else {
                history.push({
                    pathname: `/lobby`,
                    state: {
                        username: username,
                        characterIndex: characterIndex,
                        gameCode: gameCode,
                        roomOwner: false
                    }
                });
            }
        })
    }

    function changeCharacterIndex(value) {
        setCharacterIndex(value)
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
                <button onClick={props.onHide} type="button" className="close">
                    ×
                </button>
                <h4 id="h4-modal">Je choisis mon avatar</h4>

                <div className="caroussel">
                    <Carousel changeCharacterIndex ={changeCharacterIndex}/>
                </div>
                <InputGroup className="mb-3" id="username">
                    <FormControl
                        value={username}
                        onChange={handleChange}
                        placeholder="Pseudo"
                        aria-label="Username"
                        aria-describedby="basic-addon1"/>
                </InputGroup>
                <div id="character-counter">{(username.length > 0)
                        ? <span>{username.length}
                                / 15</span>
                        : null}</div>
                <br/> {((username.length >= 3 && username.length <= 15) && gameCode.length == 0)
                    ? <Button onClick={createRoom} variant="success" id="create-game-btn">Créer une partie</Button>
                    : <Button disabled variant="success" id="create-game-btn">Créer une partie</Button>}
                <InputGroup className="mb-3" id="join-game-btn">
                    <InputGroup.Prepend>
                        {(gameCode.length >= 20 && username.length >= 3)
                            ? <Button onClick={joinRoom} variant="success" id="join-game-btn2">Rejoindre une partie</Button>
                            : <Button disabled variant="success" id="join-game-btn2">Rejoindre une partie</Button>}
                    </InputGroup.Prepend>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">#</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-describedby="basic-addon1"
                        placeholder="Code de la partie"
                        value={gameCode}
                        onChange={handleChangeGameCode}/>
                </InputGroup>
            </Modal.Body>
        </Modal>
    );

}

export default LobbyModal
