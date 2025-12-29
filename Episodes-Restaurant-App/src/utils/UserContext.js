import { createContext } from "react";

const UserContext = createContext({
    loggedInUserName : "Default user"
})

export default UserContext;