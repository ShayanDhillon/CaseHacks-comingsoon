import instagramLogo from '/instagram-inverted.png'
import linkedinLogo from '/linkedin-inverted.png'
import linktreeLogo from '/linktree-inverted.png'
import casehacksLogo from '/case-hacks-logo-inverted.png'

import './App.css'

function App() {
  const rotateAll = () =>{
    const elements = document.querySelectorAll('.body, .body *');
    
    if (!elements?.item(0)?.classList.contains('rotate')) {
      Array.from(elements).forEach((element) => {console.log('Applying rotation to:', element);element.classList.add('rotate')})
    } else {
      Array.from(elements).forEach((element) => {element.classList.remove('rotate')})
    }
  }

  return (
    <>
      <button onClick={rotateAll} className="funnyButton">Click Me!</button>
      <div className='body'>
        <div className='headers'>
            {Array.from({ length: 2 }).map((_, i) => (
              <h1 className="blurred">coming soon</h1>
            ))}

            <h1 className="glow">coming soon...</h1>
            
            {Array.from({ length: 16 }).map((_, i) => (
              <h1 className="blurred">coming soon</h1>
            ))}
        </div>
        <div className='right-side'>
          <img src ={casehacksLogo} className = "casehacks" alt="Casehacks logo" />
          <div className="socials">
              <a href="https://www.instagram.com/thegoldenhackofficial/?hl=en" target="_blank">
                <img src={instagramLogo} className="logo instagram" alt="Instagram logo" />
              </a>
              <a href="https://www.linkedin.com/company/thegoldenhack/" target="_blank">
                <img src={linkedinLogo} className="logo linkedin" alt="LinkedIn logo" />
              </a>
              <a href="https://linktr.ee/Thegoldenhack">
                <img src={linktreeLogo} className="logo linktree" alt="LinkTree logo" />
              </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
