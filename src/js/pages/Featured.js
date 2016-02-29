import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";


import "./featured.scss";

export default class Featured extends React.Component {

  componentWillMount() {

  }
  componentDidMount() {
    var $ = require('jquery');
    var windowHeight = $( window ).height();

    var delta = 0;
    var currentSlideIndex = 0;
    var scrollThreshold = 50;
    var slides = $(".slide");
    var numSlides = slides.length - 1;

    var projects = $("#projects");
    var dragThreshold = 0.25;// "percentage" to drag before engaging
    var dragStart = null;	 // used to determine touch / drag distance
    var percentage = 0;
    var target;
    var previousTarget;

    function elementScroll (e) {

    	// --- Scrolling up ---
    	if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {

    		delta--;

    		if ( Math.abs(delta) >= scrollThreshold) {
      		prevSlide();
    		}
    	}

    	// --- Scrolling down ---
    	else {

    		delta++;

    		if (delta >= scrollThreshold) {
    			nextSlide();
    		}
    	}

    	// Prevent page from scrolling
    	return false;
    }

    function showSlide() {

    	// reset
    	delta = 0;

    	slides.each(function(i, slide) {
    		$(slide).toggleClass('active', (i >= currentSlideIndex)).css("height","");
    	});

    }

    function prevSlide() {

      currentSlideIndex--;

    	if (currentSlideIndex < 0) {
    		currentSlideIndex = 0;
    	}

    	showSlide();
    }

    function nextSlide() {

    	currentSlideIndex++;

    	if (currentSlideIndex > numSlides) {
    		currentSlideIndex = numSlides;
    	}

    	showSlide();
    }


    // Mobile interactions
    function touchStart(event) {

    	if (dragStart !== null) { return; }
    	if (event.originalEvent.touches) {
    		event = event.originalEvent.touches[0];
    	}

    	// where in the viewport was touched
    	dragStart = event.clientY;

    	// make sure we're dealing with a slide
    	target = slides.eq(currentSlideIndex)[0];

    	// disable transitions while dragging
    	target.classList.add('no-animation');

    	previousTarget = slides.eq(currentSlideIndex-1)[0];
    	previousTarget.classList.add('no-animation');
    }

    function touchMove (event) {

    	if (dragStart === null) { return; }
    	if (event.originalEvent.touches) {
    		event = event.originalEvent.touches[0];
    	}

    	delta = dragStart - event.clientY;
    	percentage = delta / windowHeight;

    	// Going down/next. Animate the height of the target element.
    	if (percentage > 0) {
    		target.style.height = (100-(percentage*100))+'%';
    		if (previousTarget) {
    			previousTarget.style.height = ''; 	// reset
    		}
    	}

    	// Going up/prev. Animate the height of the _previous_ element.
    	else if (previousTarget) {
    		previousTarget.style.height = (-percentage*100)+'%';
    		target.style.height = '';	// reset
    	}

    	// Don't drag element. This is important.
    	return false;
    }

    function touchEnd () {

    	dragStart = null;
    	target.classList.remove('no-animation');
    	if (previousTarget) {
    		previousTarget.classList.remove('no-animation');
    	}

    	if (percentage >= dragThreshold) {
    		nextSlide();
    	}
    	else if ( Math.abs(percentage) >= dragThreshold ) {
    		prevSlide();
    	} else {
    		// show current slide i.e. snap back
    		showSlide();
    	}

    	percentage = 0;

    }

    $(projects).on({
    	'touchstart': touchStart,
    	'touchmove': touchMove,
    	'touchend': touchEnd
    });

    $(window).on({
    	'DOMMouseScroll mousewheel': elementScroll
    });
  }
  componentWillUnmount() {

  }

  render() {

    return (
      <ReactCSSTransitionGroup transitionName="fade" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        <div id="featured">
          <div id="projects">
            <section id="project-0" class="slide active">
              <div class="logo-wrap">
                <div class="logo">ReBuild</div>
              </div>
              <div class="copy">
                <h1>Lorem ipsum doler sit met nunc</h1>
                <p class="text-reg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="#" class="view-project">View Project <i class="fa fa-chevron-right"></i></a>
              </div>
              <img src="../../style/img/feat-voodle.png" />
            </section>
            <section id="project-1" class="slide active">
              <div class="logo-wrap">
                <div class="logo">ReBuild</div>
              </div>
              <div class="copy">
                <h1>Lorem ipsum doler sit met nunc</h1>
                <p class="text-reg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut aliquip ex ea commodo consequat.</p>
                <a href="#" class="view-project">View Project  <i class="fa fa-chevron-right"></i></a>
              </div>
              <img src="../../style/img/feat-voodle.png" />
            </section>
            <section id="project-2" class="slide active">
              <div class="logo-wrap">
                <div class="logo">ReBuild</div>
              </div>
              <div class="copy">
                <h1>Lorem ipsum doler sit met nunc</h1>
                <p class="text-reg">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <a href="#" class="view-project">View Project  <i class="fa fa-chevron-right"></i></a>
              </div>
              <img src="../../style/img/feat-voodle.png" />
            </section>
          </div>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
