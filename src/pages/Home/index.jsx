import Cards from "../../components/Cards"
import "../../utils/style/home/home.css"

function Home() {
  return (
    <div className="content">
      <div className="home">
        <div className="home__title">
          <h2 className="home__title-h2">Chez vous, partout et ailleurs</h2>
        </div>
        <Cards sectionName={"home__section"} />
      </div>
    </div>
  )
}

export default Home
