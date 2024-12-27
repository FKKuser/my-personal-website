import styles from './HeroStyles.module.css'
import heroImg from '../../assets/IMG_6885.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedInLight from '../../assets/linkedin-light.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import CV from '../../assets/Yuan Guo resume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {

  const {theme, toggleTheme} = useTheme();
  const themeIcon = theme === 'light' ? sun : moon;
  const linkedInIcon = theme === 'light' ? linkedInLight : linkedInDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  

  return (
    <section id='hero' className={styles.container}>

      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="the portfolio picture of Yuan" />
        <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
      </div>

      <div className={styles.info}>
        <h1>Yuan <br />Guo</h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/yuan-guo-0a0289225/" target='_blank'>
            <img src={linkedInIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://github.com/FKKuser" target='_blank'>
            <img src={githubIcon} alt="Github Icon" />
          </a> 
        </span>
        <p className={styles.description}>  
          Hi! I'm Currently pursuing a Master of Applied Computer Science at Fairleigh Dickinson University, 
          <br/>
          I have excelled in key technical courses such as Data Structures and Algorithms, Operating Systems, and Assembly Language. 
        </p>
        <a href={CV} download>
          <button className='hover'>Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero