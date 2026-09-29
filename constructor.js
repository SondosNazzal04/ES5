function Person(name, age)
{
	this.name = name;
	this.age = age;
}

Person.prototype.greet = function ()
{
	console.log('hello ' + this.name);
}

function Employee(name, age, employeeid, position)
{
	Person.call(this, name, age);
	this.employeeid = employeeid;
	this.position = position;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function ()
{
	console.log('Hello Employee: ' +this.name);
}

let emp1 = new Employee('Sondos', 22, 1, 'developer');
emp1.greet();

let emp2 = new Employee('Mahmoud', 22, 1, 'developer');
emp2.greet();

let emp3 = new Employee('Nazzal', 22, 1, 'developer');
emp3.greet();
