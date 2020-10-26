import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import {loadImages} from '../../actions';
import {Button, Container, Modal, Row} from "react-bootstrap";
import ImageChild from "./Image";


const ImageGrid = (props) => {
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        loadImages()
    }, [])


    const {images, loadImages} = props;
    return (
        <Container>
            <br/>

            <Row>

                {images.map(image => (
                    <Button key={image.id} variant="light" onClick={() => setModalShow(true)}>
                        <ImageChild loadImages={loadImages} image={image}/>
                    </Button>

                ))}
            </Row>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </Container>


    )
        ;
}

const mapStateToProps = ({isLoading, images, error}) => ({
    isLoading,
    images,
    error,

});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);

function MyVerticallyCenteredModal(props) {

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                cosad
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
