//TelegramBot Akfix NODE.js
//TOKEN
const 	TelegramBot = require('node-telegram-bot-api'),
		request = require('request'),
		fs = require('fs'),
		token = '463668011:AAG7pA49csaiaIkMJhSIppSgVCh-1scBjpI',
		bot = new TelegramBot(token, {polling: true });

//MAIN MENU
var Akfix = 'Akfix®';
var RTR = 'RTR MAX®';
var Other = 'Др. продукты♻️';
var Contact = 'Контакты☎️';
var About = '🔖О Нас';

//MENU AKFIX
var Glue = "Клеи🛢";
var Silicone = "Силиконы🛢";
var Foam = "Пены🛢";
var Sealant = "Герметика🛢";
var Aerosol = "Аэрозоли🛢";
var ForCar = "Ср.для Автомобилей🛢";
var Back = "◀️Назад◀️";

//Menu RTRmax
var Drel = "Дрели⚒";
var HammerDrill = "Перфораторы⚒";
var Bulgarians = "Болгарки⚒";
var Dryers = "Фены⚒";
var Chainsaws = "Электро-бензопилы⚒";
var Mixers = "Миксеры⚒";
var Compressors = "Компрессоры⚒";
var Welders = "Сварочные аппараты⚒";
var chat_id = msg.chat.id

//Keyboards
//Menu
var keyboardMenu = {
		reply_markup: JSON.stringify({
			keyboard: [
				[Akfix, RTR],
				[Other, Contact],
				[About]
			],
				"resize_keyboard": true,
				"one_time_keyboard": true
		})
	};

//MenuAkfix
var keyboardAkfix = {
	reply_markup: JSON.stringify({
		keyboard: [
			[Glue, Silicone],
			[Foam, Sealant],
			[Aerosol, ForCar],
			[Back]
		],
			"resize_keyboard": true,
			"one_time_keyboard": true
	})
};

//Menu RTRmax
var keyboardRTR = {
	reply_markup: JSON.stringify({
		keyboard: [
			[Drel, HammerDrill],
			[Bulgarians, Dryers],
			[Chainsaws, Mixers],
			[Compressors, Welders],
			[Back]
		],
			"resize_keyboard": true,
			"one_time_keyboard": true
	})
};

//Greetings function
bot.onText(/\/start/, function(msg, match){
	var text = 'Здравствуйте! ' + msg.chat.first_name + '\nВыберите продукты ♻️';
	bot.sendMessage(msg.chat.id, text, keyboardMenu);
	console.log(msg);
});

//Keyboard function Main menu
bot.on('message', function(msg){

	switch (msg.text){
		case Akfix:
				MenuAkfix(msg.chat.id)
			break
		case RTR:
				MenuRTR(msg.chat.id)
			break
		case Other:
				var textr = 'Извини меня ' + msg.chat.first_name + '\nэто функция не доработано😐';
				bot.sendMessage(msg.chat.id, textr);
			break
		case Contact:
				ContactFunc(msg.chat.id)
			break
		case About:
				AboutUse(msg.chat.id),
				LiveLocation(msg.chat.id)
			break
	};
	console.log(msg);
});

//Keyboard function MenuAkfix
bot.on('message', function(msg){

	switch (msg.text) {
		case Glue:
			break;
		case Silicone:
			break;
		case Foam:
			break;
		case Sealant:
			break;
		case Aerosol:
			break;
		case ForCar:
			break;
		case Back:
				Menu(msg.chat.id)
			break;
	}
});


//MenuAkfix function
function MenuAkfix(chat_id) {
	bot.sendMessage(chat_id, 'Выберите тип', keyboardAkfix);
};

//MenuRTRmax function
function MenuRTR(chat_id) {
	bot.sendMessage(chat_id, 'Выберите тип', keyboardRTR);
};

//Contact function
function ContactFunc(chat_id) {
	var inlinekey = {
		reply_markup: JSON.stringify ({
			inline_keyboard: [
				[{text: 'Obid Zohidjonov📱', url: 'https://t.me/zohidjonov_obidjon'}]
			]
		})
	};
		bot.sendMessage(chat_id, "Администратор🖥\nhttps://t.me/zohidjonov_obidjon", inlinekey);
};

//About function
function AboutUse(chat_id) {
	bot.sendMessage(chat_id, "Мы живем в ташкенте🌆");
};

//Location
function LiveLocation(chat_id) {
	bot.sendLocation(chat_id, 41.369207, 69.221183, {
        live_period: 86400,
    });
};

//Back function
function Menu(chat_id) {
	bot.sendMessage(chat_id, "Выберите продукты ♻️", keyboardMenu);
};
