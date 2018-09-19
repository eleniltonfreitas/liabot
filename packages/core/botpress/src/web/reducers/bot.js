import { handleActions } from 'redux-actions'

import { botInfoReceived, botChanged } from '~/actions'

const defaultState = {}

const reducer = handleActions(
  {
    [botInfoReceived]: (state, { payload }) => ({ ...payload }),
    [botChanged]: (state, { payload }) => ({ ...payload })
  },
  defaultState
)

export default reducer
