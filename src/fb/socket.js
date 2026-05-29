import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    credentials: true,
  },
});

export function getReceiverSocketId(userId) {
 return userSocketMap[userId]; // get the socket id for the user
}

// used to store online users
const userSocketMap = {}; // {[userid]: socketid} //userid is coming from the database

io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  const userId = socket.handshake.query.userId; // get the userId from the query params
  if (userId) 
    userSocketMap[userId] = socket.id; // store the socket id for the user

    //send the online users to the client
    // io.emit() is used to send events to all the connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap)); // send the online users to all the connected clients

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    delete userSocketMap[userId]; // remove the socket id for the user
    io.emit("getOnlineUsers", Object.keys(userSocketMap)); // send the online users to all the connected clients
  });
})
 
export { io, app, server };
