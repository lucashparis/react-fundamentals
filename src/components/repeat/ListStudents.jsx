import students from '../../data/students';
const student = students.map((student) => {
    return(
        <li key={student.id}>{student.id} - {student.name} - {student.note}</li>
    );
});

export default function ListStudents(){
    return (
        <div>
            <ul style={{listStyle: 'none'}}>
                {student}
            </ul>
        </div>
    );
};