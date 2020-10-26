import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import {loadImages} from '../../actions';
import {Button, Container, Modal, Row} from "react-bootstrap";
import ImageChild from "./Image";

let comments

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
                {comments}
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const ImageGrid = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [selectId, setSelectId] = useState();

    useEffect(() => {
        loadImages()

        let URL = `https://boiling-refuge-66454.herokuapp.com/images/`;
        let d = URL + selectId
        const fetchImage = async getImage => {

            const response = await fetch(`${d}`);
            const data = await response.json()

            return data;
        };
        fetchImage().then(r => {
            console.log(r);
            r.comments.map((r) => {

                comments.createElement('div').innerText = r.text

                console.log(r.text);
            })
        })

    }, [selectId, URL])

    const setModalShowApi = (id) => {
        setSelectId(id)
        setModalShow(true)
    }
    const {images, loadImages} = props;
    return (
        <Container>
            <br/>

            <Row>

                {images.map((image, idex) => (
                    <Button key={idex} variant="light">
                        <ImageChild setModalShowApi={setModalShowApi} image={image}/>
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

