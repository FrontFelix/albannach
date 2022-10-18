interface sideBarProps {
    brand : boolean
    isOpen : boolean
}

export default function SideNavbar(props : sideBarProps) {
    if(props.isOpen) {
        
    }
    if(props.brand) {
        return (
            <div>

            </div>
        )
    }else {
        return (
            <div>
                {props.isOpen && 
            <div className="sideNavbar flex justify-center">
                <ul className="text-center text-xl py-64">
                    <li className="py-4 px-20">Login</li>
                    <li className="py-4 px-20">Team</li>
                    <li className="py-4 px-20">Marketplace</li>
                    <li className="py-4 px-20">Staking</li>
                    <li className="py-8 flex mx-auto  justify-center">
                        <a className="mx-4" href=""><img src="./img/icons/discord-icon.png" alt="" /></a>
                        <a className="mx-4" href=""><img src="./img/icons/etherscan.png" alt="" /></a>
                        <a className="mx-4" href=""><img src="./img/icons/twitter.png" alt="" /></a>
                        <a className="mx-4" href=""><img src="./img/icons/opensea.png" alt="" /></a>
                    </li>
                </ul>
            </div>
                }
            </div>
        )
    }
}