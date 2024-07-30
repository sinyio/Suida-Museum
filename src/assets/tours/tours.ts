import churchImg from "./images/church.png";
import monumentImg from "./images/monument.png";
import museum from "./images/museum.png";

interface ITour {
  id: string;
  title: string;
  description: string;
  img: string;
  coords?: number[];
}

const tours: ITour[] = [
  {
    id: "1",
    title: "Памятник Арине Родионовне",
    description:
      "Памятник, посвященный Арине Родионовне, любимой няне Александра Сергеевича Пушкина, которая сыграла важную роль в его воспитании и творческом становлении.",
    img: monumentImg,
    coords: [59.473625, 30.121507],
  },
  {
    id: "2",
    title: "Воскресенская церковь",
    description:
      "Воскресенская церковь, в которой венчались родители великого поэта, Сергей Львович Пушкин и Надежда Осиповна Ганнибал. Это место хранит память о значимых событиях в жизни семьи Пушкиных.",
    img: churchImg,
    coords: [59.469169, 30.118928],
  },
  {
    id: "3",
    title: "Музей-усадьба",
    description:
      "Музей усадьбы представляет собой уникальное собрание экспонатов, связанных с жизнью и творчеством Александра Пушкина и его семьи. Здесь вы сможете погрузиться в атмосферу той эпохи и узнать больше о быте дворянского рода.",
    img: museum,
  },
];

export default tours;
