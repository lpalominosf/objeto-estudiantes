var michelle = {
	name: 'Michelle',
	points: 2000,
	isActive: true,
	courses: ['Intro JS', 'JS Avanzado', 'JS Master']
};

var alexandra = {
	name: 'Alexandra',
	points: 4100,
	isActive: true,
	courses: ['Intro JS', 'Intro UX', 'UX Master']
};

var andrea = {
	name: 'Andrea',
	points: 800,
	isActive: false,
	courses: ['Intro JS', 'JS Avanzado']
};

var students = [michelle, alexandra, andrea];

//Imprimir estudiantes activas
for(var i= 0; i< students.length; i++){
	if(students[i].isActive){
		console.log(students[i].name);
	}
}

//Imprimir puntos totales de la clase
var total= 0;
for(var i=0; i< students.length; i++){
	total += students[i].points;
}

//Imprimir el nombre de las estudiantes que llevaron el curso de JS Avanzado
for(var i= 0; i< students.length; i++){
	var studentCourses = students[i].courses;
	//["Intro JS", "JS Avanzado", "JS Master"] 
	for(var j = 0; j< studentCourses.length; j++){
		if(studentCourses[j] === 'JS Avanzado'){
			console.log(students[i].name); 
		}

	}
}

