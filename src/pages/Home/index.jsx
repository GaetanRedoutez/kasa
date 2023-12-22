import Cards from "../../components/Cards"
import OverlayTitle from "../../components/OverlayTitle"
import Image from "../../assets/images/home.svg"

function Home() {
  return (
    <div className="home">
      <OverlayTitle title="Chez vous, partout et ailleurs" background={Image} />
      <Cards />
    </div>
  )
}

export default Home
