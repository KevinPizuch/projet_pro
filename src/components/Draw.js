import React, {useRef, useEffect, useState} from 'react';
import DrawGameWordChoice from './DrawGameWordChoice'
import {InputGroup, FormControl, Button} from 'react-bootstrap';

const Draw = props => {
    const canvasRef = useRef(null);
    const colorsRef = useRef(null);
    const bounding = useRef(null);
    const messagesEndRef = useRef(null);
    const myTurn = useRef(false);
    const color = useRef("black");
    const lineWidth = useRef(8);
    const [roomInfo, setRoomInfo] = useState(null)
    const [socketInfo, setSocketInfo] = useState(null)
    const [gameInfo, setGameInfo] = useState(null)
    const [inputValue, setInputValue] = useState('')
    const [chatFeed, setChatFeed] = useState(null)
    const [modalShow, setModalShow] = useState(false)
    const [secretWord, setSecretWord] = useState(null)
    const [timeDraw, setTimeDraw] = useState(0)


    useEffect(() => {
        initDraw()
        props.socket.emit("GetRoomInfo", props.roomID)
        props.socket.emit("GetMyData", function(response){
            setSocketInfo(response)
            if (response.isMyTurn){
                setModalShow(true)
            }
        })
    }, []);


    props
        .socket
        .on("GetRoomInfo", function(data){
            setRoomInfo(data)
    })

    // props.socket.on("GetMyData", data => {
    //     setSocketInfo(data)
    //     //console.log("my turn", data.isMyTurn)
    //     // 
    // })

    const initDraw = () =>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const current = {
          };

        let drawing = false;

        const drawLine = (x0, y0, x1, y1, color, lineWidth, emit) => {
            context.beginPath();
            context.moveTo(x0-475, y0-140);
            context.lineTo(x1-475, y1-140);
            context.strokeStyle = color
            context.lineWidth = lineWidth;
            context.lineJoin = context.lineCap = 'round';
            context.stroke();
            context.closePath();

            if (!emit) {
                return;
            }
            const w = canvas.width;
            const h = canvas.height;


            props
                .socket
                .emit('drawing', {
                    x0: x0 / w,
                    y0: y0 / h,
                    x1: x1 / w,
                    y1: y1 / h,
                    color,
                    lineWidth
                });
        };

        // ---------------- mouse movement --------------------------------------

        const onMouseDown = (e) => {
            if(!myTurn.current) return

            drawing = true;
            current.x = e.clientX;
            current.y = e.clientY;
        };

        const onMouseMove = (e) => {
            if(!myTurn.current) return

            if (!drawing) {
                return;
            }
            drawLine(current.x, current.y, e.clientX, e.clientY, color.current, lineWidth.current, true);
            current.x = e.clientX;
            current.y = e.clientY;
        };

        const onMouseUp = (e) => {
            if(!myTurn.current) return

            if (!drawing) {
                return;
            }
            drawing = false;
            drawLine(current.x, current.y, e.clientX, e.clientY, color.current, lineWidth.current, true);
        };

        canvas.addEventListener('mousedown', onMouseDown, false);
        canvas.addEventListener('mouseup', onMouseUp, false);
        canvas.addEventListener('mouseout', onMouseUp, false);
        canvas.addEventListener('mousemove', onMouseMove, false);

        // -------------- make the canvas fill its parent component -----------------

        canvas.width = bounding.current.getBoundingClientRect().height;
        canvas.height = bounding.current.getBoundingClientRect().width


        // ----------------------- socket.io connection ----------------------------
        const onDrawingEvent = (data) => {
            const w = canvas.width;
            const h = canvas.height;
            drawLine(data.x0 * w, data.y0 * h, data.x1 * w, data.y1 * h, data.color, data.lineWidth);
        }
        
        props
            .socket
            .on('drawing', onDrawingEvent);
    }

    const handleChatInput = (ev) =>{
        setInputValue(ev.target.value)
    }

    const handleChatSubmit = () =>{
        props.socket.emit("drawChatInput", inputValue)
        setInputValue('')
    }

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
      }

    props
        .socket
        .on('getDrawChatContent', function(data){
            setChatFeed(data)
            scrollToBottom()
        })

   

    props
        .socket
        .on('counter', function (count) {
            console.log(count)
        });

    props.socket.on("myTurnToDraw", function(data){
        myTurn.current = true
    })
    

    props.socket.on("choosenWord", data =>{
        setSecretWord(data)
        props.socket.emit("startClockDraw")
    })

    props.socket.on('drawTime', data =>{
        setTimeDraw(data)
    })

    props.socket.on("drawTimeOver", data =>{
        myTurn.current = false
        props.socket.emit("GetMyData", function(response){
            setSocketInfo(response)
        })
        props.socket.emit("GetRoomInfo", props.roomID)
        props.socket.emit("GetMyData", function(response){
            setSocketInfo(response)
            if (response.isMyTurn){
                setModalShow(true)
            }
        })
        initDraw()

    })

    return (
        <div className="draw-main-container">
            <div className="draw-header-container">
                <div className="draw-header-time-round">
                    { timeDraw && (
                        "temps : " + timeDraw
                    )}
                </div>
                <div className="draw-header-secretword">
                   {secretWord && (socketInfo.isMyTurn
                    ? secretWord
                    : secretWord.replace(/[a-zA-Z0-9_]/g, '_')) }
                </div>
            </div>
            <div className="draw-body-container">
                <div className="draw-score-container">
                { roomInfo && (roomInfo.map((key, i) => 
                            <div className="draw-score-character-slot" 
                                key={key.socketID.toString()} 


                                style={key.isMyTurn 
                                    ? {backgroundColor:"green"}
                                    : i % 2 == 0 ? {backgroundColor:"rgba(0, 0, 0, 0.37)"} 
                                    : {backgroundColor:"rgba(0, 0, 0, 0.638)"}}>


                                <div className="draw-score-character-slot-name-score">
                                    <div><p style={key.socketID == props.socketID ? {color:"red"} : null}>{key.name}{key.socketID == props.socketID ? " (Vous)" : null}</p></div>
                                    <div><p>points: {key.points}</p></div>
                                </div>
                                <div className="draw-score-character-slot-avatar"> 
                                    <img src={`/images/svg/${key.charIndex}-character.svg`} />
                                </div>
                            </div>
                ))}
                </div>
                <div ref={bounding} className="draw-canvas-container">
                    <canvas ref={canvasRef} className="whiteboard"/>
                    { (roomInfo && socketInfo && socketInfo.isMyTurn) &&  (<div ref={colorsRef} className="colors">
                            <div className="color white" onClick={() => {color.current = "white"}}/>
                            <div className="color lightgray" onClick={() => {color.current = "lightgray"}} />
                            <div className="color red" onClick={() => {color.current = "red"}} />
                            <div className="color orange" onClick={() => {color.current = "orange"}} />
                            <div className="color yellow" onClick={() => {color.current = "yellow"}} />
                            <div className="color green" onClick={() => {color.current = "green"}} />
                            <div className="color lightskyblue" onClick={() => {color.current = "lightskyblue"}} />
                            <div className="color blue"  onClick={() => {color.current = "blue"}} />
                            <div className="color purple"  onClick={() => {color.current = "purple"}} />
                            <div className="color pink" onClick={() => {color.current = "pink"}} />
                            <div className="color brown" onClick={() => {color.current = "brown"}} />
                            <div className="color black" onClick={() => {color.current = "black"}} />
                            <div id="first-size" className="size 8" onClick={() => {lineWidth.current = 8}}>
                                <div className="size 8 size-xs-icon" onClick={() => {lineWidth.current = 8}}></div>
                            </div>
                            <div className="size 20" onClick={() => {lineWidth.current = 20}}>
                                <div className="size 20 size-m-icon" onClick={() => {lineWidth.current = 20}}></div>
                            </div>
                            <div className="size 40" onClick={() => {lineWidth.current = 40}}>
                                <div className="size 40 size-xl-icon" onClick={() => {lineWidth.current = 40}}></div>
                            </div>
                            <div className="tool white Erase" onClick={() => {color.current = "white"}}>
                            </div>
                        </div>)
                    }
                </div>
                    
                <div className="draw-chat-container">
                    <div className="draw-chat-content" >
                            { chatFeed && (chatFeed.map((key,i ) => 
                                <div key={i} className="draw-chat-line" style={i % 2 == 0 ? {backgroundColor:"rgba(0, 0, 0, 0.37)"} : {backgroundColor:"rgba(0, 0, 0, 0.638)"}}><p>{key.name} : {key.content}</p></div>
                            ))}
                            <div ref={messagesEndRef} />
                    </div>
                    <div className="draw-chat-input">
                        <InputGroup className="mb-3 draw-chat-input-content">
                            <FormControl
                            placeholder="Réponse"
                            value={inputValue}
                            onChange={handleChatInput}
                            />
                            <InputGroup.Append>
                            <Button variant="outline-secondary" onClick={handleChatSubmit}>Envoyer</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                </div>
            </div>
            <DrawGameWordChoice
				show={modalShow}
				onHide={() => setModalShow(false) }
                socket={props.socket}
			/>
        </div>
    );
};

export default Draw;