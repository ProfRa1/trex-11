var marks = [30,40,45,35,34,32,12,32,4,3,55,343,2,34,4,45,67,77,5,5,33,21];

function marks_average(){
  var sum = 0
for (var i = 0; i < marks.length; i++){
sum = sum + marks[i]
}
var avg = sum/marks.length
console.log(avg)
}

function setup() {
  createCanvas(400, 400);
  marks_average()
}

function draw() {
  background(150);
}