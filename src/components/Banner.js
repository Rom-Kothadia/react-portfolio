import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle} from 'react-bootstrap-icons';
import headrImg from '../assets/img/header-img.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['Full Stack Developer', 'Web Developer']
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 -Math.random() * 100);
    const period = 2000;

    useEffect (() => {
        let ticker = setInterval (() => {
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, )

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);        
        }else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={6}>
                    <span className='tagline'>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm`}<br />{`Rom Kothadia`}<br />{`- `}<span className='wrap'>{text}</span></h1>
                    <p>
                        After developing major dashboard in manufaturing industry for two years 
                        ,the urge to learn more and dive further into web development  grew too strong to ignore.
                        <br /><br />
                        I'm currently holding "Master in Electrical and Computer Engineering" from the University of Windsor.
                        Right after my graduation I have joined manufaturing industry, where I get a chance to develope my programming skill in VBA.
                        We have use the VBA to create automated process-sheet and I also supported in database management for the softwares: Zuken and Cirris.
                        <br /><br />
                        I'm currently looking for full stack or front end engineering position.
                        I have experience writing HTML, CSS, javaScript, React, Nodejs and PostgreSQL. 
                    </p>
                    <button onClick={() => console.log('connect')}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={6}>
                    <img src={headrImg} alt='Headder Img'/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner;