import { Container } from "../shared/Container"

/* Hero Component */
export const Hero = () => {
    /* Return section */
    return <section className="relative pt-32 lg:pt-36 ">
        <Container className="flex flex-col lg:flex-row  gap-10 lg:gap-12">
            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
                <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12
                            rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 blur-xl opacity-60 lg:opacity-95
                            lg:block hidden">

                </span>
                <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary blur-xl 
                                    opacity-80 ">
                </span>
            </div>

            <div>
                <h1 className="relative flex flex-col items-center text-center lg:text-left lg:py-8  lg:items-start lg:max-w-none max-w-3xl
                                mx-auto lg:mx-0 lg:flex-1 lg:w-1/2
                                ">
                    Unlock Your Potential
                    <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 ml-2 ">
                        with AI
                    </span>

                </h1>
            </div>
        </Container>
    </section>
}
