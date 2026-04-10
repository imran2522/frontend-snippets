const ageForm = document.querySelector("#age-form");
const birthInput = document.querySelector("#birthDate");
const targetInput = document.querySelector("#targetDate");
const errorEl = document.querySelector("#form-error");
const statsEl = document.querySelector("#stats");
const yearsEl = document.querySelector("#years");
const monthsEl = document.querySelector("#months");
const daysEl = document.querySelector("#days");
const detailsEl = document.querySelector("#details");

const todayIso = formatDateForInput(new Date());
targetInput.value = todayIso;
targetInput.max = todayIso;
birthInput.max = todayIso;

ageForm.addEventListener("submit", (event) => {
	event.preventDefault();
	clearError();

	const birthDate = parseInputDate(birthInput.value);
	const targetDate = parseInputDate(targetInput.value || todayIso);

	if (!birthDate || !targetDate) {
		showError("Please provide valid dates.");
		return;
	}

	if (birthDate > targetDate) {
		showError("Date of birth cannot be after the selected date.");
		return;
	}

	const age = calculateAge(birthDate, targetDate);
	const totalDays = daysBetween(birthDate, targetDate);
	const nextBirthday = findNextBirthday(birthDate, targetDate);
	const daysUntilBirthday = daysBetween(targetDate, nextBirthday);

	yearsEl.textContent = String(age.years);
	monthsEl.textContent = String(age.months);
	daysEl.textContent = String(age.days);
	statsEl.hidden = false;

	const targetLabel = targetDate.toLocaleDateString(undefined, {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	const birthdayText =
		daysUntilBirthday === 0
			? "Happy birthday!"
			: `Next birthday is in ${daysUntilBirthday} day${daysUntilBirthday === 1 ? "" : "s"}.`;

	detailsEl.textContent = `As of ${targetLabel}, you are ${age.years} year${age.years === 1 ? "" : "s"}, ${age.months} month${age.months === 1 ? "" : "s"}, and ${age.days} day${age.days === 1 ? "" : "s"} old (${totalDays.toLocaleString()} total days). ${birthdayText}`;
});

function calculateAge(birthDate, targetDate) {
	let years = targetDate.getFullYear() - birthDate.getFullYear();
	let months = targetDate.getMonth() - birthDate.getMonth();
	let days = targetDate.getDate() - birthDate.getDate();

	if (days < 0) {
		const previousMonthDays = new Date(
			targetDate.getFullYear(),
			targetDate.getMonth(),
			0
		).getDate();
		days += previousMonthDays;
		months -= 1;
	}

	if (months < 0) {
		months += 12;
		years -= 1;
	}

	return { years, months, days };
}

function findNextBirthday(birthDate, fromDate) {
	let year = fromDate.getFullYear();
	let candidate = createBirthdayDate(
		year,
		birthDate.getMonth(),
		birthDate.getDate()
	);

	if (candidate < fromDate) {
		year += 1;
		candidate = createBirthdayDate(year, birthDate.getMonth(), birthDate.getDate());
	}

	return candidate;
}

function createBirthdayDate(year, month, day) {
	const date = new Date(year, month, day);

	if (date.getMonth() !== month) {
		return new Date(year, month + 1, 0);
	}

	return date;
}

function daysBetween(start, end) {
	const startUtc = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
	const endUtc = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
	return Math.floor((endUtc - startUtc) / 86400000);
}

function parseInputDate(value) {
	if (!value) {
		return null;
	}

	const date = new Date(`${value}T00:00:00`);
	if (Number.isNaN(date.getTime())) {
		return null;
	}

	return date;
}

function formatDateForInput(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

function showError(message) {
	errorEl.textContent = message;
}

function clearError() {
	errorEl.textContent = "";
}
