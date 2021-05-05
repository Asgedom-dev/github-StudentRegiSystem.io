class User{
    constractor(fname,lname,phone,role,username,password,id,department){
        this.fname = fname;
        this.lname = lname;
        this.phone = phone;
        this.role = role;
        this.username = username;
        this.password = password;
        this.id = id;
        this.department = department;
    }
}
class Student{
    constractor(fname, lname, phone, role, username, password, id, entryYear, gpa){
        super(fname, lname, phone, role, username, password, id);
        this.entryYear = entryYear;
        this.gpa=gpa;
    }
}

class Admin{
    constractor(fname, lname, phone, role, username, password, id){
        super(fname, lname, phone, role, username, password, id)
    }
}
class Course{
    constractor(Id, name, description, code){
        super(Id, name, code);
        this.description =description;
    }
}



function login(){
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    for(let i=){

    }
}