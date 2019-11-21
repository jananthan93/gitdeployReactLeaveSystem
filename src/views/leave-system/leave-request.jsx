import React, { Component } from "react";

import MetricPill from '../../commons/metric-pill';
import Card from "../../commons/card";
import ApplyLeaveForm from "../../components/leave-system/apply-leave-form";
import LeaveData from "../../components/leave-system/leave-data";
const leaveCounts=[
    {title:'Casual',total:10,count:3},
    {title:'Annual',total:8,count:5},
    {title:'Medical',total:15,count:13},
    {title:'LieuLeave',total:15,count:7},
   
];
class RequestLeave extends Component{
    constructor(props) {
        super(props)
        this.state = {
            leaveRequest:{
                ApprovedBy:null,
                startDate:null,
                endDate:null,
                status:null,
                reason:null
            }
        }
       
    }
    render(){
        let leavePill=leaveCounts.map((leaveCount)=>{
            return(
                    <MetricPill title={leaveCount.title} total={leaveCount.total} count={leaveCount.count}/>
                )
        });
        return(
            <section class="py-3">
               <div class="col-lg-12 mb-2">
                <LeaveData startDate="2019-05-29" endDate="2019-05-30" status="pending" reason="got to colombo"/>
                </div>
                <div class="row">
                    <div class="col-lg-9">
                        <Card title="Leave Application Form">
                            <ApplyLeaveForm/>
                        </Card>
                    </div>
                <div class="col-lg-3">
                {leavePill}
                </div>
                </div>
                </section>
        )
    }
}
export default RequestLeave;