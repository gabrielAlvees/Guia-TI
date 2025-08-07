import {
    Container,
    Notice,
    Break,
    OverlayCard
} from "../styles/bodyStyles.ts";

// @ts-ignore
import industria from "../assets/industria.jpg";
// @ts-ignore
import metal from "../assets/metal.jpg";
// @ts-ignore
import cardapio from "../assets/cardapio.jpg";
// @ts-ignore
import computer from "../assets/computer.jpg";
// @ts-ignore
import atwork from "../assets/atwork.jpg";

const cards = [
    { img: metal, title: "Metal", desc: "Setor de produção metalúrgica." },
    { img: cardapio, title: "Cardápio", desc: "Veja o cardápio de hoje." },
    { img: computer, title: "TI", desc: "Tecnologia da informação." },
    { img: atwork, title: "No trabalho", desc: "Ambiente profissional ativo." }
];

export const Body = () => {
    return (
        <Container>
            <Notice>
                <img src={industria} alt="Indústria" />
                <div className="welcome-message">Bem-vindo! Que seu dia seja produtivo e inspirador!</div>
            </Notice>

            <Break>
                {cards.map((card, index) => (
                    <OverlayCard key={index}>
                        <img src={card.img} alt={card.title} />
                        <div className="overlay">
                            <div className="title">{card.title}</div>
                            <div className="desc">{card.desc}</div>
                            <button className="button">Acessar</button>
                        </div>
                    </OverlayCard>
                ))}
            </Break>
        </Container>
    );
};