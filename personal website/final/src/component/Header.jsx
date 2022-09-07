import '../CSS/header.css'
import logo from '../picture/logo.jpg'

function Header(){
    return(
        <header className="header">
            <div id='skiptocontent'>
                 <a href='#main'> Skip to content</a>
            </div>
        <div className="wrap">
            <div className="logo">
                <a>
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <section id="intro">
                <h1> Yutong Studio</h1>
                <span>Studio ~ since 2020</span>
            </section>
        </div>
        </header>
    )
}

export default Header;