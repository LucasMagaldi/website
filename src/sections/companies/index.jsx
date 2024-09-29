import { CompanyCard } from "../../components/company-card"

import exxonMobil from '../../assets/exxon-mobil.png'
import concentrix from '../../assets/concentrix.png'
import madero from '../../assets/madero.png'
import './styles.css'


export function Companies() {
    return (
        <section className="companies-container">
            <h1>Companies I worked for</h1>
            <div className="companies-list">
                <CompanyCard companyName='ExxonMobil' src={exxonMobil} jobRole='Software Developer' alternative='Exxon Mobil company logo'/>
                <CompanyCard companyName='Concentrix' src={concentrix} jobRole='Software Developer' alternative='Concentrix company logo'/>
                <CompanyCard companyName='Madero' src={madero} jobRole='Intern' alternative='Madero company logo'/>
            </div>
        </section>
    )
}