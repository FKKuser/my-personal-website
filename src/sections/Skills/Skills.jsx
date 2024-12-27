import styles from './SkillStyle.module.css'
import checkMarkLight from '../../assets/checkmark-light.svg'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import { useTheme } from '../../common/ThemeContext'
import SkillList from '../../common/SkillList';


function Skills() {

  const {theme, toggleTheme} = useTheme();
  const checkedMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;

  return (
    <section id='skills' className={styles.container}>
      <h1 className='sectionTitle'>Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkedMarkIcon} skill='HTML'/>
        <SkillList src={checkedMarkIcon} skill='CSS'/>
        <SkillList src={checkedMarkIcon} skill='JavaScript'/>
        <SkillList src={checkedMarkIcon} skill='Node'/>
        <SkillList src={checkedMarkIcon} skill='React'/>
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkedMarkIcon} skill='Java'/>
        <SkillList src={checkedMarkIcon} skill='Spring Boot'/>
        <SkillList src={checkedMarkIcon} skill='Spring MVC'/>
        <SkillList src={checkedMarkIcon} skill='MySQL'/>
        <SkillList src={checkedMarkIcon} skill='Redis'/>
      </div>
    </section>
  )
}

export default Skills