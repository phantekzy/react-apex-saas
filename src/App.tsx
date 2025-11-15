/* Import section */
import { Layout } from "./components/Layout"
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
    </Layout>
}
/* Export section */
export default App
