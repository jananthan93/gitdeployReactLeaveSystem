import React, { Component } from "react";
import {
  Table,
  Button,
  ModalBody,
  Modal,
  Tooltip,
  Popover,
  Form,
  Col,
  Thead,
  Tbody

} from "react-bootstrap";

import Card from '../../commons/card';

export default class LieuLeave extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
<div>
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header>
          <Modal.Title>Lieu Leave Request Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="startdate">
                <Form.Label>Start Date : </Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group as={Col} controlId="enddate">
                <Form.Label>End Date : </Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Form.Row>

            <Form.Group as={Col} controlId="days">
              <Form.Label>No Of Days :</Form.Label>
              <Form.Control readOnly />
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                <Form.Label>Reason</Form.Label>
                <Form.Control as="textarea" rows="2" />
              </Form.Group>
            </Form.Row>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="submit"
            class="btn btn-danger "
            data-toggle="tooltip"
            data-placement="bottom"
            title="close"
            onClick={this.handleClose}
          >
            Close
            </button>
          <button
            type="submit"
            class="btn btn-success "
            data-toggle="tooltip"
            data-placement="bottom"
            title="request"
          >
            Request
            </button>
        </Modal.Footer>
      </Modal>

      <section class="py-3">
        <Card title="REQUEST LIEU LEAVE HISTORY ">
          <div class="d-flex flex-row-reverse ">
            <button
              type="submit"
              class="btn btn-success"
              data-toggle="tooltip"
              data-placement="bottom"
              title="request"
              onClick={this.handleShow}
            >
              Request Lieu Leave
            </button>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Table class="table table-striped table-hover card-text">
            <thead>
              <tr>
                <th>From</th>
                <th>To</th>
                <th>No Of Days</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/06/2019</td>
                <td>15/06/2019</td>
                <td>04</td>
                <td>Frontend Testing</td>
              </tr>
              <tr>
                <td>12/06/2019</td>
                <td>15/06/2019</td>
                <td>04</td>
                <td>Frontend Testing</td>
              </tr>
              <tr>
                <td>12/06/2019</td>
                <td>15/06/2019</td>
                <td>04</td>
                <td>Frontend Testing</td>
              </tr>
              <tr>
                <td>12/06/2019</td>
                <td>15/06/2019</td>
                <td>04</td>
                <td>Frontend Testing</td>
              </tr>
            </tbody>
          </Table>
        </Card>

      </section>
      

      </div>

          );
  }
}

