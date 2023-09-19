// TODO: Work on the data model for the Cloud Firestore
// TODO: Consolidate DUMMY DATA into one const that can be used throughout all Screens

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
    budget: 400,
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
    budget: 650,
    images: [
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fb-a-i-o-r-e-t-t-o%2Fart%2FMonkey-D-Luffy-Gear-5-UPDATED-912797420&psig=AOvVaw0-VFae5qHwXbD9RKoJJS3X&ust=1693617672698000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjt4M-fiIEDFQAAAAAdAAAAABAE",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cbr.com%2Fone-piece-luffy-gear-5-laugh-meaning%2F&psig=AOvVaw0-VFae5qHwXbD9RKoJJS3X&ust=1693617672698000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjt4M-fiIEDFQAAAAAdAAAAABAT",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.redbubble.com%2Fi%2Fsticker%2FGear-5-Monkey-D-luffy-by-SevenYero%2F141676301.EJUG5&psig=AOvVaw0-VFae5qHwXbD9RKoJJS3X&ust=1693617672698000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCLjt4M-fiIEDFQAAAAAdAAAAABAd",
    ],
    other1: "Zoro is a chad",
    other2: "Usopp is a punk bitch",
  },
];

/**
 * Dummy data used on the Home Screen.
 * Data model subject to change depending on future changes.
 * TODO: Change Dates to proper JS Date format to handle it better in code
 */
export const DUMMY_HOME = {
  unreadCount: 0,
  accepted: 50,
  rejected: 50,
  booking: true,
  bookingStartDate: "8/23/2023",
  bookingEndDate: "9/25/2023",
};

/**
 * Dummy data used on the Settings Screen.
 * Data model subject to change depending on future changes.
 */
export const DUMMY_SETTING = {
  limit: 0,
  startDate: "2023-09-01T00:00:00.000Z",
  endDate: "2023-09-08T00:00:00.000Z",
  parameters: [
    "email",
    "name",
    "description",
    "size",
    "placement",
    "budget",
    "images",
    "other1",
    "other2",
  ],
};
