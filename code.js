

// На входе массив с наименованиями файлов
let dogsList = ["asset/dogs1.jpg","asset/dogs2.jpg","asset/dogs3.jpg","asset/dogs4.jpg"];

let indexPhoto = 0;
const len = dogsList.length;

// Запоминаем элементы кнопок и изображения
const prevP = document.querySelector('.prev');
const nextP = document.querySelector('.next');
let image = document.querySelector('.photo-style');

let photoPath = '';

function nextPhoto() {
	// Находим путь к файлу по индексу массива dogsList при нажатии правой кнопки
	if (indexPhoto === len-1) indexPhoto = 0
	else indexPhoto +=1;
	photoPath = dogsList[indexPhoto];
	image.style.opacity = 0;
	setTimeout(newPath, 600, photoPath);

}

function prevPhoto() {
	// Находим путь к файлу по индексу массива dogsList при нажатии левой кнопки
	if (indexPhoto === 0) indexPhoto = len-1
	else indexPhoto -=1;
	photoPath = dogsList[indexPhoto];
	image.style.opacity = 0;
	setTimeout(newPath, 600, photoPath);
}

function newPath(photoPath) {
	// Меняем путь к изображению в HTML файле
	image.src = photoPath;
	image.style.opacity = 1;
}

nextP.addEventListener("click", nextPhoto);
prevP.addEventListener("click", prevPhoto);

// Обработчик событий клавиатуры
document.addEventListener('keydown', function(event) {
  event.preventDefault();
  console.log(event.code);
  if (event.code === 'ArrowRight' || event.code === 'Tab') nextPhoto() 
  else if (event.code === 'ArrowLeft') prevPhoto();
})