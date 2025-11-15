/* Import section */
import { Layout } from "./components/Layout"
import { AboutUs } from "./components/section/AboutUs"
import { Brands } from "./components/section/Brands"
import { Hero } from "./components/section/Hero"
import { Services } from "./components/section/Services"
/* App Component section */
function App() {
    /* Return section */
    return <Layout title="ApexVerse">
        {/* Hero section */}
        <Hero />
        {/* Brands section */}
        <Brands />
        {/* Services section */}
        <Services />
        {/* About us section */}
        <AboutUs />
    </Layout>
}
/* Export section */
export default App
