import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import {loadImages} from '../../actions';
import {Button, Container, Modal, Row} from "react-bootstrap";
import ImageChild from "./Image";


const ImageGrid = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [selectId, setSelectId] = useState();
    console.log(selectId);

    useEffect(() => {
        const URL = `https://boiling-refuge-66454.herokuapp.com/images/`;
        const d = URL+selectId
        console.log(d);
        const fetchImage = async getImage => {
            const response = await fetch(`${d}`);
            const data = await response.json();
            if (response.status >= 400) {
                throw new Error(data.errors);
            }
            return data;
        };

        loadImages()

    }, [selectId])

    const setModalShowApi = (id) => {
        setSelectId(id)
        setModalShow(true)
    }
    const {images, loadImages} = props;
    return (
        <Container>
            <br/>

            <Row>

                {images.map(image => (
                    <Button key={image.id} variant="light" onClick={() => setModalShowApi(image.id)}>
                        <ImageChild image={image}/>
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
