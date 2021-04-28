// 
// Part 1: Fill in the function unhideLightbox. Afterwards, we will make this function run when a picture is clicked on.
// 

/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
	// This removes the .hidden class from the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.remove('hidden');

	// TODO: Remove the .hidden class from the div with the given id
	document.getElementById(lightboxID).classList.remove('hidden')
}


//
// Part 2: Make the unhideLightbox function run when a picture is clicked on.
// 

/**
 * Calls unhideLightbox with the id of the first lightbox
 */
function unhideLightbox1() {
	unhideLightbox("d1") 
}
document.getElementById("picture-1").onclick = unhideLightbox1


function unhideLightbox2() {
	unhideLightbox("d2") 
}
document.getElementById("picture-2").onclick = unhideLightbox2


function unhideLightbox3() {
	unhideLightbox("d3") 
}
document.getElementById("picture-3").onclick = unhideLightbox3


function unhideLightbox4() {
	unhideLightbox("d4") 
}
document.getElementById("picture-4").onclick = unhideLightbox4

function unhideLightbox5() {
	unhideLightbox("d5") 
}
document.getElementById("picture-5").onclick = unhideLightbox5

function unhideLightbox6() {
	unhideLightbox("d6") 
}
document.getElementById("picture-6").onclick = unhideLightbox6

function unhideLightbox7() {
	unhideLightbox("d7") 
}
document.getElementById("picture-7").onclick = unhideLightbox7


function unhideLightbox8() {
	unhideLightbox("d8") 
}
document.getElementById("picture-8").onclick = unhideLightbox8

function unhideLightbox9() {
	unhideLightbox("d9") 
}
document.getElementById("picture-9").onclick = unhideLightbox9


function unhideLightbox10() {
	unhideLightbox("d10") 
}
document.getElementById("picture-10").onclick = unhideLightbox10

function unhideLightbox11() {
	unhideLightbox("d11") 
}
document.getElementById("picture-11").onclick = unhideLightbox11

function unhideLightbox12() {
	unhideLightbox("d12") 
}
document.getElementById("picture-12").onclick = unhideLightbox12






// 
// Part 3: Now we need to be able to close the lightbox when we click outside the picture!
// 
function closeLightbox(lightboxID) {
	// This adds the .hidden class to the #lightbox-overlay div
	document.getElementById('lightbox-overlay').classList.add('hidden');

	// TODO: Add the .hidden class to the div with the given id
	document.getElementById(lightboxID).classList.add('hidden');
}


// This function class closeLightbox() for every .lightbox div - feel free to read it, but you do not have to understand it completely!
function closeAllLightboxes() {
	// get every .lightbox div, getElementsByClassName gives us an array 
	var lightboxElements = document.getElementsByClassName('lightbox');

	// sneak preview of Javascript loops, which will go through every element in an array of elements
	for (var i = 0; i < lightboxElements.length; i++) {
		// get id of this particular .lightbox div
		var id = lightboxElements[i].id;
		// call closeLightbox for this id
		closeLightbox(id);
	}
}

// TODO: set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.

document.getElementById("lightbox-overlay").onclick = closeAllLightboxes

