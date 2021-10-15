import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import './TableEntryStyle.css';
import Location from '../../models/location';
import { useState } from "react";

const TableEntry = (props: { loc: Location, deleteLocation: any, updateTitle: any }) => {
    const [title, setTitle] = useState("");

    return (
        <div>
            <Card border="dark" bg="light" className="entrycard">
                <Card.Header>
                    <InputGroup>
                            <Form.Control
                                type="text" 
                                placeholder="Custom Title" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}>
                            </Form.Control>
                            <Button variant="outline-primary" className="entrybutton" onClick={() => props.updateTitle(props.loc, title)}>
                                Save
                            </Button>
                    </InputGroup>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row className="align-items-center">
                            <Col xs={8}>
                                <Form.Control as="textarea" rows={2} placeholder={props.loc.prelocation.address} readOnly></Form.Control>
                            </Col>
                            <Col>
                                <Row>
                                    <Button variant="primary" size="sm" className="entrybutton">
                                        Copy Link
                                    </Button>
                                </Row>
                                <Row>
                                    <Button variant="outline-danger" size="sm" className="entrybutton"
                                        onClick={() => props.deleteLocation(props.loc)}>
                                        Delete
                                    </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    );
};

export default TableEntry;