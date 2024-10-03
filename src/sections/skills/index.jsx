import { SkillItem } from "../../components/skill-item"
import { skillNameList } from "./skills-name-list"

import './styles.css'

export function Skills() {
    return (      
        <section className="skills-container">
            <h1>Skills</h1>
            <div className="skills-list ">
               {skillNameList.map((skillName, index) => (
                    <SkillItem key={index} skill={skillName}/>
                ))} 
            </div>       
        </section>
    )
}