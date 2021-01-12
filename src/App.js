import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import LoaderContainer from './components/MenuAndLoader/Loader';
import MobileMenuContainer from './components/MenuAndLoader/MobileMenu';
import SwiperComponent from './components/Swiper';

function App() {
  return (
    <>
   <HeaderContainer></HeaderContainer>
   <LoaderContainer></LoaderContainer>
   <MobileMenuContainer></MobileMenuContainer>
   <SwiperComponent></SwiperComponent>
   </>
  );
}

export default App;
