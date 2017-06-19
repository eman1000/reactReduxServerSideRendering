import React from "react";
import { Modal } from "react-bootstrap";

export const DetailView = ({toggleModal}) => {
    return (
        <div>
            <Modal show>
                <Modal.Header closeButton onHide={()=>toggleModal()}>
                    <h1>Detail View</h1>
                </Modal.Header>
                <Modal.Body>
                    <h2>Modal Opened</h2>
                </Modal.Body>
            </Modal>
        </div>
    );
};
export default DetailView;
