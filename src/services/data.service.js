import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:4001";

const createSocket = () => {
    return socketIOClient(ENDPOINT)
}

const createRoom = (socket, username, characterIndex) => {
    socket.emit("create-room", [username, characterIndex, 1])
}

const joinRoom = (socket, gameCode, username, characterIndex) => {
    console.log("join")
    socket.emit("request-join", [gameCode, username, characterIndex, 0])
}

const checkForRoom = async (socket, gameCode, callback) => {
    return await socket.emit("check-for-room", [gameCode], 
        response => {callback(response)})
}

const getRoomInfo = (socket, gameCode) => {
    socket.emit("GetRoomInfo", gameCode)
}

export default {
    createSocket,
    createRoom,
    joinRoom,
    checkForRoom,
    getRoomInfo,
}