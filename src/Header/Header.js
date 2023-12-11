import './Header.css'
import logo from './logo.png'
import Navigation from './Navigation';


function Header(){
    return(
        <div className='Header'>
            <img src={logo} className='logo 'alt='logo' ></img>
            <div>            
                <h1>my dictionary</h1>
                <h2> It is never too late to learn </h2>
                <Navigation  />
            </div>
        </div>
    )
}
export default Header;