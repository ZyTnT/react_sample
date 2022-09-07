import work2 from '../picture/work2.png'
import '../CSS/project.css'

function ProjectDelivery(){
    return(
        <>
        <h1 className='project_title'>Delivery Management Application</h1>
        <div className='picture'>
        <img src={work2}></img>
        </div>
        <p>This is a software used to manage and monitor the logistics situation. Staff can use it to register the logistics location, and customers can use it to know the current location of the goods</p>
        <h2><a href='/'>Back to HomePage</a></h2>
        </>
    )
}

export default ProjectDelivery;
