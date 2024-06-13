import React from "react"
import "./Header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header-contents">
                <h2>Savour the flavours of the Nordic lands</h2>
                <p>Indulge in authentic Nordic cuisine delivered straight to your doorstep. From traditional favourites to modern culinary delights, satisfy your cravings with our delectable menu.</p>
                <button onClick={() => window.location.href = "#menu-items"}>Experience Nordic Delicacies</button>
            </div>
        </div>
    )
}

export default Header