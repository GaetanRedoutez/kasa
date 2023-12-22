import OverlayTitle from "../../components/OverlayTitle"
import Image from "../../assets/images/about.svg"
import DropDown from "../../components/DropDown"

function About() {
  const fiabilityContent = `Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
  régulièrement vérifiées par nos équipes.`
  const respectContent = `La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
  perturbation du voisinage entraînera une exclusion de notre plateforme.`
  const serviceContent = `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.`
  const securityContent = `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
  correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
  locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
  également des ateliers sur la sécurité domestique pour nos hôtes.
  `

  return (
    <div className="about">
      <OverlayTitle title={""} background={Image} />
      <div className="about__dropdown">
        <DropDown name="Fiabilité" items={fiabilityContent} />
        <DropDown name="Respect" items={respectContent} />
        <DropDown name="Service" items={serviceContent} />
        <DropDown name="Sécurité" items={securityContent} />
      </div>
    </div>
  )
}

export default About
