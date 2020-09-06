const roomsApp = {
  data() {
    return {
      rooms: [
        {
          roomImg: "./images/room_1.webp",
          roomName: "Astro Hotel",
          roomPrice: 200,
          roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi molestiae ad error atque voluptates.",
        },
        {
          roomImg: "./images/room_2.webp",
          roomName: "Enchanted Garden",
          roomPrice: 250,
          roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi molestiae ad error atque voluptates.",
        },
        {
          roomImg: "./images/room_3.webp",
          roomName: "The Paradise",
          roomPrice: 300,
          roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi molestiae ad error atque voluptates.",
        },
        {
          roomImg: "./images/room_4.webp",
          roomName: "Luxor",
          roomPrice: 500,
          roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi molestiae ad error atque voluptates.",
        },
        {
          roomImg: "./images/room_5.webp",
          roomName: "Astro Hotel",
          roomPrice: 200,
          roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi molestiae ad error atque voluptates.",
        },
        {
          roomImg: "./images/room_6.webp",
          roomName: "Luxor",
          roomPrice: 200,
          roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi molestiae ad error atque voluptates.",
        },
        {
          roomImg: "./images/room_7.webp",
          roomName: "Luxor",
          roomPrice: 200,
          roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi molestiae ad error atque voluptates.",
        },
        {
          roomImg: "./images/room_8.webp",
          roomName: "The Paradise",
          roomPrice: 200,
          roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi molestiae ad error atque voluptates.",
        },
        {
          roomImg: "./images/room_9.webp",
          roomName: "Astro Hotel",
          roomPrice: 200,
          roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi molestiae ad error atque voluptates.",
        },
        {
          roomImg: "./images/room_10.webp",
          roomName: "The Paradise",
          roomPrice: 200,
          roomDescription:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi molestiae ad error atque voluptates.",
        },
      ],
    };
  },
};

Vue.createApp(roomsApp).mount("#rooms");
