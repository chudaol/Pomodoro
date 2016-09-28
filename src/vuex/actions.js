//actions.js
import * as types from './mutation_types'

export const start = ({ dispatch }) => {
  dispatch(types.START)
}
export const pause = ({ dispatch }) => {
  dispatch(types.PAUSE)
}
export const stop = ({ dispatch }) => {
  dispatch(types.STOP)
}
export const toggleSound = ({ dispatch }) => {
  dispatch(types.TOGGLE_SOUND)
}
