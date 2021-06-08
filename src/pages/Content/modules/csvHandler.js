var createCsvWriter = require('csv-writer').createObjectCsvWriter;
var csvWriter = createCsvWriter({
    path: '../course_data.csv',
    header: [
        { id: 'course', title: 'Course' },
        { id: 'dep', title: 'Department' },
        { id: 'div', title: 'Division (Upper/Lower/Grad)' },
        { id: 'flags', title: 'Flags' },
        { id: 'mode', title: 'Mode of Instruction' },
        { id: 'req', title: 'Course Requirements' }
    ]
});
export var write = function (data) {
    csvWriter.writeRecords(data)
        .then(function () {
        console.log('Data saved successfully to CSV.');
    });
};
