import '../CSS/basic.css'
import team1 from '../picture/team1.jpg'
import team2 from '../picture/team2.jpg'
import team3 from '../picture/team3.jpg'
import team4 from '../picture/team4.jpg'
import team5 from '../picture/team5.jpg'
import team6 from '../picture/team6.jpg'
import team7 from '../picture/team7.jpg'
import team8 from '../picture/team8.jpg'
import team9 from '../picture/team9.jpg'
import team10 from '../picture/team10.jpg'
import team11 from '../picture/team11.jpg'
import team12 from '../picture/team12.jpg'
import team13 from '../picture/team13.jpg'
import team14 from '../picture/team14.jpg'
import team15 from '../picture/team15.jpg'
import team16 from '../picture/team16.jpg'
import team17 from '../picture/team17.jpg'
import team18 from '../picture/team18.jpg'
import team19 from '../picture/team19.jpg'
import team20 from '../picture/team20.jpg'
import team21 from '../picture/team21.jpg'



function About(){
    return(
        <div class="content">
            <section id="about_show" class="start_intro">
                <div class="wrap">
                    <div class="box colour1">
                        <h1 className='title'>We are a passionate studio</h1>
                        <p>We’re a small yet flexible design studio and through our passion for design and development we craft user friendly functional websites, web apps and stand out brand identities. We’re committed and enthusiastic about every project we take on and we get a kick out of getting successful results.</p>
                    </div>
                </div>
            </section>

            <section id="team">
                <div class="wrap">
                    <h2>Our Team</h2>
                    <div class="column">
                        <div class="profile_image yutong"></div>
                        <h4>Yutong Zhen</h4>
                        <p>Manager</p>
                        <p>A programmer who loves front-end work</p>
                    </div>

                    <div class="column">
                        <div class="profile_image hali"></div>
                        <h4>Hali</h4>
                        <p>CCO (Cheif Cute Officer) </p>
                        <p>I will bring good luck to the company. Woof~~~~~</p>
                    </div>

                    <div class="column">
                        <div class="profile_image yutong2"></div>
                        <h4>Yutong Zhen</h4>
                        <p>Senior Programmer</p>
                        <p>Still me (laugh)</p>
                    </div>
                </div>
            </section>
            
            <section id="activities">
                <div class="wrap">
                    <h2>Our Activities</h2>
                    <div class="column">
                        <div class="profile_image basketball"></div>
                        <h4>Baketball</h4>
                    </div>

                    <div class="column">
                        <div class="profile_image game"></div>
                        <h4>Video Game</h4>
                    </div>

                    <div class="column">
                        <div class="profile_image boat"></div>
                        <h4>Rowing</h4>
                    </div>
                </div>
            </section>

            <section id='working_with_us'>
                <div className='wrap'>
                    <h2>WHAT WE LOVE</h2>
                    <ul>
                        <li>
                            <div className='illustration bicycle'></div>
                            <p>We love to cycle into the office every day. As well as being eco-friendly, our bodies and minds are creatively fit and raring to go for all our lovely clients.</p>
                        </li>

                        <li>
                            <div className='illustration display'></div>
                            <p>We love Apple products. We use our MacBook Pros, iPads and iPhones for work and play and because we love using beautifully designed things.</p>
                        </li>

                        <li>
                            <div className='illustration lab'></div>
                            <p>We love learning, developing and pushing ourselves and we embrace the latest ideas through lots of industry reading and conference-going.</p>
                        </li>

                        <li className='last'>
                            <div className='illustration hand'></div>
                            <p>We love being a small and personal team and working directly with you on all your projects. We love to talk and discover your ideas.</p>
                        </li>
                    </ul>
                </div>
            </section>

            <blockquote>
                <p><q>I really love Yutong Studio, they give help me to make a perfect application, which help my compony get many custonmers</q></p>
                <p>Xie Xue, My mother</p>
            </blockquote>

            <section id='flickrfeed'>
                <div id='images'>
                    <ul>

                        <li>
                            <a>
                                <img src={team1} alt='team picture #1'></img>
                            </a>
                        </li>
                        
                        <li>
                            <a>
                                <img src={team2} alt='team picture #2'></img>
                            </a>
                        </li>

                        <li>
                            <a>
                                <img src={team3} alt='team picture #3'></img>
                            </a>
                        </li>

                        <li>
                            <a>
                                <img src={team4} alt='team picture #4'></img>
                            </a>
                        </li>

                        <li>
                            <a>
                                <img src={team5} alt='team picture #5'></img>
                            </a>
                        </li>


                        <li>
                            <a>
                                <img src={team6} alt='team picture #6'></img>
                            </a>
                        </li>

                        <li>
                            <a>
                                <img src={team7} alt='team picture #7'></img>
                            </a>
                        </li>

                        
                        <li>
                            <a>
                                <img src={team8} alt='team picture #8'></img>
                            </a>
                        </li>

                        
                        <li>
                            <a>
                                <img src={team9} alt='team picture #9'></img>
                            </a>
                        </li>

                        
                        <li>
                            <a>
                                <img src={team10} alt='team picture #10'></img>
                            </a>
                        </li>

                        <li>
                            <a>
                                <img src={team11} alt='team picture #11'></img>
                            </a>
                        </li>

                        <li>
                            <a>
                                <img src={team12} alt='team picture #12'></img>
                            </a>
                        </li>

                        <li>
                            <a>
                                <img src={team13} alt='team picture #13'></img>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={team14} alt='team picture #14'></img>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={team15} alt='team picture #15'></img>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={team16} alt='team picture #16'></img>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={team17} alt='team picture #17'></img>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={team18} alt='team picture #18'></img>
                            </a>
                        </li>
                        <li>
                            <a>
                                <img src={team19} alt='team picture #19'></img>
                            </a>
                        </li>

                        <li>
                            <a>
                                <img src={team20} alt='team picture #20'></img>
                            </a>
                        </li>

                        <li>
                            <a>
                                <img src={team21} alt='team picture #21'></img>
                            </a>
                        </li>


                    </ul>
                </div>
            </section>

        </div>
    )
}

export default About;