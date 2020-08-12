import { ADD_FEATURE } from '../actions/baseCarActions'
import { REMOVE_FEATURE } from '../actions/carFeaturesActions'

export const initialCarState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    }
}

export const carReducer = (state = initialCarState, action) => {
    switch(action.type) {
      case ADD_FEATURE:
        console.log(state.car.features)
        return {
          ...state,
          car: {
            ...state.car,
            features: [...state.car.features, action.payload]
          }
        }
        case REMOVE_FEATURE:
          return state
      default:
        return state
    }
}