import * as React from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import { StaticImage } from "gatsby-plugin-image"

type Props = {
    children?: React.ReactNode
};

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    padding-top: 60px;

    h1 {
        margin-top: 15px;
    }

    .outerWrapper {
        width: 250px;
        height: 250px;
        border-radius: 50%;
    }

    .img {
        width: 250px;
        height: 250px;
    }
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    max-width: 700px;
    min-width: 500px;
    gap: 40px;

    ${media.lessThan("small")`
        padding-left: 20px;
        padding-right: 20px;
        min-width: 0;
        width: 100%;
    `};
`;

const Cards = styled.div``;

const Card = styled.div`
    background-color: rgba(0,0,0,0.5);
    color: white;
    border-radius: 10px;
    max-width: 700px;
`;

const Line = styled.hr`
    margin-top: 10px;
    background-color: #856ffb;
`;

const Header = styled.div`
    text-align: center;
`;

const Description = styled.div`
    margin-top: 15px;
    padding-left: 20px;
    padding-right: 20px;

    ${media.lessThan("small")`
        padding-left: 20px;
        padding-right: 20px;
    `};
`;
const AboutMe: React.FC<Props> = ({}) => {
    return (
        <Content>
            <Section>
                <Card>
                    <Header>
                        <h1>About Me</h1>
                        <Line />
                        <StaticImage 
                            id='me' 
                            src="../images/me.jpg" 
                            className='outerWrapper'
                            imgClassName='img'
                            alt={'Image from Uwe Ullrich'} />
                    </Header>
                    <Description>
                    Hi! <br/>
                    My name is Uwe Ullrich and I live in Kirchheim unter Teck. 
                    I am a freelance software and web engineer dedicated to develop across the fullstack. 
                    On the one hand I like to create web frontends with the whole <strong>React</strong> "ecosystem", but on the other hand it is also a joy for me to develop <strong>Node.js</strong>.
                    <br/><br/>
                    You can always ask me for hire. If I am available, we will hopefully work together. Let me support you with one or more of these topics:
                    <br/><br/>
                    <ul>
                        <li>Frontend development with JavaScript / TypeScript</li>
                        <li>Backend development with Node.js</li>
                        <li>Cross plattform development with the Qt Framework in C++</li>
                        <li>SAP ABAP OO development</li>
                    </ul>
                    </Description>
                </Card>
                <Card>
                <Header>
                    <h1>How my story began...</h1>
                    <Line />
                </Header>
                <Description style={{marginBottom: '20px'}}>
                    My programming journey started at the age of 14. 
                    Most of the time I hung around with my friends in Teamspeak.
                    There was this cool programming dude who was able to create a tool to control the Teamspeak server.
                    He showed me how it worked under the hood and I was on fire. 
                    That's why I would say my first programming language I got in touch with was Visual Basic 6.0. <br/><br/>

                    Several years later I got the chance to make my german Abitur (graduation) with a strong focus on information technology.
                    During that time I have learned programming with Java from scratch and the basics of information technology. 
                    We have developed some funny games in class with a 3D Engine (jMonkey Engine).

                </Description>
                </Card>
            </Section>
        </Content>
    );
};

export default AboutMe;