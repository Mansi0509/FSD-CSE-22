const stu = {
    name:"mansi",
    age: 20,
    branch: "CSE"

}
// const name = stu.name;
// const age = stu.age;
// const branch = stu.branch;

const {name:newname, age, branch } = stu;
console.log("Name=",newname);
console.log("age=",age);
console.log("Branch=",branch);
