// TODO: Work on the data model for the Cloud Firestore

/**
 * Dummy data used on the Email Screen.
 * Data model subject to change depending on future changes.
 */
export const DUMMY_EMAILS = [
  {
    id: "e1",
    email: "test@test.com",
    name: "Testy Tester",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia unde assumenda ad eveniet impedit molestiae repellat natus harum porro, fugit cumque iste molestias, tempore sed labore ipsa expedita saepe facere.",
    size: "3x4",
    placement: "Right forearm",
    budget: "400",
    images: [
      "https://media.istockphoto.com/id/1367685099/vector/red-poppy-flower-hand-drawn-illustration-vintage-and-antique-flowers-red-field-poppy-flower.jpg?s=612x612&w=0&k=20&c=lqsQbq6ZVAjhMLxX_nkdzaLMkJGuLZShBVoNOgrUY9M=",
      "https://i.redd.it/agmpul8a1lf11.jpg",
    ],
  },
  {
    id: "e2",
    email: "luffy@test.com",
    name: "Monkey D",
    description: "I decided to be Pirate King. I don't care if I die for it.",
    size: "5X8",
    placement: "Upper Back",
    budget: "650",
    images: [
      "https://m.media-amazon.com/images/I/61EEFbFD68S.jpg",
      "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/05/24/1048085296.jpg",
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/one-piece-wanted-poster-whitebeard-niklas-andersen.jpg",
    ],
  },
  {
    id: "e3",
    email: "gojo@test.com",
    name: "Satoru Gojo",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    size: "6X6",
    placement: "Left leg",
    budget: "750",
    images: [
      "https://www.hindustantimes.com/ht-img/img/2023/07/27/1600x900/Jujutsu_Kaisen_1690482062987_1690482063336.png",
      "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/07/11/jujutsu-kaisen-season-2-op.jpeg",
      "https://imgix.ranker.com/list_img_v2/15950/3255950/original/3255950?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355",
    ],
  },
  {
    id: "e4",
    email: "goku@test.com",
    name: "Son Goku",
    description: "Call me Kakarot",
    size: "8X4",
    placement: "Right Quad",
    budget: "1000",
    images: [
      "https://staticg.sportskeeda.com/editor/2022/01/5a341-16426304912639-1920.jpg",
      "https://media.comicbook.com/2021/01/dragon-ball-super-manga-68-spoilers-vegeta-godly-destruction-pow-1253952.jpeg?auto=webp",
      "https://static.wikia.nocookie.net/dragonball/images/7/7b/Gogeta_Base_Full.jpg/revision/latest/scale-to-width-down/1200?cb=20191027075547",
      "https://cdn.vox-cdn.com/thumbor/lS94wYiiexjGcCeAZ0SG3m039aY=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13599283/_Still004.jpg",
    ],
  },
];

// TODO: Move this somewhere else???
export interface RankedProps {
  messageId: string;
  rank: 1 | 2 | 3;
}

export const DUMMY_RANKED: RankedProps[] = [
  {
    messageId: "e1",
    rank: 2,
  },
  {
    messageId: "e2",
    rank: 3,
  },
];
