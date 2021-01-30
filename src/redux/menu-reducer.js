import kali from "../assets/images/kali-crab.jpeg";
import dakota from "../assets/images/dakota.jpg";
import setRice from "../assets/images/rice-max.jpeg";
import udonChiken from "../assets/images/udon-chiken.jpg";
import riceShrimp from "../assets/images/rice-shrimp.jpg";
import udonSea from "../assets/images/udon-sea.jpg";
import chikenTiryaki from "../assets/images/chiken-tiryaki.jpg";


// import { act } from "react-dom/test-utils";
// import { getItem } from "./item-reducer";
const OPEN_POP = "OPEN_POP"
const GET_PRODUCT = "GET_PRODUCT"


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
        "Лосось, угорь, креветка, авокадо, яп майонез, икра тобико, икра лососьВес: 265 грамм.",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "Дакота",
      price: 145,
      id: 3,
      photo: dakota,
      desc:
        "Лосось, угорь, креветка, авокадо, яп майонез, икра тобико, икра лососьВес: 265 грамм.",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "Дакота",
      price: 145,
      id: 4,
      photo: dakota,
      desc:
        "Лосось, угорь, креветка, авокадо, яп майонез, икра тобико, икра лососьВес: 265 грамм.",
        isModalOpen: false,
        amount : 1
    },
    
  ],
  sets: [
    {
      title: "Сет «Rice max»",
      price: 280,
      id: 5,
      photo: setRice,
      desc:
        "Акционная цена! Ролл Кокаин, Якудза, Оранж, сушими из лосося и тунца, Тигровый дракон, Икура и Дьябло",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "Сет «ВЕГАН»",
      price: 699,
      id: 6,
      photo: setRice,
      desc:
        "Aкционная цена! маки с огурцом, маки с авокадо, Ясай-маки (болгарский перец, помидор, авокадо, огурец, такуан, салатный лист), vegan-Калифорния в кунжуте (авокадо, огурец, болгарский перец, такуан), гункан с чукой, 4 шт",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "Сет «ВЕГАН»",
      price: 699,
      id: 7,
      photo: setRice,
      desc:
        "кционная цена! маки с огурцом, маки с авокадо, Ясай-маки (болгарский перец, помидор, авокадо, огурец, такуан, салатный лист), vegan-Калифорния в кунжуте (авокадо, огурец, болгарский перец, такуан), гункан с чукой, 4 шт",
        isModalOpen: false,
        amount : 1
    },
  ],
  riceNoodles: [
    {
      title: "Удон с курицей",
      price: 58,
      id: 8,
      photo: udonChiken,
      desc: "Лапша Удон, Куринное филе ,Соус якитори, Овощи....",
      isModalOpen: false,
      amount : 1
    },
    {
      title: "Рис, курица, тигровые креветки",
      price: 109,
      id: 9,
      photo: riceShrimp,
      desc:
        "Рис с курицей и тигровыми креветками.",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "Удон с морепродуктами",
      price: 65,
      id: 10,
      photo: udonSea,
      desc:
        "Удон, морской коктейль.",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "Курица в соусе терияки",
      price: 75,
      id: 11,
      photo: chikenTiryaki,
      desc:
        "куриное филе бедра, перец, цуккини, морковь, соус терияки. Вес: 200грамм",
        isModalOpen: false,
        amount : 1
    },
  ]
};

let menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_POP: {
      return state
    }
    case GET_PRODUCT: {
      let product = state.rolls.find(i => i.id === +action.id)
      // console.log(product)
      // console.log(action.id)
      if(product === undefined) {
        product = state.sets.find(i => i.id === +action.id)
        if(product === undefined) {
          product = state.riceNoodles.find(i => i.id === +action.id)
        }
      }

      return {
        ...state,
        product
      }
    }
    default: return state
  }
  // return state;
};


export const getProduct = (id) => ({type: GET_PRODUCT, id})
export const setModal = (id) => ({type: OPEN_POP, id})

export default menuReducer;
