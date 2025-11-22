/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

// 1. Create aliases
export const Cpp = Subjects.Cpp;
export const Java = Subjects.Java;
export const React = Subjects.React;
export interface Teacher extends Subjects.Teacher {}

// 2. Create and export constants for each Subject
export const cpp = new Cpp();
export const java = new Java();
export const react = new React();

// 3. Create and export a Teacher object
export const cTeacher: Teacher = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  experienceTeachingC: 10,
};

// ----- For Cpp -----
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// ----- For Java -----
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// ----- For React -----
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());