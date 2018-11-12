var items = document.querySelectorAll('.item');
var cards = document.querySelectorAll('.goods__item');
var defaultDescriptions = document.querySelectorAll('.goods__item-buy');
var selectedDescriptions = document.querySelectorAll('.goods__item-buy__selected');
var disabledDescriptions = document.querySelectorAll('.goods__item-buy__disabled');

var addItemInputChange = function(item, card, defaultDescription, selectedDescription, disabledDescription) {
	item.addEventListener('change', function() {
		if (item.checked) {
            card.classList.add('selected');
            defaultDescription.classList.remove('visible');
            selectedDescription.classList.add('visible');
		} else {
            card.classList.remove('selected');
            defaultDescription.classList.add('visible');
            selectedDescription.classList.remove('visible');
		}
	});
    if (item.disabled) {
        card.classList.add('disabled');
        defaultDescription.classList.remove('visible');
        disabledDescription.classList.add('visible');
    }
};

for (let i = 0; i < items.length; i++) {
	addItemInputChange(items[i], cards[i], defaultDescriptions[i], selectedDescriptions[i], disabledDescriptions[i]);
}


var defaultMotos = document.querySelectorAll('.goods__item-moto');
var refuseMotos = document.querySelectorAll('.goods__item-moto__refuse');

var addEventListenersToItems = function(item, card, defaultMoto, refuseMoto) {
	card.addEventListener('mouseenter', function() {
        if (item.checked) {
        	defaultMoto.classList.remove('visible');
        	refuseMoto.classList.add('visible');
        } 
	});
    card.addEventListener('mouseleave', function () {
        if (item.checked) {
            defaultMoto.classList.add('visible');
            refuseMoto.classList.remove('visible');
        }
    });
    item.addEventListener('change', function() {
        if (item.checked === false) {
            defaultMoto.classList.add('visible');
            refuseMoto.classList.remove('visible');
        }
    });
}

for (let i = 0; i < items.length; i++) {
	addEventListenersToItems(items[i], cards[i], defaultMotos[i], refuseMotos[i]);
}

