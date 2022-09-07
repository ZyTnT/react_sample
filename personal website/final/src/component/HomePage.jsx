import '../CSS/basic.css'
import project1 from '../picture/project1.png'
import project2 from '../picture/project2.png'
import project3 from '../picture/project3.png'
import project4 from '../picture/project4.png'
import project5 from '../picture/project5.png'


function HomePage(props){
    return(
        <div className="content">
        <section id="what_we_do" className="start_intro">
            <div className="wrap">
                <div className="box colour1">
                    <h1 className='title'>We build brands, design apps and create nice websites</h1>
                    <p>We are a highly experienced remote design agency who work with companies from around the planet. Our senior team of creatives and strategists build stand-out brands and create apps with intuitive user-focused design with proven results.</p>
                    <p><a href='/about'>Read more about us </a></p>
                </div>
            </div>
        </section>

        <section id='work_list'>
            <div className='wrap'>
                <ul>
                    <li>
                        <a href='/projectCourse'>
                            <div className='more'>
                                <span>+</span>
                            </div>
                            <img src={project1}></img>
                        </a>
                        <h2><a href='/projectCourse'>Course Selection</a></h2>
                        <p>A course selection systems based on Java</p>
                    </li>

                    <li>
                        <a href='/projectDelivery'>
                            <div className='more'>
                                <span>+</span>
                            </div>
                            <img src={project2}></img>
                        </a>
                        <h2><a href='/projectDelivery'>Delivery Management</a></h2>
                        <p>A software that makes it easy to view and manage logistics information</p>
                    </li>

                    <li>
                        <a href='/projectForecast'>
                            <div className='more'>
                                <span>+</span>
                            </div>
                            <img src={project3}></img>
                        </a>
                        <h2><a href='/projectForecast'>Outbreak Forecast</a></h2>
                        <p>A website that can predict the development of epidemics</p>
                    </li>

                    <li>
                        <a href='/projectCrypto'>
                            <div className='more'>
                                <span>+</span>
                            </div>
                            <img src={project4}></img>
                        </a>
                        <h2><a href='/projectCrypto'>Cryptocurrency Auctions</a></h2>
                        <p>A website that allows people to auction on the blockchain</p>
                    </li>

                    <li className='last'>
                        <a href='contact'>
                            <div className='more'>
                                <span>+</span>
                            </div>
                            <img src={project5}></img>
                        </a>
                        <h2><a href='contact'>Your Project</a></h2>
                        <p>If you think we are the right fit for your new project, we are happy to chat about your ideas </p>
                    </li>
                </ul>
            </div>
        </section>
    </div>
    )
}

export default HomePage;