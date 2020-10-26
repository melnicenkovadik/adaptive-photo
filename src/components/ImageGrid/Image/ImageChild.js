import React from 'react';
import {Image} from "react-bootstrap";


const ImageChild = ({image}) => {

    return (
                <Image key={image.id}
                       md={4} lg={4} alt={image.id} src={image.url} rounded/>
    )
        ;
}

export  default ImageChild
