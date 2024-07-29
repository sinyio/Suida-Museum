import churchImg from './images/church.png'
import monumentImg from './images/monument.png'
import museum from './images/museum.png'

interface ITour {
  id: string;
  title: string;
  description: string;
  img: string
}

const tours: ITour[] = [
  {
    id: "1",
    title: "Музей-усадьба",
    description: "Сам музей усадьбы представляет собой уникальное собрание экспонатов, связанных с жизнью и творчеством Александра Пушкина и его семьи. Здесь вы сможете погрузиться в атмосферу той эпохи и узнать больше о быте дворянского рода.",
    img: museum
  },
  {
    id: "2",
    title: "Памятник Арине Родионовне",
    description: "Памятник, посвященный Арине Родионовне, любимой няне Александра Сергеевича Пушкина, которая сыграла важную роль в его воспитании и творческом становлении.",
    img: monumentImg
  },
  {
    id: "3",
    title: "Воскресенская церковь",
    description: "Воскресенская церковь, в которой венчались родители великого поэта, Сергей Львович Пушкин и Надежда Осиповна Ганнибал. Это место хранит память о значимых событиях в жизни семьи Пушкиных.",
    img: churchImg
  }
]

export default tours