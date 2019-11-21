import React, { Component } from "react";
import MyLeaveHistory from '../../components/leave-my-history';
import LeaveTrack from '../../components/leave-track';
import LeaveStatus from '../../components/leave-status';
import LeaveCancelled from '../../components/leave-cancelled';

class LeaveHistory extends Component {
  render() {
    return (
        <section class="py-5">
        <nav>
        <div class="nav nav-pills flex-column flex-sm-row" id="nav-tab" role="tablist">
          <a class="flex-sm-fill text-sm-center nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Track Leave</a>
          <a class="flex-sm-fill text-sm-center nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Status</a>
          <a class="flex-sm-fill text-sm-center nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">History</a>
          <a class="flex-sm-fill text-sm-center nav-link" id="nav-cancelled-tab" data-toggle="tab" href="#nav-cancelled" role="tab" aria-controls="nav-contact" aria-selected="false">Cancelled Leaves</a>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><LeaveTrack /></div>
        <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"><LeaveStatus /></div>
        <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"><MyLeaveHistory /></div>
        <div class="tab-pane fade" id="nav-cancelled" role="tabpanel" aria-labelledby="nav-contact-tab"><LeaveCancelled /></div>
      </div>
</section>
    );
  }
}
export default LeaveHistory;
