/* Import section */
import { services } from "../../utils/services-data"
import { Service } from "../cards/Service"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"
import { Title } from "../shared/Title"
/* Services component */
export const Services = () => {
    return (
        <section id="services">
            <Container className="space-y-10 md:space-y-12">
                {/* Presentation */}
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <Title>Next-Generation VR & AI Services</Title>
                    <Paragraph>
                        Unlock next-level performance with immersive VR and smart AI tools built to elevate your workflow. Here’s what we offer:
                    </Paragraph>
                </div>
                {/* Services */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {services.map((service, key) => (
                        < Service
                            key={key}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )

}
