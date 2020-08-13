import { combineReducers } from 'redux'
import { carReducer } from './baseCarReducer'
import { featuresReducer } from './carFeaturesReducer'

export const rootReducer = combineReducers({
    carReducer,
    featuresReducer
})