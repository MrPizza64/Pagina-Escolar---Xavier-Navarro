import styled from "styled-components";
import { TextLarge, TextMedium, TextSmall, TittleLarge, TittleLargeBold, TittleMedium, TittleMediumBold } from "../components/Utilities/Texts"
import { useEffect, useState } from "react";


const InfoContainer = styled.div`
    align-items: left;
    max-width: 50%;
`
const CreatorContainer = styled.div`
    align-items: left;
    max-width: 50%;
    margin-top: 5vh;
    margin-bottom: 5vh;
    display: flex;
    flex-direction: left;
`

const TecnoImg = styled.img`
    margin: 1vh;
    width: 15vh;
    height: 15vh;
`

const MeImage = styled.img`
    width: 50%;
    height: auto;
`

const Secc = styled.div`
    place-items: center;
    margin-top: 20vh;
    margin-bottom: 20vh;
    text-align: center;
`
const CreatorPage = () => {

    const galerie = [
        '/xavier1.jpeg',
        '/xavier2.jpeg',
        '/xavier3.jpeg'
    ]

    const [index, setIndex] = useState(1)

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % galerie.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [galerie.length]);

    return (
        <>
            <TittleLargeBold>- Seccion de Creador -</TittleLargeBold>
            <TextSmall>En esta seccion observaras datos sobre quien es el creador y como fue creado este sitio web, entre estos:
                Que tecnologias se usaron?, El alcanze de los sitios webs, Como aprender a crear sitios webs?, etc
            </TextSmall>
            <br /> <br /> <br />
            <TittleMediumBold> - Creador -</TittleMediumBold>
            <CreatorContainer>
                <MeImage src={galerie[index]}/>
                <InfoContainer>
                    <TextMedium>
                        Nombre: Xavier Navarro
                    </TextMedium>
                    <TextMedium>
                        Alias: Exiron
                    </TextMedium>
                    <TextMedium>
                        Historia:
                    </TextMedium>
                    <TextMedium>
                        Naci el 25 de noviembre de 2007, actualmente a la fecha (2025) tengo 17 años de edad, <strong>Actualmente Practico MMA</strong>, pasando previamente por diversas artes marciales desde los 9 años
                        entre ellas, TKD, BJJ y algo de KICK,
                        <br /> <br />
                        Empeze a aprender sobre el desarrollo de software a los 15 años, y he seguido el aprendizaje hasta la presente fecha, actualmente me encuentro
                        explorando lenguajes como C++ y Go, Aunque esta pagina esta creada utilizando un Framework de TS llamado React.
                        <br /> <br />
                        Normalmente suelo hacer proyectos como Desarrollador Full Stack, pero me gusta mucho mas el desarrollo de BE que de FE, A continuacion de esta seccion veran
                        Datos de relevancia en el desarrollo web.
                    </TextMedium>
                </InfoContainer>
            </CreatorContainer>
            <Secc>
            <TittleMediumBold>- ¿Que tecnologias se usaron? -</TittleMediumBold>
            <TextMedium>Las tecnologias aplicadas para la creacion de este sitio web fueron: React, TypeScript, Git</TextMedium>
            <div>
                <TecnoImg src="/public/react.webp" />
                <TecnoImg src="/public/typescript.webp" />
                <TecnoImg src="/public/git.png" />
            </div>
            </Secc>

            <Secc>
                <TittleMediumBold>- El alcanze de los Sitios web -</TittleMediumBold>
                <TextMedium>El alcanze de los sitios web ha escalado a nivel global, pasando de ser una pequeña red de computadoras las cuales podian comunicarse entre si
                    mediante el uso de protocolos como el TCP, etc, ha lograr conectar a todo el mundo en una misma red, el uso de paginas web para la globalizacion de un
                    producto, un negocio, una idea, etc, ha revolucionado de manera unica la forma en la que vivimos,
                    <br/> <br/>
                    Con una pagina web podrias pasar a tener un negocio millonario, a ser famoso, etc, todo esto gracias a la globalizacion de la tecnologia digital

                </TextMedium>
            </Secc>
            <Secc>
                <TittleMediumBold>
                    - Como empezar a aprender -
                </TittleMediumBold>
                <TextMedium>Existen miles de tecnologias que puedes empezar a aprender respecto al desarrollo de software y paginas web,
                    existen miles de cursos gratuitos y no gratuitos en el internet a los cuales puedes acceder de manera facil y rapida,
                    Recomiendo fuertemente si no tienes experiencia alguna con el desarrollo el uso de aplicaciones como Scratch para aprender sobre
                    las bases de la programacion orientada a objetos, luego de scratch puedes seguir con un lenguaje sencillo como JavaScript o Python.
                </TextMedium>
            </Secc>

        </>
    );
};

export default CreatorPage;