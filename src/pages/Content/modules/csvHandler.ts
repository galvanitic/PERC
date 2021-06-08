const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: '../course_data.csv',
  header: [
      {id: 'course', title: 'Course'},
      {id: 'dep', title: 'Department'},
      {id: 'div', title: 'Division (Upper/Lower/Grad)'},
      {id: 'flags', title: 'Flags'},
      {id: 'mode', title: 'Mode of Instruction'},
      {id: 'req', title: 'Course Requirements'}
  ]
});
interface Iwrite {
  course: string,
  dep: string,
  flags: string,
  mode: string,
  req: string
}

export const write = (data:Array<Iwrite>) => {
  csvWriter.writeRecords(data)
            .then(()=>{
              console.log('Data saved successfully to CSV.');
            })
}