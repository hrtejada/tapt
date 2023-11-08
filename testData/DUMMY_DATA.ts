// TODO: Work on the data model for the Cloud Firestore

import { OPTIONS } from "../constants/words";

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
    other1:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia.",
    other2: "Lorem ipsum, dolor sit amet consectetur.",
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
    other1: "Zoro is a chad",
    other2: "Usopp is a punk bitch",
  },
];

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

/**
 * Dummy User data.
 *
 * Will try to represent a more realistic data model for the app
 * TODO: Determine if we need to incorporate Ranked into this or have it be separate
 */
export const DUMMY_USER_1 = {
  id: "u1",
  unreadCount: 0, // NOTE - We'll get this in realtime from the GMAIL API
  accepted: 50,
  rejected: 50,
};
