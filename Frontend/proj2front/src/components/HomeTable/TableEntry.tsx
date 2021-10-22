import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import './TableEntryStyle.css'
import Location from '../../models/location'
import { useState } from 'react'

const TableEntry = ({ loc, deleteLocation, updateTitle, qrHandler }: {
  loc: Location
  deleteLocation: any
  updateTitle: any
  qrHandler: (qrImage: string) => void
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
          
          <Form as={Container} className="tryme">
            <Row className="tryme">
              <Col xl={8} lg="auto" className="tryme">
                <Form.Control
                  as="textarea"
                  rows={2}
                  placeholder={loc.address}
                  readOnly
                  className="entryform"
                ></Form.Control>
              </Col>
              <Col xs="auto" className="tryme">
                <Button
                  variant="outline-dark"
                  className="qrbutton"
                  onClick={() => qrHandler("" + loc.id)}
                >QR <br/> Code
                </Button>
              </Col>
              <Col xs="auto" className="tryme">
                <Row>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    className="entrybutton"
                    onClick={() => { navigator.clipboard.writeText("http://localhost:3000/View/" + loc.id); alert("Copied to clipboard!"); }}
                  > Copy Link
                  </Button>
                </Row>
                <Row>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    className="entrybutton"
                    onClick={() => deleteLocation(loc)}
                  >Delete
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
