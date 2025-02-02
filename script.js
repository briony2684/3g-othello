let kifu = [];
let status = [[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,2,1,0,0],[0,0,1,2,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,1,2,0,0],[0,0,2,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]];
let flag = [[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]];
let num = 1;
let pj = 0
function draw() {
	const canvas = document.getElementById("canvas");
	if (canvas.getContext) {
		const context = canvas.getContext("2d");							
		if (num % 2 == 1) {
			var at = 1;
			var de = 2;
		}else {
			var at = 2;
			var de = 1;
		}
		let black = 0;
		let white = 0;
		context.fillStyle = "#008000";
		context.fillRect(0,0,520,590);
		for (let p = 0; p < 6; p ++) {
			context.strokeStyle = "#40C000";
			context.beginPath();
			context.moveTo(40,100 + 64 * p);
			context.lineTo(360,100 + 64 * p);
			context.lineTo(480,50 + 64 * p);
			context.lineTo(160,50 + 64 * p);
			context.closePath();
			context.stroke();
		}
		for (let z = 0; z < 6; z++) {
			for (let y = 0; y < 6; y++) {
				for (let x = 0; x < 6; x++) {
					if (status[z][y][x] == 1) {
						black += 1;
						context.fillStyle = "#000000";
						context.beginPath();
						context.arc(160 + 64 * x - 24 * y,370 + 10 * y - 64 * z,20,0,Math.PI * 2,true);
						context.closePath();
						context.fill();															
						context.strokeStyle = "#808080";
						context.beginPath();
						context.arc(160 + 64 * x - 24 * y,370 + 10 * y - 64 * z,20,0,Math.PI * 2,true);
						context.closePath();
						context.stroke();
						if (y == 4 && x != 5) {
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(46 + 64 * x,420 - 64 * z);
							context.lineTo(83 + 64 * x,420 - 64 * z);
							context.closePath();
							context.stroke();
						}
						if (x < 3 && y == 0 && z < 5) {							
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(146 + 64 * x,356 - 64 * z);
							context.lineTo(175 + 64 * x,356 - 64 * z);
							context.closePath();
							context.stroke();
						}
						if (x == 3 && y == 0 && z < 5) {							
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(146 + 64 * x,356 - 64 * z);
							context.lineTo(168 + 64 * x,356 - 64 * z);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(174 + 64 * x,353.5 - 64 * z);
							context.lineTo(168 + 64 * x,356 - 64 * z);
							context.closePath();
							context.stroke();
						}
						if ((x == 0 || x == 5) && y != 5) {													
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(142 + 64 * x - 24 * y,377.5 + 10 * y - 64 * z,19.3);
							context.lineTo(148 + 64 * x - 24 * y,375 + 10 * y - 64 * z,19.3);
							context.closePath();
							context.stroke();
						}
					}else if (status[z][y][x] == 2) {
						white += 1;
						context.fillStyle = "#FFFFFF";
						context.beginPath();
						context.arc(160 + 64 * x - 24 * y,370 + 10 * y - 64 * z,19.3,0,Math.PI * 2,true);
						context.closePath();
						context.fill();															
						context.strokeStyle = "#808080";
						context.beginPath();
						context.arc(160 + 64 * x - 24 * y,370 + 10 * y - 64 * z,19.3,0,Math.PI * 2,true);
						context.closePath();
						context.stroke();
						if (y == 4 && x != 5) {
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(46 + 64 * x,420 - 64 * z);
							context.lineTo(83 + 64 * x,420 - 64 * z);
							context.closePath();
							context.stroke();
						}
						if (x < 3 && y == 0 && z < 5) {							
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(146 + 64 * x,356 - 64 * z);
							context.lineTo(175 + 64 * x,356 - 64 * z);
							context.closePath();
							context.stroke();
						}
						if (x == 3 && y == 0 && z < 5) {							
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(146 + 64 * x,356 - 64 * z);
							context.lineTo(168 + 64 * x,356 - 64 * z);
							context.closePath();
							context.stroke();
							context.beginPath();
							context.moveTo(174 + 64 * x,353.5 - 64 * z);
							context.lineTo(168 + 64 * x,356 - 64 * z);
							context.closePath();
							context.stroke();
						}
						if ((x == 0 || x == 5) && y != 5) {													
							context.strokeStyle = "#40C000";
							context.beginPath();
							context.moveTo(142 + 64 * x - 24 * y,377.5 + 10 * y - 64 * z,19.3);
							context.lineTo(148 + 64 * x - 24 * y,375 + 10 * y - 64 * z,19.3);
							context.closePath();
							context.stroke();
						}
					}else if (flag[z][y][x] == 1) {
						context.fillStyle = "#FFFF00";
						context.beginPath();
						context.arc(160 + 64 * x - 24 * y,370 + 10 * y - 64 * z,2,0,Math.PI * 2,true);
						context.closePath();
						context.fill();	
					}else{
						context.fillStyle = "#000000";
						context.beginPath();
						context.arc(160 + 64 * x - 24 * y,370 + 10 * y - 64 * z,1.3,0,Math.PI * 2,true);
						context.closePath();
						context.fill();	
					}
				}
			}
		}						
		for (let z = 0; z < 6; z++) {
			for (let y = 0; y < 6; y++) {
				for (let x = 0; x < 6; x++) {	
						if (flag[z][y][x] == 1) { 				
						let n = x + 6 * y + 36 * z;
						context.fillStyle = "#000000"
						context.font = "15px serif";
						context.fillText(n,150 + 64 * x - 24 * y,365 + 10 * y - 64 * z);
						context.fillStyle = "#FFFF00"
						context.font = "14px serif";
						context.fillText(n,150 + 64 * x - 24 * y,365 + 10 * y - 64 * z);
					}
				}
			}
		}
		context.font = "42px serif";
		context.fillStyle = "#40C000";
		context.fillRect(260,490,210,75);
		if (pj == 2) {
			if (black > white) {								
				context.fillStyle = "#808000";
				context.fillRect(260,490,105,45);
			}else if (black < white) {
				context.fillStyle = "#808000";
				context.fillRect(365,490,105,45);
			}else{
				context.fillStyle = "#60A000";
				context.fillRect(260,490,210,45);
			}
		}else {
			if (at == 1) {
				context.fillStyle = "#808000";
				context.fillRect(260,490,105,45);
			}else {
				context.fillStyle = "#808000";
				context.fillRect(365,490,105,45);
			}
		}
		context.fillStyle = "#000000";
		context.beginPath();
		context.arc(282.5,512.5,18,0,Math.PI * 2,true);
		context.closePath();
		context.fill();	
		context.fillText(black,310,529);			
		context.fillStyle = "#FFFFFF";
		context.beginPath();
		context.arc(387.5,512.5,18,0,Math.PI * 2,true);
		context.closePath();
		context.fill();
		context.fillText(white,420,529);
		context.fillStyle = "#000000";
		context.font = "28px serif";
		if (pj == 2){
			context.fillText("終局",380,560);
		}else {
			context.fillText(num + "手目",365,560);
		}
	}
}
function calculate () {
	if (num % 2 == 1) {
		var at = 1;
		var de = 2;
	}else {
		var at = 2;
		var de = 1;
	}
	for (let z = 0; z < 6; z++) {
		for (let y = 0; y < 6; y++) {
			for (let x = 0; x < 6 ; x++) {
				flag[z][y][x] = 0;
			}
		}
	}			
	for (let z = 0; z < 6; z++) {
		for (let y = 0; y < 6; y++) {
			for (let x = 0; x < 6 ; x++) {
				if (status[z][y][x] != 0) {
					continue;
				}
				for (let c = -1; c < 2; c++) {
					for (let b = -1; b < 2; b++) {
						for (let a = -1; a < 2 ; a++) {
							if (a == 0 && b == 0 && c == 0) {
								continue;
							}
							for (let d = 1; d < 6; d++) {
								if(x + d * a > -1 && x + d * a < 6 && y + d * b > -1 && y + d * b < 6 && z + d * c > -1 && z + d * c < 6) {
									if (status[z + d * c][y + d * b][x + d * a] == de) {
										continue;
									}else if (status[z + d * c][y + d * b][x + d * a] == at) {
										if (d > 1) {
											flag[z][y][x] = 1;
											break;
										}else {
											break;
										}
									}else{
										break;
									}
								}else{
									break;
								}
							}
						}
					}
				}
			}
		}
	}
}
function manipulation (f) {
	let fx = f % 6;
	let fy = ((f % 36) / 6 | 0);
	let fz = (f / 36 | 0);
	if (num % 2 == 1) {
		var at = 1;
		var de = 2;
	}else {
		var at = 2;
		var de = 1;
	}
	status[fz][fy][fx] = at;
	for (let c = -1; c < 2; c++) {
		for (let b = -1; b < 2; b++) {
			for (let a = -1; a < 2 ; a++) {
				if (a == 0 && b == 0 && c == 0) {
					continue;
				}
				for (let d = 1; d < 6; d++) {
					if(fx + d * a > -1 && fx + d * a < 6 && fy + d * b > -1 && fy + d * b < 6 && fz + d * c > -1 && fz + d * c < 6) {
						if (status[fz + d * c][fy + d * b][fx + d * a] == de) {
							continue;
						}else if (status[fz + d * c][fy + d * b][fx + d * a] == at) {
							if (d > 1) {
								for (let e = 1; e < d; e++) {
									status[fz + e * c][fy + e * b][fx + e * a] = at;
								}
								break;
							}else {
								break;
							}
						}else{
							break;
						}
					}else{
						break;
					}
				}

			}
		}
	}
}
function input () {
	let f = document.getElementById("form").value;
	if (f < 0 || f > 215) {
		if (Math.random() < 0.05) {
			alert("＊いしのなかにいる！＊")
		}else {
			alert("無効な値です");
		}
		return;
	}
	let fx = f % 6;
	let fy = ((f % 36) / 6 | 0);
	let fz = (f / 36 | 0);
	if (flag[fz][fy][fx] == 0) {
		if (Math.random() < 0.05) {
			alert("＊おおっと＊");
		}else {
			alert("そこには置けません");
		}
		return;
	}
	manipulation(f);
	kifu.push(f);
	num += 1;
	calculate();
	pj = 2;
	for (let z = 0; z < 6; z++) {
		for (let y = 0; y < 6; y++) {
			for (let x = 0; x < 6 ; x++) {
				if (flag[z][y][x] == 1) {
					pj = 0;
				}
			}
		}
	}
	if (pj == 0) {
		draw();
		return;
	}
	num += 1;
	calculate();
	for (let z = 0; z < 6; z++) {
		for (let y = 0; y < 6; y++) {
			for (let x = 0; x < 6 ; x++) {
				if (flag[z][y][x] == 1) {
					pj = 1;
				}
			}
		}
	}
	if (pj == 1) {
		alert("置ける場所がないのでパスします");
		draw();
		return;
	}
	alert("終局 Thank you for playing！");
	draw();
}
function back () {
	let t = kifu.length;
	if (t == 0) {
		if (Math.random() < 0.05) {
			alert("＊むだです＊");
		}else {
			alert("これ以上は戻せません");
		}
		return;
	}
	status = [[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,2,1,0,0],[0,0,1,2,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,1,2,0,0],[0,0,2,1,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]];
	flag = [[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,1,0,0],[0,0,0,0,1,0],[0,1,0,0,0,0],[0,0,1,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,1,0],[0,0,0,1,0,0],[0,0,1,0,0,0],[0,1,0,0,0,0],[0,0,0,0,0,0]],[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]]];
	kifu.pop();
	num = 1;
	pj = 0;
	for (let n = 0; n < t - 1; n++) {
		manipulation(kifu[n]);
		num += 1;
		calculate();					
		pj = 2;
		for (let z = 0; z < 6; z++) {
			for (let y = 0; y < 6; y++) {
				for (let x = 0; x < 6 ; x++) {
					if (flag[z][y][x] == 1) {
						pj = 0;
					}
				}
			}
		}
		if (pj == 0) {
			continue;
		}
		num += 1;
		calculate();
		for (let z = 0; z < 6; z++) {
			for (let y = 0; y < 6; y++) {
				for (let x = 0; x < 6 ; x++) {
					if (flag[z][y][x] == 1) {
						pj = 1;
					}
				}
			}
		}
		if (pj == 1) {
			continue;
		}
	}
	draw();
	if (Math.random() < 0.05) {
		alert("＊なんだって？＊");
	}
}
draw();
let button_1 = document.getElementById("button_1");
button_1.addEventListener("click",input);	
let button_2 = document.getElementById("button_2");
button_2.addEventListener("click",back);