fetch("info.JSON")
  // get the JSON data
  .then(res=>{
    res.json().then(
        data=>{
            console.log(data)
            if(data.length > 0){
                var temp ="";
            
                data.forEach((u)=> {
                    temp += "<tr>";
                    temp += "<td>" + u.Machine_Name+"</td>";
                    temp += "<td>" + u.Machine_ID+"</td>";
                    temp += "<td>" + u.Energy_Consumed[0]+"</td>";
                    temp += "<td>" + u.Energy_Consumed[1]+"</td>";
                    temp += "<td>" + u.Energy_Consumed[2]+"</td>";
                    temp += "<td>" + u.Active_Power+"</td>";
                    temp += "<td>" + u.Reactive_Power+"</td>";
                    temp += "<td>" + u.CURRENT+"</td>";
                    temp += "<td>" + u.VOLTAGE+"</td>";
                    temp += "<td>" + u.POWER_FACTOR+"</td>";
                    temp += "<td>" + u.IDLE_TIME[0]+"</td>";
                    temp += "<td>" + u.IDLE_TIME[1]+"</td>";
                    temp += "<td>" + u.IDLE_TIME[2]+"</td></tr><hr/>";
            
                    document.getElementById("data").innerHTML = temp;
            
                })
            }
        }
    )
  })


