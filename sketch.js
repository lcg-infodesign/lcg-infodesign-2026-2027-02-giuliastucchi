function setup() {
  createCanvas(windowWidth, windowHeight);
  background(95, 35, 61);
  angleMode(DEGREES);
  noLoop();

  /* calcolo delle dimensioni della griglia */
  let dimglifo = min(windowWidth, windowHeight) * 0.4;
  let numeroGlifi = 150;
  let numerocolonne = ceil(sqrt(numeroGlifi));
  let numerorighe = sqrt(numeroGlifi);
  let dimcolonna = windowWidth / numerocolonne;
  let xcorrente = 0;
  let ycorrente = 0;
  let dimriga = (windowHeight / numerorighe);

  /* disegno dei glifi nella griglia */
  for (let g = 0; g < numeroGlifi; g++) {
    Mioglifo(xcorrente + dimcolonna/2, ycorrente + dimriga/2, dimriga*0.7);
    xcorrente = xcorrente + dimcolonna;

    if (xcorrente >= windowWidth) {
      xcorrente = 0;
      ycorrente = ycorrente + dimriga;
    }
  }
}

function draw() {
}

function Mioglifo(_x, _y, _size, _rotCassa, _rotAgo) {
  /* posizionamento del glifo e palette colori */
  push();
  translate(_x, _y);

  let coloriCassa = [
    color(241, 220, 142),
    color(217, 131, 80),
    color(142, 180, 160)
  ];
  let coloreScelto = random(coloriCassa);
  push();

  /* cassa esterna, gancio e quadrante */
  let Mioraggio = random(_size*0.7, _size*1);
  _size = Mioraggio;

  /* gancio */
  noStroke();
  fill(coloreScelto);
  rectMode(CENTER);
  stroke(coloreScelto);
  ellipse(0, -_size * 0.60, _size * 0.22, _size * 0.22);

  /* spazio vuoto */
  fill(95, 35, 61);
  ellipse(0, -_size * 0.60, _size * 0.17, _size * 0.17);

  fill(coloreScelto); 
  rect(0, -_size * 0.51, _size * 0.14, _size * 0.09);

  /* quadrante */
  stroke(91, 122, 128);
  strokeWeight(0.5);
  fill(coloreScelto);
  ellipse(0, 0, _size, _size);

  /* interno del quadrante */
  stroke(95, 35, 61);
  fill(226,223,213);
  ellipse(0, 0, _size * 0.88, _size * 0.88);
  pop();

  /* tacche del quadrante */
  push();
  rotate(_rotAgo);
  stroke(91, 122, 128);
  strokeWeight(1);
  for (let t = 0; t < 8; t++) {
    push();
    rotate(t * (360 / 8));
    line(0, -_size * 0.4, 0, -_size * 0.38);
    pop();
  }
  
  /* ago della bussola con rotazione e dimensioni casuali */
  for(let i = 0; i < 1; i++) { /* ciclo direzione aghi*/
    let Miarotazione = random(360);
    let Mioraggio = random(_size/10, _size/4);
    push();
    rotate(Miarotazione);
    
    /* variabile per lungheza ago */
    let lunghAgo = random(_size * 0.25, _size * 0.40);
    
    /* aghi */
    stroke(95, 35, 61);
    strokeWeight(0.5);
    fill(95, 35, 61);
    triangle(-_size * 0.08, 0, _size * 0.08, 0, 0, -lunghAgo);
    stroke(95, 35, 61);
    strokeWeight(0.5);
    fill(95, 35, 61);
    triangle(-_size * 0.08, 0, _size * 0.08, 0, 0, lunghAgo);
    pop();
  }

  /* perno centrale a forma casuale */
  noStroke();
  fill(226, 223, 213);
  rectMode(CENTER);

  let formaPerno = random([0, 1, 2]);

if (formaPerno === 0) {   /* estrae un numero dalla variabile per decidere la forma del perno */
    /* cerchio*/
    ellipse(0, 0, _size * 0.1, _size * 0.1);
  } else if (formaPerno === 1) {
    /* triangolo */
    triangle(  0, -_size * 0.05,
      -_size * 0.05, _size * 0.04,
      _size * 0.05, _size * 0.04)
  } else {
    /* rombo */
    push();
    rotate(45);
    rect(0, 0, _size * 0.08, _size * 0.08);
    pop();
  }

  pop();
  pop();
}