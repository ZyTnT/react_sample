import '../CSS/basic.css'
import Tabs from './Tabs'
import work5 from '../picture/work5.png'
import work6 from '../picture/work6.png'
import work7 from '../picture/work7.png'

function Work(props){
    const items = [
        {
          name: "Project_1",
          content: (
              <>
              <h2>This is a NFT collection on Opensea.</h2>
              <img src={work5} alt="work5"/>
              </>
          ),
          is_active: true,
        },
        {
          name: "Project_2",
          content: (
              <>
              <h2>This is a website about my studio.</h2>
              <img src={work6} alt="work6"/>
              </>
          ),
          is_active: false,
        },
        {
          name: "Project_3",
          content: (
              <>
              <h2>This is a demo about a menu with animation</h2>
              <img src={work7} alt="work7"/>
              </>
          ),
          is_active: false,
        }
      ];


    return(
        <div class="content">
            <section id="work_show" class="start_intro">
                <div class="wrap">
                    <div class="box colour1">
                        <h1 className='title'>I have finished many project by myself. I am good at Java, JavaScript, Swift and Python</h1>
                        <p>Here is my acdemic project picture. Some of them are smartphone application and some are computer software. I am still trying to learn programming, and I believe I will be able to complete even larger tasks</p>
                        <p><a onClick={() => props.onChange('About')}>Read more about us </a></p>
                    </div>
                </div>
            </section>

            <h2 style={{'textAlign' : 'center'}}>My acdemic project</h2>
            <Tabs items={items} />
        </div>
    )
}

export default Work;