import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux'
import { addFeature } from './actions/baseCarActions'
import { removeFeature } from './actions/carFeaturesActions'

const App = (props) => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} addFeature={props.addFeature} removeFeature={props.removeFeature} />
        <AddedFeatures car={props.car} addFeature={props.addFeature} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature} removeFeature={props.removeFeature} />
        <Total car={props.car} additionalPrice={props.additionalPrice} addFeature={props.addFeature} removeFeature={props.removeFeature} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.carReducer.car,
    additionalPrice: state.carReducer.additionalPrice,
    additionalFeatures: state.featuresReducer.additionalFeatures
  }
}
export default connect(mapStateToProps, { addFeature, removeFeature })(App);
