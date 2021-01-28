let initialState = {};

const GET_PRODUCT = "GET_PRODUCT"

let itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCT: {
        
        //   let product = state.rolls.find(i => i.id == action.id)
    
        //   console.log(action)
        //   console.log(state.rolls[1].id)
          return state
        }
        default: return state
      }
    
}


export const getItem = (product) => ({type: GET_PRODUCT, product})

export default itemReducer