
import { Profile } from "@/app/components/profile";
import { experince } from "@/app/data/expenrience";
import { link } from "@/app/data/links";
import Link from "next/link";
import { LuArrowUpRight } from "react-icons/lu";

export const HomePage = () => {
    function pipeTexnologies(technologies: Array<string>) {
        return technologies.join(" | ");
    }

    return (
        <main className="max-w-lg flex-1 py-10">
            <Profile />
            <div className="flex flex-col gap-10 mt-10 tracking-wider text-sm">
                <section>
                    <h2 className="font-semibold py-6 text-white">Sobre Mim</h2>
                    <p className="text-zinc-400 ">
                        Sou desenvolvedor apaixonado por criar interfaces que ofereçam uma experiência agradável e intuitiva
                        aos usuários. Com experiência em tecnologias baseadas em JavaScript, estou sempre em busca de
                        aprender mais e aprimorar minhas habilidades. Atualmente, curso Ciência de Dados, o que me permite
                        explorar novas maneiras de resolver problemas e contribuir para projetos inovadores.
                    </p>
                </section>
                <section>
                    <h2 className="font-semibold py-6 text-white">Experiencias</h2>
                    <div className="text-zinc-400 flex flex-col gap-10">
                        {experince.map((experince) => (
                            <article key={experince.period} className="flex gap-10">
                                <div className="min-w-24">
                                    {experince.period}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">{experince.position}</h3>
                                    <p className="py-2">{experince.description}</p>
                                    <p className="uppercase text-zinc-500">{pipeTexnologies(experince.technologies)}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="font-semibold py-6 text-white">Links</h2>
                    <div className="flex flex-col gap-6">
                        {link.map((item) => (
                            <div key={item.name} className="flex gap-10">
                                <div className="min-w-24">
                                    {item.name}
                                </div>
                                <div>
                                    <p className="font-semibold hover:underline">
                                        <Link className="flex justify-center items-center gap-1"
                                            target="_blank"
                                            href={item.link}>{item.link}
                                            <LuArrowUpRight />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}