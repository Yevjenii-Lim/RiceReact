import kali from "../assets/images/kali.png";
import dakota from "../assets/images/dakota.jpg";
import setRice from "../assets/images/rice-max.jpeg";
const OPEN_POP = "OPEN_POP"

let initialState = {
  rolls: [
    {
      title: "Калифорния в кунжуте с крабом ",
      price: 92,
      id: 1,
      photo: kali,
      desc: "Нежный сыр, огурец с мясом нежного краба...",
      isModalOpen: false,
      amount : 1
    },
    {
      title: "Дакота",
      price: 145,
      id: 2,
      photo: dakota,
      desc:
        "лосось, угорь, Креветка, авокадо, яп майонез, икра тобико, икра лососьВес: 265 грамм.",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "Дакота",
      price: 145,
      id: 3,
      photo: dakota,
      desc:
        "лосось, угорь, Креветка, авокадо, яп майонез, икра тобико, икра лососьВес: 265 грамм.",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "Дакота",
      price: 145,
      id: 4,
      photo: dakota,
      desc:
        "лосось, угорь, Креветка, авокадо, яп майонез, икра тобико, икра лососьВес: 265 грамм.",
        isModalOpen: false,
        amount : 1
    },
    
  ],
  sets: [
    {
      title: "Сет «Rice max»",
      price: 280,
      id: 4,
      photo: setRice,
      desc:
        "Акционная цена! Ролл Кокаин, Якудза, Оранж, сушими из лосося и тунца, Тигровый дракон, Икура и Дьябло",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "Сет «ВЕГАН»",
      price: 699,
      id: 3,
      photo: setRice,
      desc:
        "кционная цена! маки с огурцом, маки с авокадо, Ясай-маки (болгарский перец, помидор, авокадо, огурец, такуан, салатный лист), vegan-Калифорния в кунжуте (авокадо, огурец, болгарский перец, такуан), гункан с чукой, 4 шт",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "Сет «ВЕГАН»",
      price: 699,
      id: 5,
      photo: setRice,
      desc:
        "кционная цена! маки с огурцом, маки с авокадо, Ясай-маки (болгарский перец, помидор, авокадо, огурец, такуан, салатный лист), vegan-Калифорния в кунжуте (авокадо, огурец, болгарский перец, такуан), гункан с чукой, 4 шт",
        isModalOpen: false,
        amount : 1
    },
  ],
};

let menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_POP: {
      return {}
    }
    default: return state
  }
  // return state;
};


export const setModal = (id) => ({type: OPEN_POP, id})

export default menuReducer;
