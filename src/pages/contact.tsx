import * as React from "react";
import { useCallback, useState, useEffect } from "react";
import styled from "styled-components";
import media from "styled-media-query";
import MainLayout from "../layout/MainLayout";
import IconSuccess from "../images/circle-check-regular.inline.svg";
import IconError from "../images/circle-xmark-regular.inline.svg";

const Content = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  min-height: calc(90vh - 30px);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 15px;
    margin-bottom: 0px;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  max-width: 700px;
  min-width: 500px;

  ${media.lessThan("small")`
        padding-left: 20px;
        padding-right: 20px;
        min-width: 0;
        width: 100%;
    `};
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.palette.card.main};
  color: ${(props) => props.theme.palette.card.contrastText};
  border-radius: ${(props) => props.theme.borderRadiusNormal};
  max-width: 700px;
`;

const Line = styled.hr`
  margin-top: 10px;
  background-color: ${(props) => props.theme.palette.separator};
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

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  textarea,
  input {
    border: ${(props) => props.theme.palette.inputs.border};
  }

  textarea:focus,
  input:focus {
    outline: ${(props) => props.theme.palette.inputs.outline};
    outline-color: ${(props) => props.theme.palette.inputs.outlineColor};
  }
`;

type ButtonProps = {
  disabled?: boolean;
};
const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.theme.palette.button.standard.palette.main};
  opacity: ${(props) =>
    props.disabled
      ? props.theme.palette.button.standard.disabled.opacity
      : props.theme.palette.button.standard.enabled.opacity};
  color: ${(props) => props.theme.palette.button.standard.palette.contrastText};
  border-radius: ${(props) => props.theme.palette.button.standard.borderRadius};
  height: 40px;
  text-align: center;
  cursor: pointer;
  border: 0px;
`;

const Input = styled.input`
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  height: 40px;
`;

const TaskInput = styled(Input)`
  width: 50px;
  text-align: center;
  margin-left: 10px;
`;

const TextArea = styled.textarea`
  border-radius: ${(props) => props.theme.borderRadiusSmall};
  height: 100px;
`;

const Task = styled.div`
  margin-top: 20px;
`;

const Status = styled.div`
  height: 40px;
  color: ${(props) => props.theme.palette.secondary.main};

  ${media.lessThan("small")`
        height: 70px;
    `};
`;

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  text-align: center;
  padding-left: 20px;
  padding-right: 20px;

  svg {
    width: 100px;
  }

  ${media.lessThan("small")`
        svg {
            width: 50px;
        }
    `};

  ${media.between("small", "large")`
        svg {
            width: 70px;
        }
    `};
`;

const SuccessWrapper = styled(StatusWrapper)`
  svg {
    fill: ${(props) => props.theme.palette.iconPrimary};
  }
`;

const FailedWrapper = styled(StatusWrapper)`
  svg {
    fill: ${(props) => props.theme.palette.iconSecondary};
  }
`;

type UserInputState = {
  firstName: string;
  lastName: string;
  email: string;
  url: string;
  subject: string;
  message: string;
};

enum CardTypeOption {
  Input,
  Success,
  Failed,
}

type CardType =
  | CardTypeOption.Input
  | CardTypeOption.Success
  | CardTypeOption.Failed;

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const ContactPage = () => {
  const [userInput, setUserInput] = useState<UserInputState>({
    firstName: "",
    lastName: "",
    email: "",
    url: "",
    subject: "",
    message: "",
  });
  const [sendButtonStatus, setSendButtonStatus] = useState<boolean>(false);
  const [numbers, setNumbers] = useState<number[]>([0, 0]);
  const [isPrivacyAgreed, setIsPrivacyAgreed] = useState<boolean>(false);
  const [isFieldMissing, setIsFieldMissing] = useState<boolean>(false);
  const [cardType, setCardType] = useState<CardType>(CardTypeOption.Input);

  useEffect(() => {
    setNumbers([randomIntFromInterval(1, 10), randomIntFromInterval(1, 10)]);
  }, []);

  const sendClickHandler: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (event) => {
        event.preventDefault();

        const { firstName, lastName, email, subject, message } = userInput;
        if (
          firstName === "" ||
          lastName === "" ||
          email === "" ||
          subject === "" ||
          message === ""
        ) {
          setIsFieldMissing(true);
          return;
        }

        setSendButtonStatus(false);

        const endpoint =
          "https://sgxzrq6vo7.execute-api.us-east-1.amazonaws.com/default/sendContanctEmail";
        const body = JSON.stringify({
          senderFirstName: userInput.firstName,
          senderLastName: userInput.lastName,
          senderEmail: userInput.email,
          subject: userInput.subject,
          message: userInput.message,
        });
        const requestOptions = {
          method: "POST",
          body,
        };

        if (userInput.url === "") {
          fetch(endpoint, requestOptions)
            .then((response) => {
              if (!response.ok) throw new Error("Error in fetch");
              return response.json();
            })
            .then((response) => {
              console.log("Email sent successfully!", response);
              setSendButtonStatus(true);
              setUserInput({
                firstName: "",
                lastName: "",
                email: "",
                url: "",
                subject: "",
                message: "",
              });
              setCardType(CardTypeOption.Success);
            })
            .catch((error) => {
              console.log("An unkown error occured.", error);
              setCardType(CardTypeOption.Failed);
            });
        }
      },
      [userInput]
    );

  const inputChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      const name = event?.target?.name;
      if (name !== "") {
        setUserInput({
          ...userInput,
          [name]: event.target.value,
        });
      }
    },
    [userInput]
  );

  const taskInputHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (numbers[0] + numbers[1] === parseInt(event?.target.value)) {
        setSendButtonStatus(true);
      } else {
        setSendButtonStatus(false);
      }
    },
    [numbers]
  );

  return (
    <MainLayout isNavigationTransparent={false} isSmallLogo={true}>
      <Content>
        <Section>
          {cardType === CardTypeOption.Input && (
            <Card>
              <Header>
                <h1>Contact me:</h1>
                <Line />
              </Header>
              <Description>
                <form>
                  <Inputs>
                    <h2>About you</h2>
                    <label>First Name:</label>
                    <Input
                      name="firstName"
                      type="text"
                      onChange={inputChangeHandler}
                    />
                    <label>Last Name:</label>
                    <Input
                      name="lastName"
                      type="text"
                      onChange={inputChangeHandler}
                    />
                    <label>Email:</label>
                    <Input
                      name="email"
                      type="email"
                      onChange={inputChangeHandler}
                    />
                    <label style={{ display: "none" }}>Bot protection</label>
                    <Input
                      style={{ display: "none" }}
                      name="url"
                      type="text"
                      onChange={inputChangeHandler}
                    />
                    <h2>Message</h2>
                    <label>Subject:</label>
                    <Input
                      name="subject"
                      type="text"
                      onChange={inputChangeHandler}
                    />
                    <label>Your Message:</label>
                    <TextArea
                      name="message"
                      onChange={inputChangeHandler}
                    ></TextArea>
                    <div>
                      <Input
                        style={{ width: "20px", height: "20px" }}
                        type="checkbox"
                        name="privacyConsent"
                        onChange={(event) => {
                          setIsPrivacyAgreed(event.target.checked);
                        }}
                      />
                      &nbsp; Yes, I have noted the data protection and agree
                      that the data provided by me will be electronically
                      collected and stored.
                    </div>

                    <Task>
                      <label>{numbers[0] + " + " + numbers[1] + " ="}</label>
                      <TaskInput type="number" onChange={taskInputHandler} />
                    </Task>
                    <Button
                      disabled={!sendButtonStatus || !isPrivacyAgreed}
                      onClick={sendClickHandler}
                    >
                      Send
                    </Button>
                  </Inputs>
                </form>
                {isFieldMissing && (
                  <Status>
                    <label>
                      All fields are mandatory. Fill out every field please.
                    </label>
                  </Status>
                )}
              </Description>
            </Card>
          )}
          {cardType === CardTypeOption.Success && (
            <Card>
              <Header>
                <h1>Success!</h1>
                <Line />
              </Header>
              <SuccessWrapper>
                <IconSuccess />
                <label>
                  I have recieved your note. Please feel free to look around!
                  Talk to you soon!
                </label>
              </SuccessWrapper>
            </Card>
          )}
          {cardType === CardTypeOption.Failed && (
            <Card>
              <Header>
                <h1>Failed!</h1>
                <Line />
              </Header>
              <FailedWrapper>
                <IconError />
                <label>
                  Something went wrong! I have not received your message. Please
                  send me an email to: mail(at)uullrich.com
                </label>
              </FailedWrapper>
            </Card>
          )}
        </Section>
      </Content>
    </MainLayout>
  );
};

export default ContactPage;
