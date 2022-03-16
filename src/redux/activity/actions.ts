import * as ACTION_TYPES from './types'

export const loadActivityRequestAction = () => {
	return ({
		type: ACTION_TYPES.LOAD_ACTIVITY_REQUEST as typeof ACTION_TYPES.LOAD_ACTIVITY_REQUEST,
	})
}

export const loadActivitySuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.LOAD_ACTIVITY_SUCCESS as typeof ACTION_TYPES.LOAD_ACTIVITY_SUCCESS,
		payload
	})
}

export const loadActivityFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.LOAD_ACTIVITY_FAILURE as typeof ACTION_TYPES.LOAD_ACTIVITY_FAILURE,
		error
	})
}

export const loadActivityDataRequestAction = () => {
	return ({
		type: ACTION_TYPES.LOAD_ACTIVITY_DATA_REQUEST as typeof ACTION_TYPES.LOAD_ACTIVITY_DATA_REQUEST,
	})
}

export const loadActivityDataSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.LOAD_ACTIVITY_DATA_SUCCESS as typeof ACTION_TYPES.LOAD_ACTIVITY_DATA_SUCCESS,
		payload
	})
}

export const loadActivityDataFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.LOAD_ACTIVITY_DATA_FAILURE as typeof ACTION_TYPES.LOAD_ACTIVITY_DATA_FAILURE,
		error
	})
}

export const renderActivityRequestAction = () => {
	return ({
		type: ACTION_TYPES.RENDER_ACTIVITY_REQUEST as typeof ACTION_TYPES.RENDER_ACTIVITY_REQUEST,
	})
}

export const renderActivitySuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.RENDER_ACTIVITY_SUCCESS as typeof ACTION_TYPES.RENDER_ACTIVITY_SUCCESS,
		payload
	})
}

export const renderActivityFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.RENDER_ACTIVITY_FAILURE as typeof ACTION_TYPES.RENDER_ACTIVITY_FAILURE,
		error
	})
}

export const fireActivityEventRequestAction = () => {
	return ({
		type: ACTION_TYPES.FIRE_ACTIVITY_EVENT_REQUEST as typeof ACTION_TYPES.FIRE_ACTIVITY_EVENT_REQUEST,
	})
}

export const fireActivityEventSuccessAction = (payload: any) => {
	return ({
		type: ACTION_TYPES.FIRE_ACTIVITY_EVENT_SUCCESS as typeof ACTION_TYPES.FIRE_ACTIVITY_EVENT_SUCCESS,
		payload
	})
}

export const fireActivityEventFailureAction = (error: any) => {
	return ({
		type: ACTION_TYPES.FIRE_ACTIVITY_EVENT_FAILURE as typeof ACTION_TYPES.FIRE_ACTIVITY_EVENT_FAILURE,
		error
	})
}
