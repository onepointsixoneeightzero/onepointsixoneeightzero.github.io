$(document).ready(function() {
    const courses = [
        'Introduction to Programming',
        'Data Structures',
        'Algorithms',
        'Operating Systems',
        'Database Management Systems',
        'Computer Networks',
        'Software Engineering'
    ];

    function renderCourses() {
        const $courseListDiv = $('#course-list');
        $courseListDiv.empty(); // Clear any existing content

        const $ul = $('<ul class="list-group"></ul>');
        courses.forEach(course => {
            const $li = $('<li class="list-group-item"></li>').text(course);
            $ul.append($li);
        });

        $courseListDiv.append($ul);
    }

    // Call the function to render the courses when the page loads
    renderCourses();
});
