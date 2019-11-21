import React, { Component } from "react";
import LeaveData from '../../components/leave-system/leave-data'

class LeaveDashBoard extends Component{
   
 
    render(){
       
        
        return(
            <div class="col-lg-12 mt-2 mb-2">
                <LeaveData startDate="2019-05-29" endDate="2019-05-30" status="pending" reason="got to colombo"/>
            </div>
        )
    }
}
export default LeaveDashBoard;