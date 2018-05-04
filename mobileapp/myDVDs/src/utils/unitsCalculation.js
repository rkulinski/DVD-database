import { Dimensions } from 'react-native';


const { width, height } = Dimensions.get('window');
const units = {
  vw: width/100,
  vh: height/100,
  vmin: undefined,
  vmax: undefined
};

units.vmin = Math.min(units.vw, units.vh);
units.vmax = Math.max(units.vw, units.vh);

export default units;
