import { Button } from "../shared/Button"
import { Container } from "../shared/Container"
import { Paragraph } from "../shared/Paragraph"

/* CallToAction component */
export const CTA = () => {
    return <section className="pb-20 relative">
        <Container>
            <div className="relative rounded-2xl overflow-hidden">
                <div className="relative z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8 md:py-10
                                px-6 md:px-8">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
                        Kickstart Your
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-600 to-violet-600">
                            AI
                        </span>
                        Venture
                    </h1>
                    <Paragraph className="pt-10">
                        Take the first step toward building your AI-driven business with confidence.
                        Our platform provides the tools, insights, and scalable technology you need to develop,
                        launch, and grow intelligent solutions efficiently.
                        Whether you are creating immersive VR experiences or advanced AI applications,
                        we empower you to turn your vision into a successful enterprise.
                    </Paragraph>
                    <div className="mx-auto max-w-md sm:max-w-xl pt-10 text-white">
                        <Button>Launch Now</Button>
                    </div>
                </div>

            </div>
        </Container>
    </section >
}
