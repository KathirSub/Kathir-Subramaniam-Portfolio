
import styles from './ProjectsStyles.module.css'
import Pinterest_Like_App from '../../assets/Pinterest_Like_Application.png'
import monkey_meals from '../../assets/monkey_meals_logo.png'
import ProjectCard from '../../common/ProjectCard';
import robotArenaGame from '../../assets/RobotArenaGame.png'
import CricketDB from '../../assets/Cricket_Db.png'
import Terminal_Calendar from '../../assets/Terminal_Calendar.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>

      <ProjectCard 
      src = {monkey_meals} link = "https://github.com/KathirSub/Food-Order-Application" 
      h3 = "Monkey Meals"
      p = "Food Ordering App"
      />
       
       <ProjectCard 
      src = {Pinterest_Like_App} link = "https://github.com/KathirSub/Pinterest-like-Application" 
      h3 = "Pinterest-Like App"
      p = "Image Browse Application"
      />
      
      <ProjectCard 
      src = {CricketDB} link = "https://github.com/KathirSub/ICC-Cricket-Database-Real-Sample-Data-" 
      h3 = "ICC Cricket DB"
      p = "Database on Cricket Finals"
      />

      <ProjectCard 
      src = {robotArenaGame} link = "https://github.com/KathirSub/Avoid-Robots-From-Castle-Game" 
      h3 = "Guard Arena"
      p = "Java Game"
      />

      <ProjectCard 
      src = {Terminal_Calendar} link = "https://github.com/KathirSub/Terminal-Calendar-With-Reminders" 
      h3 = "Terminal Calendar"
      p = "Basic Calendar with Reminders and Translations"
      />


    </div>
    </section>
    );
}


export default Projects