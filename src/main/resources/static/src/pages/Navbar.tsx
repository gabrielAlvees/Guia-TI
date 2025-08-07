import {
    Container,
    Logo,
    Image,
    Search,
    Nav,
    Link,
    Section,
    Text,
    Acess
} from "../styles/navbarStyles.ts";

// @ts-ignore
import logoItsp from "../assets/itsplogo.png";

import { FaSearch } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
    return (
        <>
            <Section>
                <Text>São Paulo - Itaquaquecetuba | Bem-Vindo</Text>
                <div>
                    <Acess href="">Login</Acess>
                    <FaUserCircle fontSize="30px" color="white" />
                </div>

            </Section>
            <Container>
                <Logo>
                    <Image src={logoItsp} />
                </Logo>

                <Search>
                    <input type="search" placeholder="Pesquisar" />
                    <FaSearch />
                </Search>
            </Container>

            <Nav>
                <Link>SUPORTE TI</Link>
                <Link>DOCUMENTAÇÃO</Link>
                <Link>QUALIDADE</Link>
                <Link>RECURSOS HUMANOS</Link>
                <Link>EMPRESA</Link>
            </Nav>
        </>
    );
};