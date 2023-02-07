$("#submit").click(function () {
    // calculate weighted final grade
    iFinalGrade = ($("#assignments").val() * .5) +
        ($("#groupProjects").val() * .1) +
        ($("#quizzes").val() * .1) +
        ($("#midtermExam").val() * .1) +
        ($("#finalExam").val() * .1) +
        ($("#intex").val() * .1);
    iFinalGrade = iFinalGrade.toFixed(2);

    // solve for letter grade
    if (iFinalGrade >= 94) {
        sLetterGrade = 'A'
    } else if (iFinalGrade >= 90) {
        sLetterGrade = 'A-'
    } else if (iFinalGrade >= 87) {
        sLetterGrade = 'B+'
    } else if (iFinalGrade >= 84) {
        sLetterGrade = 'B'
    } else if (iFinalGrade >= 80) {
        sLetterGrade = 'B-'
    } else if (iFinalGrade >= 77) {
        sLetterGrade = 'C+'
    } else if (iFinalGrade >= 74) {
        sLetterGrade = 'C'
    } else if (iFinalGrade >= 70) {
        sLetterGrade = 'C-'
    } else if (iFinalGrade >= 67) {
        sLetterGrade = 'D+'
    } else if (iFinalGrade >= 64) {
        sLetterGrade = 'D'
    } else if (iFinalGrade >= 60) {
        sLetterGrade = 'D-'
    } else {
        sLetterGrade = 'E'
    };

    alert("Final Grade: " + iFinalGrade + "%" + "\n" +
        "Letter Grade: " + sLetterGrade);

    // hide form
    $("#inputForm").hide();
    $("#gradeCalculator").hide();

    // show output on page
    $("#finalGrade").show();
    $("#finalGrade").html('<b>Final Grade: </b>' + iFinalGrade + '%' + '<br>' + '<b>Letter Grade: </b>' + sLetterGrade);
    $("#reload").show();

})

// define which elements will be shown when the page first loads
function load() {
    $("#inputForm").show()
    $("#gradeCalculator").show()
    $("#finalGrade").hide()
    $("#reload").hide()
}