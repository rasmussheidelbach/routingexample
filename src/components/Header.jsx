import { Link } from "react-router-dom";
import mystyle from "./Header.module.css";

export default function Header() {

    return (
        <header>
            <nav className={mystyle.navigation}>
                <p>
                    <Link className={mystyle.linktext} to="/">Home</Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/first">First page</Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/second">Second page</Link>
                </p>
                <p>
                    <Link className={mystyle.linktext} to="/third">Third page</Link>
                </p>
            </nav>
        </header>
    )
}