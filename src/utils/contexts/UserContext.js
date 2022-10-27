import React, { createContext, useReducer } from "react";

const UserState = {
    userData: [
        { email: 'admin@gmail.com', password: 'Admin@1234', loggedIn: false },
        { email: 'test@gmail.com', password: 'Test@1234', loggedIn: false },
    ],
    userProfile: {}
}

const UserContext = createContext(UserState)

const UserContextProvider = ({ children }) => {
    const [state, menuDispatch] = useReducer(UserReducer, UserState)

    const setUserData = (payload) => {
        menuDispatch({ type: "SET_USER_DATA", payload })
    }
    const setUserProfile = (payload) => {
        menuDispatch({ type: "SET_USER_PROFILE", payload })
    }

    const func = {
        setUserData,
        setUserProfile,
        ...state
    }

    console.log("userData", state.userData)

    return (
        <UserContext.Provider value={func}>
            {children}
        </UserContext.Provider>
    )
}
export { UserContext, UserContextProvider }

const UserReducer = (state, action) => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                userData: action.payload,
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                userProfile: action.payload,
            }
        default:
            return state
    }
}