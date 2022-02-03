import {NavLink, Link} from 'react-router-dom'

export default function NavBar() {
    return(
        // <></> are placeholders!
        <>
            <div>
                <Link 
                    // you can style inline, but doesn't assign an 'isActive' class :( )
                    // style={({ isActive }) => ({ color: isActive ? 'green' : 'blue' })}
                    to="/">Home</Link>
                <Link to="/:id">Homies</Link>
                <Link to="/posts">Posts</Link>
                {/* NavLink is helpful when differentiating between nav links and regular links. It also automatically assigns an "isActive" class where it makes it easier to style! */}
                 {/* <NavLink 
                    style={{
                        padding: "10px"
                    }}
                    to="/">Home</NavLink>
                <NavLink 
                    style={({ isActive }) => 
                    ({ color: isActive ? 'green' : 'blue' })}
                    to="/posts">Posts</NavLink>
                <NavLink 
                    style={{
                        padding: "10px"
                    }}
                    to="/:id">User</NavLink>  */}
            </div>
        </>
    )
}