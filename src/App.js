import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import BotomNav from './components/botomNav/BotomNav';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import RiceNudles from './components/Menu/RiceNudless';
import Rolls from './components/Menu/Rolls';
import Sets from './components/Menu/Sets';
import Soup from './components/Menu/Soup';
import MobileMenuContainer from './components/MenuAndLoader/MobileMenu';
import ItemCart from './components/Products/itemCart';
import Cart from './components/ShopingCart/Cart';
import SwiperComponent from './components/Swiper';




function App() {
  
  let [menu, setMenu] = useState([])    
  let [order, setOrder] = useState([])
  
  let addAmount = (id, amount) => {
    if(amount < 1) return
    let itemIndex = order.findIndex(i => i.id === id)
    order[itemIndex].amount = amount
    setOrder([...order])
  }
  
  let addToCart = (item) => {
    let itemIndex = order.findIndex(i => i.id === item.id)
    if (itemIndex != -1 && order.length > 0) {
      if (window.confirm(`Уже есть ${item.title} в корзине добавить количество?`)){
        order[itemIndex].amount += 1
      }
    }else {
      setOrder([...order, item])
    }
    
  }
  let products = (type) => {
      if (menu.length === 0) return null
    
    return menu.filter(i => i.type === type)
  }

  let deleteFromOrder = (id) => {
    let index = order.findIndex(i => i.id === id)
    let test = [...order]
    test.splice(index, 1)
    setOrder([...test])
  }

  useEffect( () => {
    let request = async () => {
        let data = await axios.get("https://rice-api-flask.herokuapp.com")
        setMenu(data.data.all_items)

    };

    try {
      console.log("requesr")
       request(); 
    } catch (e) {
      console.log("catsh");
      console.log(e);
    }
  }, []);

// console.log(menu)
  return (
    <>
    <BrowserRouter>
   {/* <LoaderContainer></LoaderContainer> */}
   <MobileMenuContainer></MobileMenuContainer>
    {/* <HeaderContainer></HeaderContainer> */}
    <Header></Header>
    <Route exact path="/"><SwiperComponent></SwiperComponent></Route>
    <Route exact path="/"> <Menu menu={menu}></Menu> </Route>
    <Route exact path="/cart"> <Cart order={order} addAmount={addAmount} deleteFromOrder={deleteFromOrder}></Cart> </Route>
    <Route exact path='/rolls'> <Rolls rolls={products("roll")}></Rolls> </Route>
    <Route exact path='/sets'> <Sets sets={products("set")}></Sets> </Route>
    <Route exact path='/item/:type?/:productId?'> <ItemCart addToCart={(order) => addToCart(order)}></ItemCart> </Route>
    <Route exact path='/rice'> <RiceNudles riceNoodles={products("nudels")}></RiceNudles> </Route>
    <Route exact path='/soup'> <Soup soups={products("soup")}></Soup> </Route>
    <BotomNav></BotomNav>
   {/* <CartPop show={popUpReducer.cartPopUp}></CartPop> */}
   {/* <PopUpContainer></PopUpContainer> */}
   </BrowserRouter>
   </>
  );
}

export default App;
