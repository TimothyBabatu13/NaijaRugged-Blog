import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.jpg";
import IToldThem from "./assets/I_Told_Them.jpg";
import Jewels from "./assets/Music Files/Burna Boy - 12 Jewels (feat. RZA).mp3";
import cityBoy from "./assets/Music Files/Burna Boy - City Boys (1).mp3";

const Albums = [
    {
        author: "Omah Lay",
        title: "What Have We Done(WHWD)",
        img: img1,
        timePosted: "12:40",
        voteNum: 1,
        id: 0,
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, architecto sequi tempora, voluptatum voluptas vel voluptates ex corporis culpa omnis nemo quaerat, assumenda modi sint molestiae! Veniam doloremque provident impedit cumque enim, temporibus, facilis voluptatibus accusantium totam ut quo quis mollitia nostrum soluta nihil libero ipsam odit similique unde incidunt consequatur! Libero earum expedita, eius laudantium animi inventore doloribus nobis praesentium corporis id nulla quidem ad omnis dolore ducimus. Ipsum ut dignissimos corrupti praesentium nesciunt temporibus voluptatum, fugiat laboriosam eveniet quia aliquid animi, fugit vel asperiores eum eos repellendus ea odit dolore voluptate quidem veniam, sequi ipsam. Magnam, ea ratione.",
        tracks: [
            {
                name: "Godly",
                link: "",
                id: 0
            },
            {
                name: "Godly",
                link: "",
                id: 1
            },
        ]
    },
    {
        author: "Burna Boy",
        title: "I told them...",
        img: IToldThem,
        timePosted: "12:40",
        type: "",
        voteNum: 1,
        id: 1,
        desc: `Hailing from the eastern part of Nigeria, the award-winning superstar Burna Boy, an incredible artist contributes his unique
              talents, delivering scintillating verses that elevate this album to a new height. Burna Boy has proven that he has the ability
              to create chart-topping hits that resonate with audiences worldwide. The soundtracks are expected to showcase his growth as an
              artist while trying out new genre(Afro-fusion) and staying true to the signature sound that has made him a household name.
              So sit back, relaxt, and get ready to immerse yourself in the incredible world of I Told Them. This is an outstanding soundtrack 
              that will undoubtedly leave a lasting impression and establish itself as a standout release in industry.       
        `,
        tracks: [
            {
                name: "12 Jewels",
                link: Jewels,
                id: 0
            },
            {
                name: "City Boy",
                link: cityBoy,
                id: 1
            },
        ]
    },
    {
        author: "Omah Lay",
        title: "Boy Alone",
        img: img3,
        timePosted: "12:40",
        type: "Album",
        voteNum: 1,
        id: 2,
        desc: "Olojina otun lo far. No carry me for mind. But nowadays, tell them what they like to hear.",
        tracks: [
            {
                name: "Soso",
                link: "",
                id: 0
            },
            {
                name: "Safe Heaven",
                link: "",
                id: 1
            },
        ]
    },
    {
        author: "Omah Lay",
        title: "Boy Alone Deluxe",
        img: img4,
        timePosted: "12:40",
        type: "Album",
        voteNum: 1,
        id: 3,
        desc: "What is the reason you dont have peace of mind? Are you having fun or doing this to survive? Are you taking pictures of every memory of your life?",
        tracks: [
            {
                name: "Godly",
                link: "",
                id: 0
            },
            {
                name: "Imagine",
                link: "",
                id: 1
            },
        ]
    },
    {
        author: "Asake",
        title: "Work of Art",
        img: img5,
        timePosted: "12:40",
        voteNum: 1,
        id: 4,
        desc: "It's lonely at the top, ghen ghen ghen ghen ghen",
        tracks: [
            {
                name: "Mogbe",
                link: "",
                id: 0
            },
            {
                name: "Lonely at the top",
                link: "",
                id: 1
            },
        ]
    },
    {
        author: "Asake",
        title: "Mr Money with the vibe(MMWTV)",
        img: img1,
        timePosted: "12:40",
        type: "",
        voteNum: 19,
        id: 5,
        desc: "Organize, every other day I organize....",
        tracks: [
            {
                name: "organize",
                link: "",
                id: 0
            },
            {
                name: "Fireboy is mid, nothing you fit tell me",
                link: "",
                id: 1
            },
        ]
    }
]

export default Albums;