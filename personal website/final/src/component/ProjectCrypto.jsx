import work4 from '../picture/work4.jpg'
import '../CSS/project.css'

function ProjectCrypto(){
    return(
        <>
        <h1 className='project_title'>A auction site on the blockchain</h1>
        <div className='picture'>
        <img src={work4}/>
        </div>
        <p>It is an auction website developed based on the Ether blockchain technology, through which users can easily complete the process of bidding and interacting with goods.</p>
        <h2><a href='/'>Back to HomePage</a></h2>
        </>
    )
}

export default ProjectCrypto;
