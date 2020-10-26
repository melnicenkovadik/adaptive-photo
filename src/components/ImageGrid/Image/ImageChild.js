import React from 'react';
import {Image} from "react-bootstrap";


const ImageChild = ({image,setModalShowApi}) => {

    return (
                <Image onClick={() => setModalShowApi(image.id)} md={4} lg={4} alt={image.id} src={image.url} rounded/>
    )
        ;
}

export  default ImageChild
