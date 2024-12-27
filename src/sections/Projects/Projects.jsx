import React from 'react'
import styles from './ProjectStyles.module.css'
import takeawayImg from '../../assets/take-away.png'
import ProjectCard from '../../common/ProjectCard'
import webImg from '../../assets/portfolio.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className='sectionTitle'>
        Projects
      </h1>

      <div className={styles.projectsContainer}>
        <ProjectCard 
          src={takeawayImg} 
          link='https://github.com/FKKuser/sky-take-out'
          h3='Sky Takeaway' 
          p='A restaurant management software solution with both an administrative backend and a mini-program for customers.'
        />

        <ProjectCard 
          src={webImg} 
          link='https://github.com/FKKuser/yuan-portfolio-website'
          h3= "Yuan's page"
          p='My web portfolio, which contains my resume, projects and skills.'
          />
      </div>
    </section>
  )
}

export default Projects