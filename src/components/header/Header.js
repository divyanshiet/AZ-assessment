import { GiHamburgerMenu } from "react-icons/gi";
import {FaBell} from "react-icons/fa";
import './header.css'
export default function Header()
{
    return(
        <>
          <div className="header">
            <div className="p1">
            <GiHamburgerMenu />
            <div className="name">AlgoZenith</div>
            </div>
            <div className="p2">
                <div className="bell">
                    <FaBell/>
                </div>
            
            <div className="user"></div>
            </div>
          </div>
        </>
    )
}