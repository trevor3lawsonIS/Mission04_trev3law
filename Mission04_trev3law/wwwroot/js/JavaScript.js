$("#submit").click(function () {
    alert("working")
    alert($("#assignments").val())
    iFinalGrade = ($("#assignments").val() * .5) +
        ($("#groupProjects").val() * .1) +
        ($("#quizzes").val() * .1) +
        ($("#midtermExam").val() * .1) +
        ($("#finalExam").val() * .1) +
        ($("#intex").val() * .1)

    // case to solve for letter grade
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
    }

    alert(iFinalGrade + ' - ' + sLetterGrade)
})

//$("#submit").click(function () {
//    $("#inputForm").html() = (iFinalGrade + ' - ' + sLetterGrade)
//})

$("#submit").click(function () {
    $("#inputForm").hide()
    $("#gradeCalculator").hide()
})

$("#submit").click(function () {
    $("#finalGrade").show()
    $("#finalGrade").html() += (iFinalGrade + ' - ' + sLetterGrade)
})