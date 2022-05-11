import * as React from 'react';
import { useMemo } from 'react';
import styled from 'styled-components';
import media from "styled-media-query";
import { StaticImage } from "gatsby-plugin-image"
import BuzzwordBingo, { queryToContent } from './BuzzwordBingo';
import { StaticQuery, graphql } from 'gatsby';

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
        border-radius: 50%;
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
    const Buzzwords = useMemo(() => <StaticQuery query={
        graphql`
            query DeveloperBuzzwords {
                allBuzzwordsJson {
                    edges {
                        node {
                            title
                            buzzwords {
                                explanation
                                githubLink
                                title
                            }
                        }
                    }
                }
            }
        `
    } 

    render={data =>
        <BuzzwordBingo content={ queryToContent(data) }/>
    } />, [])

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
                    During that time it was always clear to me to study computer science afterwards. <br/><br/>

                    In October 2011 my studies in computer science started at the Univerity of Ulm.
                    I knew that it would be challenging for me especially in math.
                    As a consequence I focused myself for the first two years on math (analysis, linear algebra, stochastics, etc. ) and theoretical computer science.
                    In the last year of my studies I had the possibility to choose lectures in web engineering and functional programming.
                    By the way it is great to see how many aspects of functional programming are used in JavaScript these days.
                    
                </Description>
                </Card>
                <Card>
                <Header>
                    <h1>Career by now...</h1>
                    <Line />
                </Header>
                <Description style={{marginBottom: '20px'}}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    since 2022-04
                                </td>
                                <td>
                                    <strong>Freelance Software Developer</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>2018-03</span> &mdash; <span>2022-03</span>
                                </td>
                                <td>
                                    <strong>Software Developer</strong><br/>
                                    Gebr. Märklin &amp; Cie. GmbH
                                </td>
                            </tr>
                            <tr>
                                <td>
                                <span>2017-08</span> &mdash; <span>2018-01</span>
                                </td>
                                <td>
                                    <strong>Junior Project Manager</strong><br/>
                                    Alfred Ritter GmbH &amp; Co. KG
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>2016-05</span> &mdash; <span>2017-07</span>
                                </td>
                                <td>
                                    <strong>Project Software Developer</strong><br/>
                                    AFI Solutions GmbH
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span>2015-03</span> &mdash; <span>2016-04</span>
                                </td>
                                <td>
                                    <strong>Junior Technology Consultant</strong><br/>
                                    ITM Beratungsgesellschaft mbH
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    If you want to hire me, I will send you my profile with more details about my former projects.
                </Description>
                </Card>
                <Card>
                <Header>
                    <h1>Developer Buzzwords...</h1>
                    <Line />
                </Header>
                <Description style={{marginBottom: '20px'}}>
                     { Buzzwords }
                </Description>
                </Card>
            </Section>
        </Content>
    );
};

export default AboutMe;