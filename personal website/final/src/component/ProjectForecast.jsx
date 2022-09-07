import work3 from '../picture/work3.png'
import '../CSS/project.css'

function ProjectForecast(){
    return(
        <>
        <h1 className='project_title'>Covid-19 prediction website</h1>
        <div className='picture'>
        <img src={work3}/>
        </div>
        <p>This is a software used to model the spread of infectious diseases. By entering the transmission coefficient R0 of the infectious disease with other parameters, the user can get a visual picture of the transmission process and data.</p>
        <h2><a href='/'>Back to HomePage</a></h2>
        </>
    )
}

export default ProjectForecast;
