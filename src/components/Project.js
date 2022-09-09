import { Tab, Nav, Row, Col, Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';

export const Project = () => {

    const projects = [
        {
            title: "Project1",
            description: "Project Description",
            imgUrl: projImg1,
        },
        {
            title: "Project2",
            description: "Project Description",
            imgUrl: projImg2,
        },
        {
            title: "Project3",
            description: "Project Description",
            imgUrl: projImg3,
        },
        {
            title: "Project4",
            description: "Project Description",
            imgUrl: projImg1,
        },
    ];

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, nam? Voluptas, laboriosam ut aliquid aperiam maiores asperiores voluptatem delectus molestiae perferendis numquam, non repellat quidem adipisci ipsum harum ab commodi.</p>
                        <Tab.Container id='project-tabs' defaultActiveKey='first'>
                        <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab Three</Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
                            <Row>
                                {
                                    projects.map((project, index) => {
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
                            <Tab.Pane eventKey='second'>Lorem ipsum</Tab.Pane>
                            <Tab.Pane eventKey='third'>Lorem ipsum</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-right' alt='' src={colorSharp2}></img>
        </section>
    )
}