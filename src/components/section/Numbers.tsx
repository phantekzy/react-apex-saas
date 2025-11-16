/* Import section */
import { Container } from "../shared/Container"
/* Numbers component */
export const Numbers = () => {
    return (
        <section className="relative mt-12 md:mt-16 ">
            <Container className="flex justify-center items-center">
                <div className="mx-auto lg:mx-0 gap-4 sm:gap-6 md:gap-0 p-5 sm:p-6 sm:py-8 max-w-5xl rounded-3xl
                                bg-box-bg border border-box-border shadow-lg
                                shadow-box-shadow md:divide-x divide-box-border grid grid-cols-2 md:grid-cols-4">
                    <div className="text-center px-5 ">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">1,000+</h2>
                        <p className="mt-2 text-heading-3">customers worldwide</p>
                    </div>

                    <div className="text-center px-5 ">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">5M+</h2>
                        <p className="mt-2 text-heading-3">AI-powered actions </p>
                    </div>

                    <div className="text-center px-5 ">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">10,000+</h2>
                        <p className="mt-2 text-heading-3">hours saved for teams</p>
                    </div>

                    <div className="text-center px-5 ">
                        <h2 className="font-semibold text-xl sm:text-2xl md:text-4xl text-heading-1">2500+</h2>
                        <p className="mt-2 text-heading-3">mmersive VR experiences </p>
                    </div>
                </div>

            </Container>
        </section>
    )
}
