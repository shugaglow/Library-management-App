import { Outlet, Link } from "react-router-dom";

function Layout() {
    return (
    <div className="layout">
    

        <div className="layout-nav">
           <div className="logo">           
             <h1>Library App</h1>
        </div>
            <ul>
           
            <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="wanttoread">Want to Read</Link>
                </li>
                <li>
                    <Link to="currentlyreading">Currently Reading</Link>
                </li>
                <li>
                    <Link to="finishedreading">Finished Reading</Link>
                </li>
            </ul>
        </div>


        <Outlet/>
    </div>
    )
}

export default Layout

