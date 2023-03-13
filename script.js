const options = document.querySelectorAll(".option");

options.forEach(option => {
    option.addEventListener('click', () => {
        options.forEach(option => {
            option.classList.remove('highlight');
        });

        option.classList.add('highlight');
    });
})

const selections = {}

options.forEach((option, index) => {
    option.addEventListener('click', () => {
        const questionNum = Math.floor(index/5) + 1
        const selectedOptions = option.textContent.trim();
        selections[questionNum] = selectedOptions
    })
})