var student = /** @class */ (function () {
    function student(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
    student.prototype.getfullname = function () {
        return this.fname + this.lname;
    };
    return student;
}());
;
var ob1 = new student("suma", "gowda");
//var res1 =ob1.fname="suma";
//onsole.log(ob1.lname="gowda");
//console.log(res1);
console.log(ob1.getfullname());
alert("ur are beautiful");
