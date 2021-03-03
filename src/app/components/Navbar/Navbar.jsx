import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Toggle from 'react-toggle';
import {getTheme, setTheme as updateTheme} from '../../controller/theme';
import {ReactComponent as Logo} from '../../assets/logo.svg';

const Navbar = () => {
    const [theme, setTheme] = useState(getTheme());

    useEffect(() => {updateTheme(theme)}, [theme]);

    return (
        <nav>
            <Link to="/"><Logo /> </Link>
            <Link to="/" className="name">learn.ryqn.dev</Link>
            <Link to="/template">templates</Link>
            <label className="t-w">
                <Toggle checked={!!theme} icons={false} onChange={() => {setTheme(+!theme)}} />
            </label>
        </nav>
    )
}

export default Navbar;