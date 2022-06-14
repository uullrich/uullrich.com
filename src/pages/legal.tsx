import * as React from "react"
import styled from 'styled-components';
import media from "styled-media-query";
import MainLayout from "../layout/MainLayout";

const Content = styled.main`
    padding-top: 60px;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    color: ${ props => props.theme.palette.background.contrastText };
    padding-bottom: 30px;
`;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    max-width: 700px;
    
    ${media.lessThan("small")`
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
    `};
`;

const Line = styled.hr`
    margin-top: 10px;
    background-color: ${ props => props.theme.palette.separator };
`;

const LegalPage = () => {
  return (
    <MainLayout 
        isSmallLogo={true} 
        isNavigationTransparent={false}>
        <Content>
            <Section>
                <h1>Legal notice</h1>
                Due to the german law I have to provide a legal notice. The further content is only available in german.
                <h2>Angaben gemäß § 5 TMG</h2>
                <Line />
                Uwe Ullrich <br/>
                Klosterstraße 22 <br/>
                73230 Kirchheim unter Teck <br/><br/>

                Telefon: (+49) 176 / 24071062<br/>
                E-Mail: mail(at)uullrich.com<br/>
                Web: uullrich.com <br/><br/>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz: 
                <br/>DE352265519
                <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <Line/>
                Uwe Ullrich <br/>
                Klosterstraße 22 <br/>
                73230 Kirchheim unter Teck
                <h2>Datenschutz</h2>
                <Line />
                
                <h3>Geltungsbereich</h3>
                Diese Datenschutzerklärung klärt Nutzer über die Art, den Umfang und Zwecke der Erhebung und Verwendung personenbezogener Daten durch den verantwortlichen Anbieter 
                [Uwe Ullrich, Klosterstraße 22, 73230 Kirchheim unter Teck] 
                auf dieser Website (im folgenden “Angebot”) auf. Die rechtlichen Grundlagen des Datenschutzes finden sich im Bundesdatenschutzgesetz (BDSG) und dem Telemediengesetz (TMG).
                
                <h3>Zugriffsdaten und Server-Logfiles</h3>
                Der Anbieter (beziehungsweise sein Webspace-Provider) erhebt Daten über jeden Zugriff auf das Angebot (so genannte Serverlogfiles). Zu den Zugriffsdaten gehören:
                <br/><br/>
                <ul>
                    <li>Name der abgerufenen Webseite,</li>
                    <li>Datei,</li>
                    <li>Datum und Uhrzeit des Abrufs,</li>
                    <li>übertragene Datenmenge,</li>
                    <li>Meldung über erfolgreichen Abruf,</li>
                    <li>Browsertyp nebst Version,</li>
                    <li>das Betriebssystem des Nutzers,</li>
                    <li>Referrer URL (die zuvor besuchte Seite),</li>
                    <li>IP-Adresse und der anfragende Provider.</li>
                </ul>
                Der Anbieter verwendet die Protokolldaten nur für statistische Auswertungen zum Zweck des Betriebs, der Sicherheit und der Optimierung des Angebotes. Der Anbieterbehält sich jedoch vor, die Protokolldaten nachträglich zu überprüfen, wenn aufgrund konkreter Anhaltspunkte der berechtigte Verdacht einer rechtswidrigen Nutzung besteht.
                
                <h3>Umgang mit personenbezogenen Daten</h3>
                Personenbezogene Daten sind Informationen, mit deren Hilfe eine Person bestimmbar ist, also Angaben, die zurück zu einer Person verfolgt werden können. Dazu gehören der Name, die Emailadresse oder die Telefonnummer. Aber auch Daten über Vorlieben, Hobbies, Mitgliedschaften oder welche Webseiten von jemandem angesehen wurden zählen zu personenbezogenen Daten. 
                <br/><br/>
                Personenbezogene Daten werden von dem Anbieter nur dann erhoben, genutzt und weiter gegeben, wenn dies gesetzlich erlaubt ist oder die Nutzer in die Datenerhebung einwilligen.
                
                <h3>Kontaktformular</h3>
                Sie können mich auf elektronischem Wege über das Kontaktformular kontaktieren, bspw. um mir Feedback mitzuteilen oder um mir Fragen zu stellen. Wenn Sie diese Möglichkeit nutzen, übermitteln Sie folgende Daten an mich:
                <ul>
                    <li>Mailadresse (um mit Ihnen Kontakt aufzunehmen)</li>
                    <li>Vor- und Zunamen (Zu Zwecken der Missbrauchsprävention)</li>
                    <li>Nachricht und Betreff</li>
                    <li>Telefonnummer (freiwillig)</li>
                </ul>
                Zusätzlich zu den Daten, die Sie mir freiwillig mitteilen, speichere ich den Zeitpunkt (Datum und Uhrzeit) der Übermittlung Ihrer Daten an mich, sowie Ihre IP-Adresse. Die Verarbeitung dieser Daten entspricht meinem berechtigten Interesse (Art. 6 (1) lit. f DS-GVO), um die Sicherheit unserer Systeme zu gewährleisten und Missbrauch entgegenzuwirken. Diese Daten, die ich während Ihrer Kontaktaufnahme zusätzlich erheben, werden gelöscht, sobald sie nicht mehr benötigt werden, spätestens das Anliegen Ihrer Kontaktaufnahme umfassend geklärt ist. <br/><br/>
                Mit dem Absenden des Kontaktformulars stimmen Sie der Verarbeitung Ihrer Daten durch mich zu. Die Rechtsgrundlage für die Verarbeitung Ihrer Daten zum Zwecke der Bearbeitung Ihrer Kontaktaufnahme ist Art. 6 (1) lit. a DS-GVO. Die Daten werden gespeichert, bis sie zur Erreichung des Zwecks der Konversation mit Ihnen nicht mehr erforderlich sind und das Anliegen Ihrer Kontaktaufnahme umfassend geklärt ist. <br/><br/>
                Wenn Ihre Kontaktaufnahme darauf abzielt, einen Vertrag mit mir abzuschließen, ist die zusätzliche Rechtsgrundlage für die Verarbeitung Ihrer personenbezogenen Daten Art. 6 (1) lit. b DS-GVO. Diese Daten werden so lange gespeichert, wie sie zur Durchführung des Vertrags erforderlich sind. Darüberhinausgehend speichere ich Ihre Daten nur um vertraglichen oder gesetzlichen Verpflichtungen (z.B. steuerlichen Pflichten) nachzukommen (Art. 6 (1) lit. c DS-GVO). <br/><br/>

                <h3>Kontakt über E-Mail</h3>
                Sie haben die Möglichkeit, mich per E-Mail zu kontaktieren. Ihre in der E-Mail übermittelten personenbezogenen Daten werden bei mir gespeichert. Eine Weitergabe der Daten an Dritte erfolgt nicht. Die Daten werden ausschließlich verarbeitet, um Ihre Kontaktaufnahme zu bearbeiten. Die Rechtsgrundlage für die Verarbeitung Ihrer personenbezogenen Daten ist Art. 6 (1) lit. f DS-GVO. Die Daten werden gespeichert, bis sie zur Erreichung des Zwecks der Konversation mit Ihnen nicht mehr erforderlich sind und das Anliegen Ihrer Kontaktaufnahme umfassend geklärt ist.<br/><br/>
                Wenn Ihre E-Mail darauf abzielt, einen Vertrag mit mir abzuschließen, ist die zusätzliche Rechtsgrundlage für die Verarbeitung Ihrer personenbezogenen Daten Art. 6 (1) lit. b DS-GVO. Diese Daten werden so lange gespeichert, wie sie zur Durchführung des Vertrags erforderlich sind. Darüberhinausgehend speichere ich Ihre Daten nur um vertraglichen oder gesetzlichen Verpflichtungen (z.B. steuerlichen Pflichten) nachzukommen.<br/><br/>
                Sie können die Einwilligung in die Verarbeitung Ihrer personenbezogenen Daten jederzeit widerrufen, indem Sie mir dies per Mail an „mail(at)uullrich.com“ mitteilen. In diesem Fall werden alle personenbezogenen Daten der Konversation gelöscht und eine Fortführung der Konversation ist nicht möglich.
                
                <h3>Kommentare und Beiträge</h3>
                Wenn Nutzer Kommentare im Blog oder sonstige Beiträge hinterlassen, werden ihre IP-Adressen gespeichert. Das erfolgt zur Sicherheit des Anbieters, falls jemand in Kommentaren und Beiträgen widerrechtliche Inhalte schreibt (Beleidigungen, verbotene politische Propaganda, etc.). In diesem Fall kann der Anbieter selbst für den Kommentar oder Beitrag belangt werden und ist daher an der Identität des Verfassers interessiert.

                <h3>Einbindung von Diensten und Inhalten Dritter</h3>
                Es kann vorkommen, dass innerhalb dieses Onlineangebotes Inhalte Dritter, wie zum Beispiel Videos von YouTube, Kartenmaterial von Google-Maps, RSS-Feeds oder Grafiken von anderen Webseiten eingebunden werden. Dies setzt immer voraus, dass die Anbieter dieser Inhalte (nachfolgend bezeichnet als „Dritt-Anbieter“) die IP-Adresse der Nutzer wahr nehmen. Denn ohne die IP-Adresse, könnten sie die Inhalte nicht an den Browser des jeweiligen Nutzers senden. Die IP-Adresse ist damit für die Darstellung dieser Inhalte erforderlich. Wir bemühen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Jedoch haben wir keinen Einfluss darauf, falls die Dritt-Anbieter die IP-Adresse z.B. für statistische Zwecke speichern. Soweit dies uns bekannt ist, klären wir die Nutzer darüber auf.

                <h3>Google Analytics</h3>
                Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) wird an einen Server von Google in den USA übertragen und dort gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten, die von Google gespeichert werden, in Verbindung bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu dem zuvor benannten Zweck einverstanden.

                <h3>Content-Delivery-Network</h3>
                AWS-CloudFront (Amazon)<br />
                Auf meiner Website verwende ich das Content Delivery Network ("CDN") „AWS CloudFront“ des Dienstanbieters „Amazon“ (Amazon EU S.a. r.l., 38 avenue John F. Kennedy, L-1855 Luxemburg).
                Bei einem Content Delivery Network handelt es sich um einen Online-Dienst, mit dessen Hilfe insbesondere große Mediendateien (wie z.B. Grafiken, Seiteninhalte oder Skripte) durch ein Netz regional verteilter und über das Internet verbundener Server ausgeliefert werden. Der Einsatz des Content Delivery Network von Amazon hilft mir bei der Optimierung der Ladegeschwindigkeiten meiner Website.
                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis meines berechtigten Interesses an einer sicheren und effizienten Bereitstellung, sowie Verbesserung der Stabilität und Funktionalität meiner Website.
                Weitere Informationen finden Sie in der Datenschutzerklärung von Amazon unter https://docs.aws.amazon.com/de_de/AmazonCloudFront/latest/DeveloperGuide/data-protection-summary.html
                
                <h3>Widerruf, Änderungen, Berichtigungen und Aktualisierungen</h3>
                Der Nutzer hat das Recht, auf Antrag unentgeltlich Auskunft zu erhalten über die personenbezogenen Daten, die über ihn gespeichert wurden. Zusätzlich hat der Nutzer das Recht auf Berichtigung unrichtiger Daten, Sperrung und Löschung seiner personenbezogenen Daten, soweit dem keine gesetzliche Aufbewahrungspflicht entgegensteht.
            </Section>
        </Content>
    </MainLayout>
  )
}

export default LegalPage;
