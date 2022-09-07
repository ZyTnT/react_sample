import '../CSS/navigator.css'
import '../CSS/basic.css'

function Navigator(props){
    return(
        <>
        <div className='nav_container'>
            <nav>
                <div className='wrap'>
                    <ul id='navslide'>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/work'>Work</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/contact'>Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navigator;

