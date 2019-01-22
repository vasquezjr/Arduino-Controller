import axios from 'axios';

const INITIAL_STATE = {
  current: '',
  color: [{White: 'OFF'}, {Yellow: 'OFF'}],
};

export const SET_LIGHT = 'SET_LIGHT'

export const setLight = (color, lightIndex) => {
  return {
    type: SET_LIGHT,
    payload: lightIndex,
    color: color,
    
  }
}

const lightReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_LIGHT':
      // const {current, color} = state;
      // const updateColor = { ...color, [action.color]: action.value}
      // const newState = {current, color: updateColor}
      // let updateColor = {...state.color};
      // updateColor[Object.keys(action.color)] = action.value; 
      // return {...state, color: {...state.color, ...action.color}}
      //return {...state, color: {...state.color, ...updateColor}}
      let updateColor = [...state.color];
      updateColor[action.payload] = action.color;
      return {...state, color: [...updateColor]};
    default:
      return state;
  }
};

export const toggleLight = (color, index) => {
  return async dispatch => {
    try {
      const lightUrl = `http://192.168.1.15:1880/${color}-light`
      const response = await axios.get(lightUrl)
      let action = null
      if (response.data) {
        action = setLight({[color]: 'ON'}, index);
      } else {
        action = setLight({[color]: 'OFF'}, index);
      }
      dispatch(action);
    } catch (error) {
      console.error('Toggle Light', color, index);
    }
  }
}

export default lightReducer;
