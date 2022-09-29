var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var subjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var errButton = document.getElementById('button-err')
var flag =0
function validateName() {
	var name = document.getElementById('fname').value.trim();
	if (name.length == 0) {
		flag =1
		nameError.innerHTML = 'Name is Required';
		nameError.style.color = 'red'
		submitError.innerHTML = "Enter the Fields Correctly!!"
		submitError.style.color = 'red'
		errButton.style.backgroundColor = 'red'
		errButton.style.borderColor = 'red'
		return false;
	}

	if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
		flag=1
		nameError.innerHTML = 'Enter Your Full Name';
		nameError.style.color = 'red'
		submitError.innerHTML = "Enter the Fields Correctly!!"
		submitError.style.color = 'red'
		errButton.style.backgroundColor = 'red'
		errButton.style.borderColor = 'red'
		return false;
	}
	flag =0
	nameError.innerHTML = 'Name is valid';
	nameError.style.color = 'green'
	return true;
}

function validateEmail() {
	var email = document.getElementById('email').value.trim();
	if (email.length == 0) {
		flag = 1
		emailError.innerHTML = 'Email is Required';
		emailError.style.color = 'red'
		submitError.innerHTML = "Enter the Fields Correctly!!"
		submitError.style.color = 'red'
		errButton.style.backgroundColor = 'red'
		errButton.style.borderColor = 'red'
		return false;
	}

	if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
		flag =1 
		emailError.innerHTML = 'Please Enter a Valid Email';
		emailError.style.color = 'red'
		submitError.innerHTML = "Enter the Fields Correctly!!"
		submitError.style.color = 'red'
		errButton.style.borderColor = 'red'
		errButton.style.backgroundColor = 'red'
		return false;
	}
	flag=0
	emailError.innerHTML = 'Email is valid';
	submitError.innerHTML = ""
	emailError.style.color = 'green'
	return true;
}


function validateSubject() {
	var subject = document.getElementById('subject').value.trim();
	if (subject.length < 5) {
		flag=1
		subjectError.innerHTML = 'Please Enter Your Subject';
		subjectError.style.color = 'red'
		submitError.innerHTML = "Enter the Fields Correctly!!"
		submitError.style.color = 'red'
		errButton.style.borderColor = 'red'
		errButton.style.backgroundColor = 'red'
		return false;
	}
	flag=0
	subjectError.innerHTML = '';
	submitError.innerHTML = ""
	return true;
}

function validateMessage() {
	var message = document.getElementById('message').value.trim();
	var Required = 15;
	var left = Required - message.length;

	if (left > 0) {
		flag=1
		messageError.innerHTML = left + 'More Character Required';
		messageError.style.color = 'red'
		submitError.innerHTML = "Enter the Fields Correctly!!"
		submitError.style.color = 'red'
		errButton.style.borderColor = 'red'
		errButton.style.backgroundColor = 'red'
		return false;

	}
	if (flag==1){
		errButton.style.borderColor = 'green'
		errButton.style.backgroundColor = 'green'
	}
	messageError.innerHTML = 'Message is valid';
	messageError.style.color = 'green'
	submitError.innerHTML = ""
	return true;

}

//submission
$("#submit-form").submit((e) => {
	e.preventDefault()
	$.ajax({
		url: "https://script.google.com/macros/s/AKfycbycL2zptUPxppTxuPsQHy8eAxvzZzrQux5vt6LOihXZ2zAJYnxpg6UZJE6AKZnVZYhr/exec",
		data: $("#submit-form").serialize(),
		method: "post",
		success: function (response) {
			alert("Form submitted successfully")
			window.location.reload()
			//window.location.href="https://google.com"
		},
		error: function (err) {
			alert("Something Error")

		}
	})
})




(function () {

	'use strict';

	var isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	var fullHeight = function () {

		if (!isMobile.any()) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function () {
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function () {
		$(window).stellar();
	};

	var contentWayPoint = function () {
		var i = 0;
		$('.animate-box').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .animate-box.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						}, k * 100, 'easeInOutExpo');
					});

				}, 50);

			}

		}, { offset: '85%' });
	};



	var goToTop = function () {

		$('.js-gotop').on('click', function (event) {

			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			return false;
		});

		$(window).scroll(function () {

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});

	};

	var pieChart = function () {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor: "#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function () {
		if ($('#fh5co-skills').length > 0) {
			$('#fh5co-skills').waypoint(function (direction) {

				if (direction === 'down' && !$(this.element).hasClass('animated')) {
					setTimeout(pieChart, 400);
					$(this.element).addClass('animated');
				}
			}, { offset: '90%' });
		}

	};

	


	// Loading page
	var loaderPage = function () {
		$(".fh5co-loader").fadeOut("slow");
	};


	$(function () {
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
	});


}());