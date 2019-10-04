import React from "react";

function Header() {
    return(
        <header style={headerStyle}>
            <h1>Films from Studio Ghibli</h1>
        </header>
    )
}

const headerStyle = {
    textAlign: "center"
}

export default Header;