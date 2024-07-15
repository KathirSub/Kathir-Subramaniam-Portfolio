import styles from './HereStyles.module.css'
import heroimg from '../../assets/hero-img.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import LinkedInIcon from '../../assets/linkedin-light.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import instagramLight from '../../assets/instagram_Light.png'
import instagramDark from '../../assets/instagram_Dark.png'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const LinkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const instagramIcon = theme === 'light' ? instagramDark : instagramLight;


  return (
    <section id = "hero" className={styles.container}>
        <div className = {styles.colorModeContainer}><img className = {styles.hero}
        src={heroimg} 
        alt="Profile Picture of Kathir Subramaniam" 
        />
        <img className={styles.colorMode} src= {themeIcon} alt="Color mode icon"
          onClick={toggleTheme}
        />
        </div>
        <div className={styles.info} >
          <h1>
            Kathir 
            <br />
            Subramaniam
            </h1>
            <h2>Software Engineer</h2>
            <span>
              <a href="https://linkedin.com/in/kathirsubramaniam" target='_blank'>
              <img src={LinkedInIcon} alt = "LinkedIn Icon" />
              </a>
              <a href="https://github.com/KathirSub" target='_blank'>
              <img src={githubIcon} alt = "Github Icon" />
              </a>
              <a href="https://www.instagram.com/kathirsub/" target='_blank'>
              <img src={instagramIcon} alt = "Instagram Icon" />
              </a>

            </span>

            <p className ={styles.description}> 
              Passionate and Driven for Developing Software Applications.</p>
            <a href={CV} download>
              <button className= "hover">
                Resume
              </button>
            </a>
        </div>
        </section>
  )
}

export default Hero