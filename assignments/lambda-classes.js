// CODE here for your Lambda Classes
// Person
// First we need a Person class. This will be our base-class
// Person receives name age location all as props
// Person receives speak as a method.
// This method logs out a phrase Hello my name is Fred, I am from Bedrock where name and location are the object's own props

class Person {
        constructor(attributes) {
            this.name = attributes.name;
            this.age = attributes.age;
            this.location = attributes.location;
            this.name = attributes.name;
        }
        speak(){
            return `Hello my name is ${this.name}, I am from ${this.location}.`;
        }
    }
    
    // Instructor
    // Now that we have a Person as our base class, we'll build our Instructor class.
    // Instructor uses the same attributes that have been set up by Person
    // Instructor has the following unique props:
    // specialty what the Instructor is good at i.e. 'redux'
    // favLanguage i.e. 'JavaScript, Python, Elm etc.'
    // catchPhrase i.e. Don't forget the homies
    // Instructor has the following methods:
    // demo receives a subject string as an argument and logs out the phrase 'Today we are learning about {subject}' where subject is the param passed in.
    // grade receives a student object and a subject string as arguments and logs out '{student.name} receives a perfect score on {subject}'
    
    
    class Instructor extends Person {
        constructor(teacher) {
            super (teacher);
            this.specialty = teacher.specialty;
            this.favLanguage = teacher.favLanguage;
            this.catchPhrase = teacher.catchPhrase;
        }
        demo(subject){
            return `Today we are learning about ${subject}`;
        }
        grade(subject){
            return `${this.name} receives a perfect score on ${subject}`;
        }
    }
    
    // Student
    // Now we need some students!
    // Student uses the same attributes that have been set up by Person
    // Student has the following unique props:
    // previousBackground i.e. what the Student used to do before Lambda School
    // className i.e. CS132
    // favSubjects. i.e. an array of the student's favorite subjects ['Html', 'CSS', 'JavaScript']
    // Student has the following methods:
    // listsSubjects a method that logs out all of the student's favoriteSubjects one by one.
    // PRAssignment a method that receives a subject as an argument and logs out that the student.name has submitted a PR for {subject}
    // sprintChallenge similar to PRAssignment but logs out student.name has begun sprint challenge on {subject}
    
    class Student extends Person {
        constructor (students) {
            super(students);
            this.previousBackground = students.previousBackground;
            this.className = students.className;
            this.favSubjects = students.favSubjects;
        }
        listsSubjects(){
            return `${favSubjects} `;
        }
        PRAssignment(subject){
            return `${this.name} has submitted a PR for ${subject}`;
        }
        sprintChallenge(subject){
            return `${this.name} has begun sprint challenge on ${subject}`;
        }
    }
    
    
    // Project Manager
    // Now that we have instructors and students, we'd be nowhere without our PM's
    // ProjectManagers are extensions of Instructors
    // ProjectManagers have the following unique props:
    // gradClassName: i.e. CS1
    // favInstructor: i.e. Sean
    // ProjectManagers have the following Methods:
    // standUp a method that takes in a slack channel and logs `{name} announces to {channel}, @channel standy times!​​​​​
    // debugsCode a method that takes in a student object and a subject and logs out {name} debugs {student.name}'s code on {subject}
    
    
    class ProjectManagers extends Instructor {
        constructor(pm) {
            super(pm);
            this.gradClassName = pm.gradClassName;
            this.favInstructor = pm.favInstructor;
        }
        standUp(channel){
            return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
        };
        debugsCode(student, subject){
            return `${this.name} debugs ${student.name}'s code on ${subject}`;
        };
    }
    
    //     standUp(Web24_lecture) {
    //         return (`${this.name} announces to Web24_lecture, @channel Stand Up time!`);
    //     }
    //     debugsCode(student, subject) {
    //         return (`${name} debugs ${student.name}'s code on ${subject}`);
    //     }
    // }
    
    /////////////////
    const peter = new Instructor({
        name: 'Peter',
        location: 'Yellow house in Quahog',
        age: 35,
        favLanguage: 'JavaScript',
        specialty: 'Front-end',
        catchPhrase: `Don't forget the homies`
        });
    
    const quagmire = new Instructor({
        name: 'Quagmire',
        location: 'Blue house in Quahog',
        age: 35,
        favLanguage: 'C++',
        specialty: 'Front-end',
        catchPhrase: `Giggity`
        });
    
    const eric = new Student({
        name: 'Eric',
        location: 'Green house in South Park',
        age: 18,
        previousBackground: 'Graduated highschool.',
        className: 'Web22',
        favSubjects: ['English', 'Math', 'Computer Science'],
        });
        
    const stan = new Student({
        name: 'Stan',
        location: 'Dark green house in South Park',
        age: 20,
        previousBackground: 'Went to community college for a year.',
        className: 'Web11',
        favSubjects: ['History', 'Archeology', 'Biology'],
        });
    
    
    const michael = new ProjectManagers({
        name: 'Michael',
        location: 'Scranton',
        age: 37,
        gradClassName: 'CS1',
        favInstructor: 'Quagmire'
        });
    
    const dwight = new ProjectManagers({
        name: 'Dwight',
        location: 'Schrute Farms',
        age: 33,
        gradClassName: 'CS11',
        favInstructor: 'Peter'
        });
    
    
        // console.log(stan.name); 
        // console.log(stan.location); 
        // console.log(stan.age); 
        // console.log(stan.previousBackground); 
        // console.log(stan.className); 
        // console.log(stan.favSubjects); 
        // console.log(stan.PRAssignment('JS-III')); 
        // console.log(stan.sprintChallenge('JS-IV')); 
    
        // console.log(eric.name); 
        // console.log(eric.location); 
        // console.log(eric.age); 
        // console.log(eric.previousBackground); 
        // console.log(eric.className); 
        // console.log(eric.favSubjects); 
        // console.log(eric.PRAssignment('JS-III')); 
        // console.log(eric.sprintChallenge('JS-IV')); 
    
        console.log(quagmire.name); 
        console.log(quagmire.location); 
        console.log(quagmire.age); 
        console.log(quagmire.favLanguage); 
        console.log(quagmire.specialty); 
        console.log(quagmire.catchPhrase); 
        console.log(quagmire.demo('JS-III')); 
        console.log(quagmire.grade('JS-IV')); 
    
        console.log(peter.name); 
        console.log(peter.location); 
        console.log(peter.age); 
        console.log(peter.favLanguage); 
        console.log(peter.specialty); 
        console.log(peter.catchPhrase); 
        console.log(peter.demo('JS-III')); 
        console.log(peter.grade('JS-IV')); 
    
    