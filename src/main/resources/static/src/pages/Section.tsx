import {
    Container,
    Acess,
    Text,
    Link,
    OverlayText,
    TextWrapper
} from "../styles/sectionStyle.ts";

import { MdAccountTree, MdPeopleAlt, MdOutlineLaptopMac, MdOutlineHomeWork } from "react-icons/md";

export const Section = () => {
    return (
        <Container>
            <TextWrapper>
                <Text>Acesso Rápido</Text>
            </TextWrapper>
            <Acess>
                <Link href="/">
                    <MdAccountTree fontSize="50px" />
                    <OverlayText>ACESSO RÁPIDO</OverlayText>
                </Link>
                <Link href="/">
                    <MdOutlineLaptopMac fontSize="50px" />
                    <OverlayText>CHAMADO TI</OverlayText>
                </Link>
                <Link href="/">
                    <MdOutlineHomeWork fontSize="50px" />
                    <OverlayText>EMPRESA</OverlayText>
                </Link>
                <Link href="/">
                    <MdPeopleAlt fontSize="50px" />
                    <OverlayText>RH</OverlayText>
                </Link>
            </Acess>
        </Container>
    );
};
