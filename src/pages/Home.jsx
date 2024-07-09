import NavBar from '../component/NavBar'
import ClassicalCardsContainer from '../component/ClassicalCardsContainer'
import ExclusiveCardsContainer from '../component/ExclusiveCardsContainer'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
        <NavBar />
        <ClassicalCardsContainer/>
        <ExclusiveCardsContainer/>
        <Footer/>
    </div>
  )
}

export default Home