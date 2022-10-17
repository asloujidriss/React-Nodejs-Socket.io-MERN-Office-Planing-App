
const io = require("socket.io")(8900, {
    cors: {
      origin: "http://localhost:3000",
    },
  });
  
  let users = [];
  
  const addUser = (userId, socketId, xImg,yfirstname,zlastname) => {
    !users.some((user) =>
     user.userId === userId && user.image === xImg && user.firstname === yfirstname && user.lastname === zlastname) &&
      users.push({ userId, socketId, xImg, yfirstname,zlastname});
  };
  console.log(users)

  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };
  const getUser = (zlastname,yfirstname,userId, xImg) => {
    return users.find((user) =>
     user.userId === userId && user.image === xImg && user.firstname === yfirstname && user.lastname === zlastname
       );

  };
  io.on("connection", (socket) => {
    //when ceonnect
    console.log("a user connected.");
  
    //take userId and socketId from user
    socket.on("addUser", (userId,xImg,yfirstname,zlastname) => {
      addUser(userId,socket.id,xImg,yfirstname,zlastname);
      io.emit("getUsers", users);
    });
  
    //send and get message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
      const user = getUser(receiverId);
      io.to(user?.socketId).emit("getMessage", {
        senderId,
        text,
      });
    });
  
    //when disconnect
    socket.on("disconnect", () => {
      console.log("a user disconnected!");
      removeUser(socket.id);
      io.emit("getUsers", users);
    });
  });