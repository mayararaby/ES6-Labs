function courseInformation(options = { courseName, courseDuration, courseOwner }) {
    var defValues = {
        courseName: "Not set",
        courseDuration: 0,
        courseOwner: "Not set"
    }
    options = Object.assign(defValues, options);
    console.log(options);
}
courseInformation({
    courseName: "ES6",
    courseDuration: 3
})