function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active"); // Hide all pages
    });
    document.getElementById(pageId).classList.add("active"); // Show the selected page
}

function startQuiz(topic) {
    currentTopic = topic;
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    startTimer();
    showPage("quizPage");
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    const selectedAnswer = selectedOption.value;
    const correctAnswer = questions[currentTopic][currentQuestionIndex].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentTopic].length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    const resultText = document.getElementById("resultText");
    const happyGif = document.getElementById("happyGif");
    const sadGif = document.getElementById("sadGif");

    const percentageScore = (score / questions[currentTopic].length) * 100;

    if (percentageScore >= 70) {
        resultText.innerText = `Congratulations! You passed. ${percentageScore}%`;
        happyGif.style.display = "block";
        sadGif.style.display = "none";
    } else {
        resultText.innerText = `Sorry! You failed. ${percentageScore}%`;
        happyGif.style.display = "none";
        sadGif.style.display = "block";
    }

    showPage("resultPage");
}

document.addEventListener("DOMContentLoaded", function() {
    showPage("startPage"); // Show the start page initially
});
