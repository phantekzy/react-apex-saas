/* Import section */
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/Title"
/* About us component */
export const AboutUs = () => {
    return <section id="about-us">
        <Container className="flex flex-cols md:flex-row gap-10 lg:gap-12 items-center">
            {/* Image col */}
            <div className="w-full md:w-5/12 lg:w-1/2">
                <div className="w-full h-80 sm:h-96 relative">
                    <img
                        className="w-full h-full object-cover rounded-3xl shadow-lg relative z-10"
                        src="https://images.pexels.com/photos/7887258/pexels-photo-7887258.jpeg"
                    />
                </div>
            </div>

            {/* Second col */}
            <div className="w-full md:w-7/12 lg:w-1/2 flex flex-col ">
                <Title>Committed to Excellence in VR and AI Innovation</Title>
                <Paragraph>
                    We create reliable VR and AI solutions that help businesses improve efficiency, enhance experiences,
                    and stay competitive in a rapidly evolving digital landscape. Our focus is on delivering intelligent,
                    scalable technology built for long-term impact.
                </Paragraph>
            </div>
        </Container>
    </section>
}
