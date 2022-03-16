import * as ACTION_TYPES from './types'
import type * as ACTIONS from './actions'
import { FetchingType, createDefault, createFetching, createSuccess, createError } from '../common';


type ValueOf<T> = T[keyof T];
export type ActionsType = ValueOf<{[k in keyof typeof ACTIONS]: ReturnType<typeof ACTIONS[k]>}>


export type initialStateType = {
	fetching:{
		loadActivity: FetchingType,
		loadActivityData: FetchingType,
		renderActivity: FetchingType,
		fireActivityEvent: FetchingType
	}
};

const initialState: initialStateType = {
	fetching:{
		loadActivity: createDefault(),
		loadActivityData: createDefault(),
		renderActivity: createDefault(),
		fireActivityEvent: createDefault()
	}
}


export const activityReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
	switch(action.type){
		case ACTION_TYPES.LOAD_ACTIVITY_REQUEST: return {
			...state,
			fetching: {
				...state.fetching,
				loadActivity: createFetching()
			}
		}
		case ACTION_TYPES.LOAD_ACTIVITY_SUCCESS: return {
			...state,
			fetching: {
				...state.fetching,
				loadActivity: createSuccess()
			}
		}
		case ACTION_TYPES.LOAD_ACTIVITY_FAILURE: return {
			...state,
			fetching: {
				...state.fetching,
				loadActivity: createError(action.error)
			}
		}
		case ACTION_TYPES.LOAD_ACTIVITY_DATA_REQUEST: return {
			...state,
			fetching: {
				...state.fetching,
				loadActivityData: createFetching()
			}
		}
		case ACTION_TYPES.LOAD_ACTIVITY_DATA_SUCCESS: return {
			...state,
			fetching: {
				...state.fetching,
				loadActivityData: createSuccess()
			}
		}
		case ACTION_TYPES.LOAD_ACTIVITY_DATA_FAILURE: return {
			...state,
			fetching: {
				...state.fetching,
				loadActivityData: createError(action.error)
			}
		}
		case ACTION_TYPES.RENDER_ACTIVITY_REQUEST: return {
			...state,
			fetching: {
				...state.fetching,
				renderActivity: createFetching()
			}
		}
		case ACTION_TYPES.RENDER_ACTIVITY_SUCCESS: return {
			...state,
			fetching: {
				...state.fetching,
				renderActivity: createSuccess()
			}
		}
		case ACTION_TYPES.RENDER_ACTIVITY_FAILURE: return {
			...state,
			fetching: {
				...state.fetching,
				renderActivity: createError(action.error)
			}
		}
		case ACTION_TYPES.FIRE_ACTIVITY_EVENT_REQUEST: return {
			...state,
			fetching: {
				...state.fetching,
				fireActivityEvent: createFetching()
			}
		}
		case ACTION_TYPES.FIRE_ACTIVITY_EVENT_SUCCESS: return {
			...state,
			fetching: {
				...state.fetching,
				fireActivityEvent: createSuccess()
			}
		}
		case ACTION_TYPES.FIRE_ACTIVITY_EVENT_FAILURE: return {
			...state,
			fetching: {
				...state.fetching,
				fireActivityEvent: createError(action.error)
			}
		}
		default: return state;
	}
}
