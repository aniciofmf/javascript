/* Namespace */

var moduleJS = {
	currentEnrollment: [],
	studentRecords: [],
	addStudent(id, name, paid) {
		this.studentRecords.push({ id, name, paid });
	},
	enrollStudent(id) {
		if (id && !this.currentEnrollment.includes(id)) {
			this.currentEnrollment.push(id);
		}
	},
	printCurrentEnrollment() {
		this.printRecords(this.currentEnrollment);
	},
	enrollPaidStudents() {
		this.currentEnrollment = this.paidStudentsToEnroll();
		this.printCurrentEnrollment();
	},
	remindUnpaidStudents() {
		this.remindUnpaid(this.currentEnrollment);
	},
	printRecords(recordIds) {
		var records = recordIds.map(this.getStudentFromId.bind(this));

		records.sort(this.sortByNameAsc.bind(this));

		records.forEach(this.printRecord.bind(this));
	},
	printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	},
	getStudentFromId(studentId) {
		return this.studentRecords.find(function matchId(record) {
			return record.id == studentId;
		});
	},
	sortByNameAsc(record1, record2) {
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	},
	paidStudentsToEnroll() {
		var recordsToEnroll = this.studentRecords.filter(this.needToEnroll.bind(this));

		var idsToEnroll = recordsToEnroll.map(this.getStudentId.bind(this));

		return [...this.currentEnrollment, ...idsToEnroll];
	},
	needToEnroll(record) {
		return record.paid && !this.currentEnrollment.includes(record.id);
	},
	getStudentId(record) {
		return record.id;
	},
	remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));

		this.printRecords(unpaidIds);
	},
	notYetPaid(studentId) {
		var record = this.getStudentFromId(studentId);
		return !record.paid;
	},
};

// ********************************

moduleJS.addStudent(313, "Frank", true);
moduleJS.addStudent(410, "Suzy", true);
moduleJS.addStudent(105, "Henry", false);
moduleJS.addStudent(502, "Mary", true);
moduleJS.addStudent(664, "Bob", false);
moduleJS.addStudent(250, "Peter", true);
moduleJS.addStudent(867, "Greg", true);

moduleJS.enrollStudent(410);
moduleJS.enrollStudent(502);
moduleJS.enrollStudent(105);

moduleJS.printCurrentEnrollment();
console.log("------");
moduleJS.enrollPaidStudents();
console.log("------");
moduleJS.remindUnpaidStudents();
