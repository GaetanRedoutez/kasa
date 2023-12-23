import Cards from "../../components/Cards"
import OverlayTitle from "../../components/OverlayTitle"
import Image from "../../assets/images/home.svg"

function Home() {
  const titleText1 = "Chez vous, "
  const titleText2 = "partout et ailleurs"
  const title = (
    <h2 className="overlayTitle__h2">
      {titleText1}
      <br className="smallBreak" />
      {titleText2}
    </h2>
  )

  return (
    <div className="home">
      <OverlayTitle title={title} background={Image} />
      <br />
      <Cards />
    </div>
  )
}

export default Home
