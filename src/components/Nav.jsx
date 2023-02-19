import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = ({onSearch})=>{
    return(
        <div className="navC">
            <Link to='/'> LOGUOT</Link>
            <Link to='/home'>HOME</Link>
            <Link to='/about'>ABOUT</Link>
            <SearchBar onSearch={onSearch}/>
        </div>
    )
}

export default Nav;