import React, { Component } from "react";
import { Table, Modal, Form, Col } from "react-bootstrap";
import Card from "../../commons/card";

export default class UserList extends Component {
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
            <Modal.Title>Add New User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="roleId">
                  <Form.Label>User Id </Form.Label>
                  <Form.Control readOnly />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                  <Form.Label>E-mail</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Form.Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="submit"
              class="btn btn-danger btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Accept"
              onClick={this.handleClose}
            >
              Close
            </button>
            <button
              type="submit"
              class="btn btn-success btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Accept"
            >
              Add
            </button>
          </Modal.Footer>
        </Modal>

        <section class="py-3">
          <Card title="MANAGE USER LIST">
          <div class="d-flex flex-row-reverse ">
            <button
              type="submit"
              class="btn btn-success btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title="addUser"
              btn-align="right"
              onClick={this.handleShow}
            >
              Add User
            </button>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Table class="table table-striped table-hover card-text">
              <thead>
                <tr>
                  <th>User Id</th>
                  <th>Employee Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Betsy</td>
                  <td>betsy@gmail.com</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Sinthuja</td>
                  <td>sinthuja@gmail.com</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Priyanga</td>
                  <td>priyanga@gmail.com</td>
                </tr>
              </tbody>

              <nav aria-label="Page navigation example">
                <ul class="pagination -content-end">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </Table>
          </Card>
        </section>
      </div>
    );
  }
}
