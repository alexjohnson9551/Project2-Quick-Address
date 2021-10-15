import { Button, Card, Col, Form, Row } from "react-bootstrap";
import './TableEntryStyle.css';

const TableEntry = () => {

    return (
        <div>
            <Card border="dark" bg="light" className="entrycard">
                <Card.Header>
                    <Form.Control type="text" placeholder="Custom Title" size="lg"></Form.Control>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Row className="align-items-center">
                            <Col xs={8}>
                                <Form.Control as="textarea" rows={2} placeholder="Address or Lat/Long" readOnly></Form.Control>
                            </Col>
                            <Col>
                                <Row>
                                    <Button variant="primary" size="sm" className="entrybutton">
                                        Copy Link
                                    </Button>
                                </Row>
                                <Row>
                                    <Button variant="outline-danger" size="sm" className="entrybutton">
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