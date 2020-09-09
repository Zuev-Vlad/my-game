class Road {
    constructor(image, y) {
        this.y = y;
        this.x = 0;

        this.image = new Image;
        this.image.src = image;
    }

    Update(road) {
        this.y += speed;

        if (this.y > canvas.offsetWidth) {
            this.y = road.y - this.image.height + speed;
        }
    }
}
function Start() {
    timer = setInterval(Update, 1000 / 60)
}
function Clear() {
    clearInterval(timer);
}
function Update() {
    roads[0].Update(roads[1]);
    roads[1].Update(roads[0]);

    Drawe();
}
function Drawe() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < roads.length; i++) {
        console.log(image)
        ctx.drawImage
            (
                roads[i].image, //Изображение для отрисовки
                0, //Начальное положение по оси X на изображении
                0, //Начальное положение по оси Y на изображении
                roads[i].image.width, //Ширина изображения
                roads[i].image.height, //Высота изображения
                roads[i].x, //Положение по оси X на холсте
                roads[i].y, //Положение по оси Y на холсте
                canvas.width, //Ширина изображения на холсте
                canvas.width //Так как ширина и высота фона одинаковые, в качестве высоты указывается ширина
            );
    }
}


function KeyUp(event) {

    switch (event.keyCode) {
        case 37:
            console.log('Влево');
            break;
        case 38:
            console.log('Вверх');
            break;
        case 39:
            console.log('Вправо');
            break;
        case 40:
            console.log('Вниз');
            break;
    }
}


document.addEventListener("DOMContentLoaded", function () {
    

    const canvas = document.querySelector('#road-game');
    const ctx = canvas.getContext('2d');

    Resize();
    Update()

    document.addEventListener('resize', () => {
        console.log(3414)
    });

    document.addEventListener('keyup', function (e) { KeyUp(e) });

    const object = [];

    const roads = [
        new Road('roadimg.jpg', 0),
        new Road('roadimg.jpg', 259)
    ];

    const player = null;
    
    
function Resize() {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
}
});