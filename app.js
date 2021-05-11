class User {
  constructor(fname, lname, phone, role, username, password, id, department) {
    this.fname = fname;
    this.lname = lname;
    this.phone = phone;
    this.role = role;
    this.username = username;
    this.password = password;
    this.id = id;
    // this.department = department;
  }
}
class Student extends User {
  constructor(fname, lname, phone, role, username, password, id) {
    super(fname, lname, phone, role, username, password, id);
  }
}

let stud1 = new Student("abc","def","206-818-1811","student","student", "1", "1");
let stud2 = new Student("abc","def","206-818-1811","student","student", 1, 1);
let allstud=[stud1,stud2];


function login(){
  let userID = document.getElementById("user").value;
  let passWord = document.getElementById("password").value;

  for (let i = 0; i < allstud.length; i++){
    if (allstud[i].id === userID && allstud[i].password === passWord) {
      window.location=("student.html");
      return;
    }
}
}
window.onload=()=>{
    document.getElementById("submit").onclick = login;
}
