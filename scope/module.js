/* Factory Pattern */

var moduleJS = studentModule();

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

// ********************************

function studentModule() {
	var currentEnrollment = [];
	var studentRecords = [];

	return { addStudent, enrollStudent, printCurrentEnrollment, enrollPaidStudents, remindUnpaidStudents };

	function addStudent(id, name, paid) {
		studentRecords.push({ id, name, paid });
	}

	function enrollStudent(id) {
		if (id && !currentEnrollment.includes(id)) {
			currentEnrollment.push(id);
		}
	}

	function printCurrentEnrollment() {
		printRecords(currentEnrollment);
	}

	function enrollPaidStudents() {
		currentEnrollment = paidStudentsToEnroll();
		printCurrentEnrollment();
	}

	function remindUnpaidStudents() {
		remindUnpaid(currentEnrollment);
	}

	function printRecords(recordIds) {
		var records = recordIds.map(getStudentFromId);

		records.sort(sortByNameAsc);

		records.forEach(printRecord);
	}

	function printRecord(record) {
		console.log(`${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`);
	}

	function getStudentFromId(studentId) {
		return studentRecords.find(function matchId(record) {
			return record.id == studentId;
		});
	}

	function sortByNameAsc(record1, record2) {
		if (record1.name < record2.name) return -1;
		else if (record1.name > record2.name) return 1;
		else return 0;
	}

	function paidStudentsToEnroll() {
		var recordsToEnroll = studentRecords.filter(needToEnroll);

		var idsToEnroll = recordsToEnroll.map(getStudentId);

		return [...currentEnrollment, ...idsToEnroll];
	}

	function needToEnroll(record) {
		return record.paid && !currentEnrollment.includes(record.id);
	}

	function getStudentId(record) {
		return record.id;
	}

	function remindUnpaid(recordIds) {
		var unpaidIds = recordIds.filter(notYetPaid);

		printRecords(unpaidIds);
	}

	function notYetPaid(studentId) {
		var record = getStudentFromId(studentId);
		return !record.paid;
	}
}
