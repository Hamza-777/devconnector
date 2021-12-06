import { GET_PROFILE, GET_PROFILES, GET_REPOS, UPDATE_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_FOLLOWERS, GET_FOLLOWERS } from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    repos: null,
    loading: true,
    followers: [],
    error: {}
}

function profileReducer(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            };
        case GET_PROFILES:
            return {
                ...state,
                profiles: payload,
                loading: false
            };
        case GET_FOLLOWERS:
            return {
                ...state,
                followers: payload,
                loading: false
            };
        case PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        case CLEAR_PROFILE:
            return {
                ...state,
                profile: null,
                repos: [],
                folloers: [],
                loading: true
            };
        case GET_REPOS:
            return {
                ...state,
                repos: payload,
                loading: false
            };
        case UPDATE_FOLLOWERS:
            return {
                ...state,
                profiles: state.profiles.map(
                    profile => profile._id === payload.id ? { ...profile, followers: payload.followers } : profile
                ),
                loading: false
            }
        default:
            return state;
    }
}

export default profileReducer;