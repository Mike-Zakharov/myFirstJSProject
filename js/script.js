'use strict';

const btn = document.querySelector('.btn'),
	  story = document.querySelector('.story'),
	  addForm = document.querySelector('form'),
	  addInput = addForm.querySelector('#username__input'),
	  addRadio = addForm.querySelector('[type="radio"]');

	  
addForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const name = addInput.value;
	
	function randomValueFromArray(array) {
		const random = Math.floor(Math.random()*array.length);
		return array[random];
	}

	const friends = ['Гендальф', 'Лютик', 'Джесси Пинкман', 'Эрлих Бахман','Джо Трибиани','Рик Санчез'],

		  locations = ['Пассифлоры(бардель)', 'Мории', 'заброшенного индейского кладбища', 'космопорта на Татуине', 'Зоны 51', 'Голубой Устрицы'],

		  incident = ['появился корчмарь и предложил по кружке ледяного пивка,а следом вышли прекрасные полуодетые девушки,которые на утро оказались полицейскими в чёрной кожаной одежде', 'детишки напали на них гурьбой и отжали всё что у них было,оставив бедолаг в одних портках', 'превратились в слизняков и ворча поползли прочь', 'из-за угла вышел отряд штурмовиков империи и посчитал их повстанцами, попытался убить, но естественно ни в кого не попали и ни кого не поймали', ],

		  stranger = ['весёлого деда с мутными глазами','Эдуарда Сурового','арберский хиппи','хайруанский контрабандист','блохорианский торговец'],

		  food = ['сомнительного вида неоновыми грибами','отличным косячком домбайской травы','разноцветными конфетками','меланжем с арракиса','сочным арбузом с планеты Хот(Hoth)'];

	let friendsItem = randomValueFromArray(friends),
		locationsItem = randomValueFromArray(locations),
		incidentItem = randomValueFromArray(incident),
		strangerItem = randomValueFromArray(stranger),
		foodItem = randomValueFromArray(food);

	let storyText = `На улице стояла прекрасная погода ${name} и ${friendsItem} взяли ${document.querySelector('input[name="drinks"]:checked').value} и решили прогуляться.По дорогеим встретился ${strangerItem} и угостил их ${foodItem}. Когда они дошли до ${locationsItem}, Они были поражены увиденным и застыли с глупыми рожами на несколько мгновений,как вдруг ${incidentItem}. ${name} и ${friendsItem} не удивились,ведь это было обычным делом для этих мест и бредовых историй подобных этой.`;

	let newStory = storyText;
	story.textContent = newStory;
	story.style.display = 'block';

});





