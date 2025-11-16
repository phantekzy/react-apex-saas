/* Import section */
import { Container } from "../shared/Container"
import { Title } from "../shared/Title"
/* Logos section */
const logos = [
    "google",
    "mercedes",
    "microsoft",
    "openai",
    "spotify",
    "gemini",
]
/* Brands component */
export const Brands = () => {
    return <section>
        <Container className="space-y-8 ">
            <div className="text-center max-w-3xl mx-auto">
                <Title>Trusted by leading companies worldwide</Title>
            </div>
            <div className="flex gap-8 justify-center items-center flex-wrap">
                {logos.map((logo, key) => (
                    <div key={key} className="p-4 sm:p-5 rounded-xl bg-body  group">
                        <img src={`/logos/${logo}.png`} width="100" height="60"
                            className="h-8 sm:h-15 w-auto ease-linear duration-300 grayscale group-hover:grayscale-0! 
                            group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </Container>
    </section>
}
