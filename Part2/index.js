
const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');
 
const diamond = document.getElementById('diamonds');
const club = document.getElementById('clubs');
const heart = document.getElementById('hearts');
const spade = document.getElementById('spades');


function setCard() {
    const card = idInput.value.toLowerCase()
    if (card === 'diamond' || card === 'diamonds') {
        diamond.style.color = colorInput.value;
    } else if 
        (card === 'club' || card === 'clubs') {
            club.style.color = colorInput.value;
    } else if 
        (card === 'heart' || card === 'hearts') {
            card.style.color = colorInput.value;
    } else if 
        (card === 'spade' || card === 'spades') {
            card.style.color = colorInput.value;
        } else {
            alert('That is not a valid suit')
        }

}


