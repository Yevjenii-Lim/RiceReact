import swiperItem from '../assets/images/swiper-item.png'
import swiperItem1 from '../assets/images/dark.jpeg'
let initialState = {
    images: [
        {photo:swiperItem, id:1},
        {photo: swiperItem1, id:2}
    ]
}

let swiperReducer = (state = initialState, action) => {
    switch (action.type) {


        default: return state
    }
}


export default swiperReducer