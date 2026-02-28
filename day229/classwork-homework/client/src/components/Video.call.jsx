import io from 'socket.io-client';
import { useEffect, useRef } from 'react';
import Peer from 'peerjs';

const VideoCall = ({roomId}) => {
  const myVideo = useRef(null);
  const peers = useRef({});
  const socket = useRef(null);

  useEffect(() =>{
    socket.current = io.connect("http://localhost:3000")
    const myPeer = new Peer(undefined , {
      host: "localhost",
      port: "3001"
    })
    
    myPeer.on("open" , id => {
      socket.current.emit("join-room" , roomId , id)
    })
    navigator.mediaDevices.getUserMedia({video: true , audio: true})
      .then(stream => {
        myVideo.current.srcObject = stream
        myVideo.current.play()
      
        myPeer.on("call" , call => {
          call.answer(stream)
          const video = document.createElement("video")
          call.on("stream" , userVideoStream => {
            addVideoStream(video , userVideoStream)
          })
          
          socket.current.on("user-connected" , userId =>{
            connectToNewUser(userId , stream ,  myPeer)
          })
          socket.current.on("user-disconnected" , userId =>{
            if(peers.current[userId]) peers.current[userId].close()
          })
        })

      })

    
    myPeer
  } , [roomId])
}
