import { Contacts } from './components/Contacts';
import { Experience } from './components/Experience';
import { Image } from './components/Image';
import '../src/styles/styles.css'
import { Github } from './components/Github';

const photoLink = './CVphoto.jpg';

function App() {
  return (
    <body className='main-theme'>
      <div className='cv-page'>
        <header className='sidebar'>
          <div className='sidebar-photo'>
              <Image imageLink = {photoLink}/>
          </div>
         
          <Contacts/>        
        </header>
     <main>
      <div className='main-content'>
          <Experience/>
          <Github/>
      </div>
     </main>
      </div>
  </body>
  )
}

export default App;
