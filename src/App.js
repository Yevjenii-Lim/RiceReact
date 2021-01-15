import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import HeaderContainer from './components/Header/HeaderContainer';
import Menu from './components/Menu/Menu';
// import Rolls from './components/Menu/Rolls';
import LoaderContainer from './components/MenuAndLoader/Loader';
import MobileMenuContainer from './components/MenuAndLoader/MobileMenu';
import RollsContainer from './components/Products/RollsContainer';
import CartPage from './components/ShopingCart/Cart';
import SwiperComponent from './components/Swiper';


function App() {
  return (
    <>
    <BrowserRouter>
   <LoaderContainer></LoaderContainer>
   <MobileMenuContainer></MobileMenuContainer>
    <HeaderContainer></HeaderContainer>
    <Route exact path="/"><SwiperComponent></SwiperComponent></Route>
    <Route exact path="/"> <Menu></Menu> </Route>
    <Route exact path="/cart"><CartPage></CartPage></Route>
    <Route exact path='/rolls'> <RollsContainer></RollsContainer> </Route>
   
   </BrowserRouter>
   </>
  );
}

export default App;
