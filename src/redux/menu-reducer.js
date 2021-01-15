import kali from "../assets/images/kali.png";
import dakota from "../assets/images/dakota.jpg";
import setRice from "../assets/images/rice-max.jpeg";

let initialState = {
  rolls: [
    {
      title: "Калифорния в кунжуте с крабом ",
      price: 92,
      id: 1,
      photo: kali,
      desc: "Нежный сыр, огурец с мясом нежного краба...",
    },
    {
      title: "Дакота",
      price: 145,
      id: 2,
      photo: dakota,
      desc:
        "лосось, угорь, Креветка, авокадо, яп майонез, икра тобико, икра лососьВес: 265 грамм.",
    },
    {
      title: "Дакота",
      price: 145,
      id: 3,
      photo: dakota,
      desc:
        "лосось, угорь, Креветка, авокадо, яп майонез, икра тобико, икра лососьВес: 265 грамм.",
    },
    {
      title: "Дакота",
      price: 145,
      id: 4,
      photo: dakota,
      desc:
        "лосось, угорь, Креветка, авокадо, яп майонез, икра тобико, икра лососьВес: 265 грамм.",
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
    },
    {
      title: "Сет «ВЕГАН»",
      price: 699,
      id: 3,
      photo: setRice,
      desc:
        "кционная цена! маки с огурцом, маки с авокадо, Ясай-маки (болгарский перец, помидор, авокадо, огурец, такуан, салатный лист), vegan-Калифорния в кунжуте (авокадо, огурец, болгарский перец, такуан), гункан с чукой, 4 шт",
    },
  ],
};

let menuReducer = (state = initialState, action) => {
  return state;
};

export default menuReducer;
