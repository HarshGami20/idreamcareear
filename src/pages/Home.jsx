import Heropage from '../components/Heropage'
import Success from '../components/sucess-slider/Success'
import Colleges from '../components/Collages'
import Counselors from '../components/Counselors'
import Unemp from "../components/Unemp"
import Sun from '../components/Sun'
import Hover from '../components/Hover'
import Strean from '../components/Strean'
import News from '../components/News'
import Invester from '../components/Invester'
import SharkTank from "../components/SharkTank";
import Faq from "../components/Faq";
import End from '../components/End'


// import Popup from './components/popup/Popup'

const Home = () => {
    return (
        <>
            <Heropage />
            <Colleges />
            <Success />
            <Unemp />
            <Counselors />
            <Sun />
            <Hover />
            <Strean />
            <News />
            <Invester />
            <SharkTank />
            <Faq />
            <End />
        </>
    )
}

export default Home