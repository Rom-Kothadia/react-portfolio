import { Tab, Nav, Row, Col, Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

//Image files 
import facerecognitionbrain from '../assets/img/face-recognition-brain.png';
import WeatherApp from '../assets/img/Weather-App.png';
import robofriends from '../assets/img/robofriends.png';
import Portfolio from '../assets/img/Portfolio.png';
import crudapp from '../assets/img/crud-app.png';

export const Project = () => {

    const projectsTab1 = [
        {
            title: "face-recognition-brain",
            description: "It detect the face of a person from the given picture using clarify API and store the user information.",
            imgUrl: facerecognitionbrain,
            srcUrl: 'https://rom-kothadia.github.io/face-recognition-brain/',
        },
        {
            title: "crud-app",
            description: "It perform all four basic operation: Create, Read, Update and Delete using react and json-server",
            imgUrl: crudapp,
            srcUrl: 'https://rom-kothadia.github.io/crud-app/',
        },
        {
            title: "robofriends",
            description: "It filters the user information based on search and generate unique robots using API",
            imgUrl: robofriends,
            srcUrl: 'https://rom-kothadia.github.io/robofriends/',
        },
        {
            title: "Weather-App",
            description: "It provides weather details based on the location.",
            imgUrl: WeatherApp,
            srcUrl: 'https://rom-kothadia.github.io/Weather-App/',
        },

    ];
    const projectsTab2 = [
        {},
        {
            title: "Portfolio",
            description: "",
            imgUrl: Portfolio,
            srcUrl: 'https://github.com/Rom-Kothadia/react-portfolio',
        },
    ];

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Click on any project to see the details.</p>
                        <Tab.Container id='project-tabs' defaultActiveKey='first'>
                        <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projectsTab1.map((project, index) => {
                                        return ( 
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey='second'>
                            <Row>
                                {
                                    projectsTab2.map((project, index) => {
                                        return ( 
                                            <ProjectCard
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                            </Tab.Pane>

                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}