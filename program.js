function priorityPrivilege(role, experience, activeStatus, department){
    switch(role){

        case "admin":  if(activeStatus){ 
                        if(experience<=5)
                            console.log("Limited admin access")
                        else (department=="IT") ? console.log("Full IT admin access") : console.log("Full general admin access")
        }else
            console.log("Admin Access Revoked")
            break;

        case "manager":  if(activeStatus){
                        if(experience<=3){
                            console.log("Limited manager access")
                        }else (department=="Sales") ? console.log("Full sales manager access"):console.log("Full manager access")
        }else
            console.log("Manager Access Revoked")
            break;

        case "user":  if(activeStatus){
                        (department=="Support")? console.log("Priority support access"):console.log("User access")
        }else
            console.log("User Access Revoked")
            break;
    default: console.log("Invalid Role")
            break;
    }
}


priorityPrivilege("admin",7,true,'IT')