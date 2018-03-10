var grassArr = [];
var c = 0;
var side = 17;
var matrix = [

];
var gishatichner = []

var xotakerner = []

var arjer = []
var napastakner = []

function setup() {

	frameRate(5);
	createCanvas(matrix[0].length * side, matrix.length * side);
	background('#acacac');
	for (var y = 0; y < matrix.length; ++y) {
		for (var x = 0; x < matrix[y].length; ++x) {
			if (matrix[y][x] == 1) {
				var gr = new Grass(x, y);
				grassArr.push(gr);
			}
			else if (matrix[y][x] == 2) {
				xotakerner.push(new Xotaker(x, y));
			}
			else if (matrix[y][x] == 3) {
				gishatichner.push(new Gishatich(x, y))

			}
			else if (matrix[y][x] == 4) {
				arjer.push(new Arj(x, y))
			}
			else if (matrix[y][x] == 5) {
				napastakner.push(new Napastak(x, y))
			}
		}
	}

}

function draw() {
	for (var y = 0; y < matrix.length; y++) {

		for (var x = 0; x < matrix[y].length; x++) {
			if (matrix[y][x] == 1) {
				fill("green");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 0) {
				fill("#acacac");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 2) {
				fill("yellow");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 3) {
				fill("purple");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 4) {
				fill("brown");
				rect(x * side, y * side, side, side);
			}
			else if (matrix[y][x] == 5) {
				fill("white");
				rect(x * side, y * side, side, side);
			}
		}
	}
	for (var i in grassArr) {
		grassArr[i].bazmanal();
	}

	for (var i in gishatichner) {
		gishatichner[i].eat();
	}
	for (var i in gishatichner) {
		if (gishatichner[i].energy >= 18) {
			gishatichner[i].bazmanal()
		}
		else if (gishatichner[i].energy <= 0) {
			gishatichner[i].mahanal(i)
		}
	}
	for (var i in arjer) {
		arjer[i].eat();
	}
	for (var i in arjer) {
		if (arjer[i].energy >= 28) {
			arjer[i].bazmanal()
		}
		else if (arjer[i].energy <= 0) {
			arjer[i].mahanal(i)
		}
	}
	for (var i in xotakerner) {
		xotakerner[i].eat();

	}
	for (var i in xotakerner) {
		if (xotakerner[i].energy >= 14) {
			xotakerner[i].bazmanal();
		}
		else if (xotakerner[i].energy <= 0) {

			xotakerner[i].mahanal(i);
		}
	}
	for (var i in napastakner) {
		napastakner[i].eat();

	}
	for (var i in napastakner) {
		if (napastakner[i].energy >= 13) {
			napastakner[i].bazmanal();
		}
		else if (napastakner[i].energy <= 0) {

			napastakner[i].mahanal(i);
		}
	}

}
var g = 50

var m = 50
for (var y = 0; y < g; y++) {
	matrix.push([])
	for (var x = 0; x < m; x++) {
		matrix[y].push(0)
	}
}


for (var i = 0; i < 100; i++) {
	var a = Math.floor(Math.random() * g)
	var b = Math.floor(Math.random() * m)
	matrix[a][b] = 1
}

for (var i = 0; i < 50; i++) {
	var a = Math.floor(Math.random() * g)
	var b = Math.floor(Math.random() * m)
	matrix[a][b] = 2
}
for (var i = 0; i < 25; i++) {
	var a = Math.floor(Math.random() * g)
	var b = Math.floor(Math.random() * m)
	matrix[a][b] = 3
}
for (var i = 0; i < 5; i++) {
	var a = Math.floor(Math.random() * g)
	var b = Math.floor(Math.random() * m)
	matrix[a][b] = 4
}
for (var i = 0; i < 10; i++) {
	var a = Math.floor(Math.random() * g)
	var b = Math.floor(Math.random() * m)
	matrix[a][b] = 5
}