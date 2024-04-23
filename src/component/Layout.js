import React from "react";
import NavbarComponent from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return (
        <div>
            <React.Fragment>
                <NavbarComponent/>
                <div class="columns">
                    <div class="column is-2">
                        <Sidebar />
                    </div>
                    <div class="column has-background-light">
                        <main className="mt-5">{children}</main>
                    </div>
                </div>
            </React.Fragment>
        </div>
    )
}

export default Layout;