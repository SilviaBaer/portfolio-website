import Name from "../components/name/name"
import Pro from "../components/pro/pro"
import { Route } from "react-router-dom"

export default function Welcome() {
    return (
        <div>
            <Name/>
            <Pro/>
            <Route>
                <p>Welcome, new user!</p>
            </Route>
        </div>
    )
} 

//it is possible to nest a route inside a component 
//giving access to this specific route to new users only, for example!!