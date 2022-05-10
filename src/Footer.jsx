import React from "react";

const Footer = () => {

const year = new Date().getFullYear();

    return(
        <>
            <footer className="bg-light text-center">
            <p>© {year} Ahinsa Jain Food. All Rights Reserved | Terms and Conditions</p>

            </footer>
        </>
    )
}

export default Footer;