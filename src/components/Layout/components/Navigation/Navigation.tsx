import * as cn from "./Navigation.module.scss";
import { Search } from "./Search/Search";
import Logo from "@assets/logo.png";
import { Link } from "gatsby";

const Navigation = () => {
    return (
        <nav className={cn.container}>
            <Link to="/" className={cn.home}>
                <img src={Logo} />
                <h2 className={cn.title}>learn.ryqn.dev</h2>
            </Link>

            <div className={cn.tabs}>
                <Link to="/explore" className={cn.tab}>
                    Explore
                </Link>
            </div>
            <Search />
        </nav>
    );
};

export { Navigation };
