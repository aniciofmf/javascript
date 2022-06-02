/* Class */

class Helpers {
	sortByNameAsc(record1, record2) {
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	}

	printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	}
}

class Student extends Helpers {
	constructor() {
		super();
		this.currentEnrollment = [];
		this.studentRecords = [];
	}

	addStudent(id, name, paid) {
		this.studentRecords.push({ id, name, paid });
	}

	enrollStudent(id) {
		if (id && !this.currentEnrollment.includes(id)) {
			this.currentEnrollment.push(id);
		}
	}

	printCurrentEnrollment() {
		this.printRecords(this.currentEnrollment);
	}

	enrollPaidStudents() {
		this.currentEnrollment = this.paidStudentsToEnroll();
		this.printCurrentEnrollment();
	}

	remindUnpaidStudents() {
		this.remindUnpaid(this.currentEnrollment);
	}

	printRecords(recordIds) {
		var records = recordIds.map(this.getStudentFromId.bind(this));

		records.sort(super.sortByNameAsc);

		records.forEach(super.printRecord);
	}

	getStudentFromId(studentId) {
		return this.studentRecords.find(function matchId(record) {
			return record.id == studentId;
		});
	}

	paidStudentsToEnroll() {
		var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));

		var idsToEnroll = recordsToEnroll.map(this.getStudentId.bind(this));

		return [...this.currentEnrollment, ...idsToEnroll];
	}

	needToEnroll(record) {
		return record.paid && !this.currentEnrollment.includes(record.id);
	}

	getStudentId(record) {
		return record.id;
	}

	remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

		this.printRecords(unpaidIds);
	}

	notYetPaid(studentId) {
		var record = this.getStudentFromId(studentId);
		return !record.paid;
	}
}

var student = new Student();

student.addStudent(313, "Frank", true);
student.addStudent(410, "Suzy", true);
student.addStudent(105, "Henry", false);
student.addStudent(502, "Mary", true);
student.addStudent(664, "Bob", false);
student.addStudent(250, "Peter", true);
student.addStudent(867, "Greg", true);

student.enrollStudent(410);
student.enrollStudent(502);
student.enrollStudent(105);

student.printCurrentEnrollment();
console.log("------");
student.enrollPaidStudents();
console.log("------");
student.remindUnpaidStudents();
