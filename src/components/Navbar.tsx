import Hamburger from "hamburger-react"
import { useState } from "react"
import SideNavbar from "./SideNavbar"

interface navProps {
    brand: boolean
}

export default function Navbar(props : navProps) {
    const [isOpen, setOpen] = useState(false)
    if(props.brand) {
        return (
            <div className="navbar">
                brandNav
            </div>
        )
    }else {
        return (
            <div className="navbar ">
                <SideNavbar isOpen={isOpen} brand={props.brand} />
                <div className="flex justify-between items-center wrapper">

                <div className="navbar-div w-1/3">
                    <img className="navbarLogo lg:w-1/2" src="./img/transparentLogo.png" alt="Albannach" />
                </div>
                <div className="navbar-div w-1/4 hidden lg:flex mx-auto text-center justify-around text-xl">
                    <a href="">Team</a>
                    <a href="">Marketplace</a>
                    <a href="">Staking</a>
                </div>
                <div className="navbar-div w-1/3 justify-end items-center hidden lg:flex pr-6 ">
                    <a className="px-2" href=""><img src="./img/icons/etherscan.png" alt="" /></a>
                    <a className="px-2" href=""><img src="./img/icons/twitter.png" alt="" /></a>
                    <a className="px-2" href=""><img src="./img/icons/discord-icon.png" alt="" /></a>
                    <a className="px-2" href=""><img src="./img/icons/opensea.png" alt="" /></a>
                    <a className="mx-2 text-2xl primary-button px-6 py-1 font-bold" href="">Login</a>
                </div>
                <div className="lg:hidden pr-6"><Hamburger color="#D2AC47" toggled={isOpen} toggle={setOpen} /></div>
                </div>
            </div>
        )
    }
}