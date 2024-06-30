import { AppHeader } from "../cmps/Header/AppHeader.jsx";
import { LoginSignup } from "../cmps/LoginSignup.jsx";
import { userService } from "../services/user.service.js";
import { BugIndex } from "./BugIndex.jsx";

const { useState } = React

export function BugApp() {
     const [user, setUser] = useState(userService.getLoggedinUser())
     
    return (
        <React.Fragment>
            <AppHeader user={user}/>
            {!user && <LoginSignup setUser={setUser} user={user}/>}
            {user && <BugIndex user={user}/>}
        </React.Fragment>)
}