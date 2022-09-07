import work1 from '../picture/work1.png'
import '../CSS/project.css'

function ProjectCourse(){
    return(
        <>
        <h1 className='project_title'>Course Selection System</h1>
        <div className='picture'>
        <img src={work1}/>
        </div>
        <p>This is a software that helps students to select courses. Users can select courses by course name, course number, etc. And you can see the impact of each course on future salary</p>
        <h2><a href='/'>Back to HomePage</a></h2>
        </>
    )
}

export default ProjectCourse;
