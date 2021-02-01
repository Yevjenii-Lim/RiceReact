import React from 'react';

import kali from "../assets/images/kali-crab.jpeg";
import dakota from "../assets/images/dakota.jpg";
import setRice from "../assets/images/rice-max.jpeg";
import udonChiken from "../assets/images/udon-chiken.jpg";
import riceShrimp from "../assets/images/rice-shrimp.jpg";
import udonSea from "../assets/images/udon-sea.jpg";
import chikenTiryaki from "../assets/images/chiken-tiryaki.jpg";
import soupKimchi from "../assets/images/soup-kimchi.jpg";
import soupMiso from "../assets/images/soup-miso.jpg";
import soupTom from "../assets/images/soup-tom.jpg";
import { SearchRedirect, } from "../components/Redirect";


// import { act } from "react-dom/test-utils";
// import { getItem } from "./item-reducer";
const OPEN_POP = "OPEN_POP"
const GET_PRODUCT = "GET_PRODUCT"
const SEARCH = "SEARCH"
const START_SEARCH = "START_SEARCH"
let random 

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
  ],
  soups: [
    {
      title: "Суп «Кимчи с тунцом»",
      price: 50,
      id: 12,
      photo: soupKimchi,
      desc:
        "Рыбный бульон, тунец, гриб шиитаке, соус ким-чи, яйцо Курин, перец болг, кабачек,редька маринов,возросли вакаме Вес: 300грамм",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "«Мисо широ с угрем»",
      price: 49,
      id: 13,
      photo: soupMiso,
      desc:
        "рыбный бульен, мисо паста, угорь, гриб шиитаке, водросли вакаме Вес: 300грамм",
        isModalOpen: false,
        amount : 1
    },
    {
      title: "Суп «Том-Ям»",
      price: 89,
      id: 14,
      photo: soupTom,
      desc:
        "рыбный бульен, кокосовое молоко, лосось, креветки, мидии, гриб шиитаке, соус ким-чи ,водросли вакаме. Вес: 300грамм",
        isModalOpen: false,
        amount : 1
    },
  ],
  search: '',
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
          if(product === undefined) {
            product = state.soups.find(i => i.id === +action.id)
          }
        }
      }

      return {
        ...state,
        product
      }
    }
    case SEARCH: {
      return {
        ...state,
        search: action.text
      }
    }
    case START_SEARCH: {
      let item = state.rolls.find(i => i.title == state.search)
      random = item.id
      return {
        ...state
      }
    }
    default: return state
  }
  // return state;
};


export const getProduct = (id) => ({type: GET_PRODUCT, id})
export const setModal = (id) => ({type: OPEN_POP, id})
export const chengeSearch = (text) => ({type: SEARCH, text})
export const startSearch = (text) => ({type: START_SEARCH, text})

export let searchThunkCreactor = (text) => {
  return dispatch => {
    dispatch(startSearch(text))
    console.log(random);
    SearchRedirect(random)
  }
}


export default menuReducer;
