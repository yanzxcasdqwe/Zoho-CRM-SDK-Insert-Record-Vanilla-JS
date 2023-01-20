ZOHO.embeddedApp.on("PageLoad",function(data){
    console.log(data);
    var formData = document.getElementById('form')

    formData.addEventListener('submit', function(event){
        event.preventDefault()

        var comp = document.getElementById('Company').value
        var fname = document.getElementById('First_Name').value
        var lname = document.getElementById('Last_Name').value

        document.getElementById("comp").innerHTML = "Company Name: " + comp
        document.getElementById("fname").innerHTML = "First Name: " + fname
        document.getElementById("lname").innerHTML = "Last Name: " + lname

        var recordData = {
            "Company": comp,
            "Last_Name": lname,
            "First_Name": fname
        }
        ZOHO.CRM.API.insertRecord({Entity:"Leads",APIData:recordData,Trigger:["workflow"]}).then(function(data){
            console.log(data);
            
        });
        document.getElementById('Company').value = ''
        document.getElementById('First_Name').value = ''
        document.getElementById('Last_Name').value = ''
    })
})

ZOHO.embeddedApp.init();
