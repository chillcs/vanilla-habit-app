const days = document.querySelectorAll('.day');
const prevBtn = document.querySelector('.btn1');
const nextBtn = document.querySelector('.btn2');
//
// Project Next/Prev Buttons ---
let dayCount = 0;
nextBtn.addEventListener('click', () => {
	dayCount++;
	if (dayCount < days.length) {
		days[dayCount - 1].classList.remove('day--active');
		days[dayCount].classList.add('day--active');
	} else if (dayCount === days.length) {
		dayCount--;
	}
});
prevBtn.addEventListener('click', () => {
	dayCount--;
	if (dayCount >= 0) {
		days[dayCount + 1].classList.remove('day--active');
		days[dayCount].classList.add('day--active');
	} else if (dayCount < 0) {
		dayCount++;
	}
});
//
// Add Task Button ---
const addBtn = document.querySelector('.btn3');
const tasks = document.querySelectorAll('.task');
addBtn.addEventListener('click', () => {
	tasks[dayCount].classList.add('new-task');
});
//
// Remove Task Button ---
const removeBtn = document.querySelector('.btn4');
removeBtn.addEventListener('click', () => {
	tasks[dayCount].classList.remove('new-task');
});
//
// Task Complete Button ---
const completeBtn = document.querySelector('.btn5');
completeBtn.addEventListener('click', () => {
	tasks[dayCount].classList.remove('new-task');
	tasks[dayCount].classList.add('task-complete');
});
//
// Task Delete Button ---
const deleteBtn = document.querySelector('.btn6');
deleteBtn.addEventListener('click', () => {
	tasks[dayCount].classList.remove('new-task');
	tasks[dayCount].classList.remove('task-complete');
});
