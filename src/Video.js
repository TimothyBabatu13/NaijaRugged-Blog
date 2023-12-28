import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import web3App from "./assets/3d multiplayer game.jpg";
import firebase from "./assets/firebase.jpg";

const Video = [
    {
        author: "",
        title: "Mr Robots",
        img: web3App,
        timePosted: "12:40",
        voteNum: 1,
        id: 0,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto sequi tempora, voluptatum voluptas vel voluptates ex corporis culpa omnis nemo quaerat, assumenda modi sint molestiae! Veniam doloremque provident impedit cumque enim, temporibus, facilis voluptatibus accusantium totam ut quo quis mollitia nostrum soluta nihil libero ipsam odit similique unde incidunt consequatur! Libero earum expedita, eius laudantium animi inventore doloribus nobis praesentium corporis id nulla quidem ad omnis dolore ducimus. Ipsum ut dignissimos corrupti praesentium nesciunt temporibus voluptatum, fugiat laboriosam eveniet quia aliquid animi, fugit vel asperiores eum eos repellendus ea odit dolore voluptate quidem veniam, sequi ipsam. Magnam, ea ratione.",
        link: ""
    },
    {
        author: "FreeCodeCamp",
        title: "Firebase -- full course",
        img: firebase,
        timePosted: "12:40",
        type: "",
        voteNum: 1,
        id: 1,
        dec: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto sequi tempora, voluptatum voluptas vel voluptates ex corporis culpa omnis nemo quaerat, assumenda modi sint molestiae! Veniam doloremque provident impedit cumque enim, temporibus, facilis voluptatibus accusantium totam ut quo quis mollitia nostrum soluta nihil libero ipsam odit similique unde incidunt consequatur! Libero earum expedita, eius laudantium animi inventore doloribus nobis praesentium corporis id nulla quidem ad omnis dolore ducimus. Ipsum ut dignissimos corrupti praesentium nesciunt temporibus voluptatum, fugiat laboriosam eveniet quia aliquid animi, fugit vel asperiores eum eos repellendus ea odit dolore voluptate quidem veniam, sequi ipsam. Magnam, ea ratione.",
        link: ""
    },
    {
        author: "Web Dev Simplified",
        title: "Learn useCallback In 8 Minutes",
        img: img3,
        timePosted: "12:40",
        type: "Album",
        voteNum: 1,
        id: 2,
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto sequi tempora, voluptatum voluptas vel voluptates ex corporis culpa omnis nemo quaerat, assumenda modi sint molestiae! Veniam doloremque provident impedit cumque enim, temporibus, facilis voluptatibus accusantium totam ut quo quis mollitia nostrum soluta nihil libero ipsam odit similique unde incidunt consequatur! Libero earum expedita, eius laudantium animi inventore doloribus nobis praesentium corporis id nulla quidem ad omnis dolore ducimus. Ipsum ut dignissimos corrupti praesentium nesciunt temporibus voluptatum, fugiat laboriosam eveniet quia aliquid animi, fugit vel asperiores eum eos repellendus ea odit dolore voluptate quidem veniam, sequi ipsam. Magnam, ea ratione.",
        link: ""
    },
    {
        author: "Web Dev Simplified",
        title: "Learn useState In 8 Minutes",
        img: img4,
        timePosted: "12:40",
        type: "Album",
        voteNum: 1,
        id: 3,
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto sequi tempora, voluptatum voluptas vel voluptates ex corporis culpa omnis nemo quaerat, assumenda modi sint molestiae! Veniam doloremque provident impedit cumque enim, temporibus, facilis voluptatibus accusantium totam ut quo quis mollitia nostrum soluta nihil libero ipsam odit similique unde incidunt consequatur! Libero earum expedita, eius laudantium animi inventore doloribus nobis praesentium corporis id nulla quidem ad omnis dolore ducimus. Ipsum ut dignissimos corrupti praesentium nesciunt temporibus voluptatum, fugiat laboriosam eveniet quia aliquid animi, fugit vel asperiores eum eos repellendus ea odit dolore voluptate quidem veniam, sequi ipsam. Magnam, ea ratione.",
        link: ""
    },
    {
        author: "Web Dev Simplified",
        title: "Learn useContext In 8 Minutes",
        img: img5,
        timePosted: "12:40",
        voteNum: 1,
        id: 4,
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto sequi tempora, voluptatum voluptas vel voluptates ex corporis culpa omnis nemo quaerat, assumenda modi sint molestiae! Veniam doloremque provident impedit cumque enim, temporibus, facilis voluptatibus accusantium totam ut quo quis mollitia nostrum soluta nihil libero ipsam odit similique unde incidunt consequatur! Libero earum expedita, eius laudantium animi inventore doloribus nobis praesentium corporis id nulla quidem ad omnis dolore ducimus. Ipsum ut dignissimos corrupti praesentium nesciunt temporibus voluptatum, fugiat laboriosam eveniet quia aliquid animi, fugit vel asperiores eum eos repellendus ea odit dolore voluptate quidem veniam, sequi ipsam. Magnam, ea ratione.",
        link: ""
    },
    {
        author: "Web Dev Simplified",
        title: "Temptation",
        img: img1,
        timePosted: "12:40",
        type: "",
        voteNum: 19,
        id: 5,
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto sequi tempora, voluptatum voluptas vel voluptates ex corporis culpa omnis nemo quaerat, assumenda modi sint molestiae! Veniam doloremque provident impedit cumque enim, temporibus, facilis voluptatibus accusantium totam ut quo quis mollitia nostrum soluta nihil libero ipsam odit similique unde incidunt consequatur! Libero earum expedita, eius laudantium animi inventore doloribus nobis praesentium corporis id nulla quidem ad omnis dolore ducimus. Ipsum ut dignissimos corrupti praesentium nesciunt temporibus voluptatum, fugiat laboriosam eveniet quia aliquid animi, fugit vel asperiores eum eos repellendus ea odit dolore voluptate quidem veniam, sequi ipsam. Magnam, ea ratione.",
        link: ""
    }
];



let popularSong = [
    {
        author: "Asake",
        title: "2:30",
        img: "Images/1641602311795.jpg",
        timePosted: "12:40",
        album: false,
        link: "dj.mp3"
    },
    {
        author: "Omah Lay",
        title: "Soso",
        img: "Images/1641602361529.jpg",
        timePosted: "12:40",
        album: false,
        link: "dj.mp3"
    },
    {
        author: "Rema",
        title: "Soundgasm",
        img: "Images/1641602395716.jpg",
        timePosted: "12:40",
        album: false,
        link: "dj.mp3"
    },
    {
        author: "Rema",
        title: "Charm",
        img: "Images/1641602432202.jpg",
        timePosted: "12:40",
        album: false,
        link: "dj.mp3"
    },
    {
        author: "Davido",
        title: "Temptation",
        img: "Images/1643210649558.jpg",
        timePosted: "12:40",
        album: true,
        link: "dj.mp3"
    }
]

export default Video;