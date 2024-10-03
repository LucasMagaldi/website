import { GoCheck } from "react-icons/go"
import { useTheme } from "../../context/theme-context"

import './styles.css'

// eslint-disable-next-line react/prop-types
export function SkillItem({ skill }) {
    const { theme } = useTheme()
    return (
        <div className="skill-item">
            <GoCheck color={theme == 'dark' && 'white'}/>
            <p>{skill}</p>
        </div>
    )
}