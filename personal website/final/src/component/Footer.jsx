import '../CSS/footer.css'
import '../CSS/basic.css'


function Footer(props){
    return(
        <>
        <footer className="cotentinfo">
            <div className="wrap">
                <h2>SAY HELLO</h2>
                <p>We’d love to hear from you and answer any questions you may have. Send us an email or just follow us on the socials.</p>
                <ul>
                    <li><span className="email"></span></li>
                    <li><span className="twitter"></span></li>
                    <li><span className="instagram"></span></li>
                </ul>
            </div>

            <div id="copyright">
                <p>© 2022 - 2022 yutong - All picutre are mine. All Rights Reserved.</p>
            </div>
            <p id='privacy_words'>Please see our privacy at <a href='/privacy' id='privacy_link'>Privacy Statement</a></p>
        </footer>
        </>
    )
}

export default Footer;