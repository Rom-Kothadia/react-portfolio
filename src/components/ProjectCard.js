import { Col } from 'react-bootstrap';

export const ProjectCard = ({title, description, imgUrl, srcUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className='proj-imgbx' onClick={() => {window.open(srcUrl)}}>
                <img src={imgUrl} alt=''/>
                <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}