import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import HeadingSection from "../Component/HeadingSection";
import Footer from "../Footer";
import "./Accordion.scss";

function FAQAccordion() {
  return (
    <>
      <HeadingSection description={`Những câu hỏi thường gặp`} />
      <Container className="FAQAccordion-Section-Container">
        <Accordion defaultActiveKey="0" className="FAQAccordion-Container">
          <Accordion.Item eventKey="0" className="FAQAccordion-item">
            <Accordion.Header className="FAQAccordion-heading">
              Một số câu hỏi thường gặp
            </Accordion.Header>
            <Accordion.Body className="FAQAccordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className="FAQAccordion-item">
            <Accordion.Header className="FAQAccordion-heading">
              Một số câu hỏi thường gặp
            </Accordion.Header>
            <Accordion.Body className="FAQAccordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className="FAQAccordion-item">
            <Accordion.Header className="FAQAccordion-heading">
              Một số câu hỏi thường gặp
            </Accordion.Header>
            <Accordion.Body className="FAQAccordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className="FAQAccordion-item">
            <Accordion.Header className="FAQAccordion-heading">
              Một số câu hỏi thường gặp
            </Accordion.Header>
            <Accordion.Body className="FAQAccordion-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
      <Footer />
    </>
  );
}
export default FAQAccordion;
