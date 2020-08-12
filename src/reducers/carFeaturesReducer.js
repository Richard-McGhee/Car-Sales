import { REMOVE_FEATURE } from '../actions/carFeaturesActions'

export const initialFeaturesState = {
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ]
}

export const featuresReducer = (state = initialFeaturesState, action) => {
    switch(action.type) {
        case REMOVE_FEATURE:
            return {
                ...state,
                additionalFeatures: state.additionalFeatures.filter((item) => {
                    if(item.id === action.payload.id){
                    return !item
                    } else {
                        return item
                    }
                })
            }
        default:
            return state
    }
}