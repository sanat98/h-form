import React from 'react'

function Show() {
    let myData=localStorage;
    
    return (
        <div style={{fontFamily:"roboto",fontSize:20,fontWeight:"bold"}}>
            Start date: {myData.sDate}<br>
            </br>
            Start Time :{myData.sTime}<br>
            </br>
            Repeats: {myData.repeatType}<br>
            </br>
            Shift :{myData.shiftt}<br></br>
            Start Time: {myData.sTime}<br>
            </br>
            End Time :{myData.eTime}<br>
            </br>
           work Days of week: {myData.day1}, {myData.day2}

            

        </div>
    )
}

export default Show;
