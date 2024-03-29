import React, { Component } from "react";
import Card from "../../commons/card";
import {
  Modal,
  Popover,
  Form,
  Col
} from "react-bootstrap";
import ViewFullLeaveHistory from "../../components/leave-system/view-full-leave-details";
class ManageLeaveHistory extends Component{
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
    render(){
      const popover = (
        <Popover id="modal-popover" title="popover">
          very popover. such engagement
        </Popover>
      );
        return(
          <div>
            <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Reject Reason</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="roleId">
                        <Form.Label>Reason </Form.Label>
                        <Form.Control type="text" />
                        </Form.Group>
                    </Form.Row>
                    
                    </Form>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" class="btn btn-success " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Confirm</button>
            <button type="submit" class="btn btn-danger " data-toggle="tooltip" data-placement="bottom"  onClick={this.handleClose}>Close</button>
          </Modal.Footer>
        </Modal>
            <section class="py-3">
            <Card title="Leave History">                         
                <table class="table table-striped table-hover card-text">
                  <thead>
                    <tr> 
                      <th>Employee Name</th>
                      <th>leave Type</th>
                      
                      <th>No of Days</th>
                      
                      <th>Accepted By</th>
                      <th>Status</th>
                      <th>View</th>
                      <th>Cancel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mark</td>
                      <td>Casual</td>
                      
                      <td>2</td>
                      
                      <td>Sinthuja</td>
                      <td>Pending</td>
                      <td>
                      <ViewFullLeaveHistory></ViewFullLeaveHistory>
                      </td>
                      <td>
                      &nbsp; &nbsp;
                      <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" 
                        data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                     </td>
                      
                    </tr>
                    <tr>
                      <td>Jacob</td>
                      <td>Casual</td>
                      
                      <td>2</td>
                      
                      <td>Sinthuja</td>
                      <td>Pending</td>
                      <td>
                      <ViewFullLeaveHistory></ViewFullLeaveHistory>
                      </td>
                      <td>
                      &nbsp; &nbsp;
                      <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" 
                        data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                      </td>
                      
                    </tr>
                    <tr>
                      <td>Larry</td>
                      <td>Casual</td>
                      
                      <td>2</td>
                     
                      <td>Sinthuja</td>
                      <td>Pending</td>
                      <td>
                      <ViewFullLeaveHistory></ViewFullLeaveHistory>
                      </td>
                      <td>
                      &nbsp; &nbsp;
                      <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" 
                        data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                      </td>
                      
                    </tr>
                    <tr>
                      <td>Sam</td>
                      <td>Casual</td>
                      <td>2</td>
                      <td>Sinthuja</td>
                      <td>Pending</td>
                      <td>
                      <ViewFullLeaveHistory></ViewFullLeaveHistory>
                      </td>
                      <td>
                      &nbsp; &nbsp;
                      <button type="submit" class="btn btn-danger btn-circle" size="lg-6" data-toggle="tooltip" 
                        data-placement="bottom" title="Reject" onClick={this.handleShow}><i class="fas fa-times"></i></button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                </Card>  
                </section>
                
                </div>
        )
    }
}
export default ManageLeaveHistory;