

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

})(jQuery);
	//profile page
 function pageProfile() {
	window.location.href = "profile.html";
 }
 //sing
 var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//login 
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal = document.getElementById('id03');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
/*
const buyButton = document.getElementById('1roter');
const buyButton2 = document.getElementById('2roter');
const buyButton3 = document.getElementById('3roter');
const buyButton4 = document.getElementById('4roter');
const buyButton5 = document.getElementById('5roter');
buyButton.addEventListener('click', buyProduct);
buyButton2.addEventListener('click', buyProduct);
buyButton3.addEventListener('click', buyProduct);
buyButton4.addEventListener('click', buyProduct);
buyButton5.addEventListener('click', buyProduct);

const buyButton12 = document.getElementById('1switsh');
const buyButton22 = document.getElementById('2switsh');
const buyButton32 = document.getElementById('3switsh');
const buyButton42 = document.getElementById('4switsh');
const buyButton52 = document.getElementById('5switsh');
buyButton12.addEventListener('click', buyProduct);
buyButton22.addEventListener('click', buyProduct);
buyButton32.addEventListener('click', buyProduct);
buyButton42.addEventListener('click', buyProduct);
buyButton52.addEventListener('click', buyProduct); 

const buyButton13 = document.getElementById('1network');
const buyButton23 = document.getElementById('2network');
const buyButton33 = document.getElementById('3network');
const buyButton43 = document.getElementById('4network');
const buyButton53 = document.getElementById('5network');
buyButton13.addEventListener('click', buyProduct);
buyButton23.addEventListener('click', buyProduct);
buyButton33.addEventListener('click', buyProduct);
buyButton43.addEventListener('click', buyProduct);
buyButton53.addEventListener('click', buyProduct);


function buyProduct() {
    // يقوم بعرض مربع الحوار للتأكيد
    const isConfirmed = confirm('Are you sure to buy the product?');
    
    // فحص ما إذا تم تأكيد الشراء أم لا
    if (isConfirmed) {
        // قم بتنفيذ إجراء الشراء
        console.log('Product purchased!');
        // يمكنك وضع الشيفرة هنا لاتخاذ الإجراءات الفعلية مثل إجراء مكالمة API لشراء المنتج
    } else {
        // في حالة الرفض
        console.log('The product was not purchased.');
        // يمكنك وضع الشيفرة هنا لأي إجراءات إضافية تحتاج إليها
    }
}
*/


//shop 
let cart = [];

function addToCart(id, name, price) {
    // تحقق مما إذا كانت القطعة موجودة بالفعل في العربة
    const item = cart.find(product => product.id === id);
    if (item) {
        item.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }

    // تحديث عدد العناصر في العربة
    updateCartCount();

    // تخزين العربة في localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartCount() {
    document.getElementById('count').textContent = cart.reduce((acc, item) => acc + item.quantity, 0);
}

function clearCart() {
    cart = [];
    updateCartCount();
    localStorage.removeItem('cart');
}

// استرجاع العربة من localStorage عند تحميل الصفحة
window.onload = function() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartCount();
    }
};
