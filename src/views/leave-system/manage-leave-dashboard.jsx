import React, { Component } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import StatsCard from "../../commons/stats-card";
class ManageLeaveDashBoard extends Component{
    calendarComponentRef = React.createRef();

    state = {
        calendarWeekends: true,
        calendarEvents: [
            // initial event data
            { title: "Event Now", start: new Date() }
        ]
    };
    render(){
        return(
            
          
            <section class="py-5">


                < StatsCard/>

              

                 
            <div>
                
                 <div>
                <FullCalendar
                    defaultView="dayGridMonth"
                    header={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth"
                    }}
                    plugins={[dayGridPlugin, interactionPlugin]}
                    ref={this.calendarComponentRef}
                    weekends={this.state.calendarWeekends}
                    events={this.state.calendarEvents}
                    dateClick={this.handleDateClick}
                />
            </div>
                
            </div>
            </section>
        )
    }
}
export default ManageLeaveDashBoard;