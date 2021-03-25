import {useEffect,useState} from "react";
import {Button, InputGroup, FormControl, Modal} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import dataService from '../services/data.service';
import Draw from './Draw'


const Lobby = props =>{
    const [roomInfo, setRoomInfo] = useState(undefined)
    const [socketInfo, setSocketInfo] = useState(undefined)
    const [socket, setSocket] = useState(undefined)
    const [round, setRound] = useState(0)
    const [roomID, setRoomID] = useState(undefined)
    const [socketID, setSocketID] = useState(undefined)
    const history = useHistory();

    useEffect(() => {
        if (!props.location.state){return history.push('/')}

        const socket = dataService.createSocket()
            
        if (props.location.state.roomOwner){
            dataService.createRoom(socket, props.location.state.username, props.location.state.characterIndex)
        }else{
            dataService.joinRoom(socket, props.location.state.gameCode, props.location.state.username, props.location.state.characterIndex)
        }

        socket.emit("GetMyData", function(response){
            setSocketInfo(response)
            
        })
        
        socket.on("basicInfo", data => {
            console.log("http://localhost:3000/lobby="+data.roomID)
            setRoomID(data.roomID)
            setSocketID(data.socketID)

            dataService.getRoomInfo(socket, props.location.state.gameCode ?? data.roomID)
            socket.emit("GetMyData", function(response){
                setSocketInfo(response)
                
            })
        }); 

        socket.on("GetRoomInfo", data => {
            setRoomInfo(data)
        })
        

        // socket.on("GetMyData", data => {
        //     setSocketInfo(data)
        // })

        socket.on("startDrawRoom", () => {
            setRound(1)
        })

        setSocket(socket)


        return () => {
            socket.emit("Quit", props.location.state.username)
        }
    }, [])

    function startGame() {
        socket.emit("startGame")
    }
    
    if(round == 0){
        return (
            <div className="Lobby-content">
                <div className="Lobby-container">
                    <div className="Lobby-params"></div>
                    <div className="Lobby-players">
                        <h4>Joueurs {roomInfo && roomInfo.length}/ 4</h4>
                        <div className="character-slot-container">
                        { roomInfo && (roomInfo.map((key) => 
                            <div className="character-slot" key={key.socketID.toString()}>
                            <p>{key.name} </p>
                            <img src={`/images/svg/${key.charIndex}-character.svg`} />
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                <div className="play-button">
                <Button variant="outline-dark" href={`http://localhost:3000/lobby=${roomID}`} target={"_blank"}>Partager la partie</Button><br/>
                {(socketInfo && socketInfo.isAdmin == 1) && (
                    <Button onClick={startGame} variant="outline-dark">lancer la partie </Button>
                )}
                </div>
            </div>
        )
    }else if(round == 1){
        return (
            <div className="draw-game-scene">
                <Draw
                    socket={socket}
                    roomID={roomID}
                    socketID={socketID}
                />
            </div>
        )}
    // }else if(round == 2){
    //     return (
    //         <Mime 

    //         />
    //     )
    // }else if(round ==3){
    //     return(
    //         <Impostor 
            
    //         />
    //     )
    // }
}

export default Lobby
