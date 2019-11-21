import React, { Component } from "react";
import { Table, Modal, Form, Col } from "react-bootstrap";
import Card from "../../commons/card";


export default class Role extends Component {
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
    // const popover = (
    //   <Popover id="modal-popover" title="popover">
    //     very popover. such engagement
    //   </Popover>
    // );
    // const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;

    return (
      <div>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Add New Role</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="roleId">
                  <Form.Label>Role Id </Form.Label>
                  <Form.Control readOnly />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Role Name</Form.Label>
                  <Form.Control type="text" />
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
              title="Accept"
              onClick={this.handleClose}
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-success "
              data-toggle="tooltip"
              data-placement="bottom"
              title="Accept"
            >
              Add Role
            </button>
          </Modal.Footer>
        </Modal>

        <section class="py-3">
          <Card title="Manage Role">
          <div class="d-flex flex-row-reverse ">
            <button
              type="submit"
              class="btn btn-success"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Accept"
              onClick={this.handleShow}
            >
              Add Role
            </button>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Table class="table table-striped table-hover card-text">
              <thead>
                <tr>
                  <th>Role Id</th>
                  <th>Role Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Directer</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>HR Manager</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Accountant</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Ass.HR</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Ass.Accountant</td>
                </tr>
              </tbody>
            </Table>
          </Card>
        </section>
      </div>
    );
  }
}
