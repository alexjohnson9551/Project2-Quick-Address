import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import './TableEntryStyle.css'
import Location from '../../models/location'
import { useState } from 'react'

const TableEntry = ({loc, deleteLocation, updateTitle}: {
  loc: Location
  deleteLocation: any
  updateTitle: any
}) => {
  const [title, setTitle] = useState(loc.title)
  let tempValue: string = "" + title

  return (
    <div>
      <Card border="dark" bg="light" className="entrycard">
        <Card.Header>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Custom Title"
              value={tempValue}
              onChange={(e) => setTitle(e.target.value)}
            ></Form.Control>
            <Button
              variant="outline-primary"
              className="entrybutton"
              onClick={() => updateTitle(loc, title)}
            >
              Save
            </Button>
          </InputGroup>
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="align-items-center">
              <Col xs={8}>
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder={loc.address}
                  readOnly
                ></Form.Control>
              </Col>
              <Col>
                <Row>
                  <Button 
                  variant="primary" 
                  size="sm" 
                  className="entrybutton"
                  onClick={() => {navigator.clipboard.writeText("http://localhost:3000/View/"+loc.id)}}
                  >
                    Copy Link
                  </Button>
                </Row>
                <Row>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="entrybutton"
                    onClick={() => deleteLocation(loc)}
                  >
                    Delete
                  </Button>
                </Row>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TableEntry
