$(document).ready(function () {
    // Smooth scrolling for navigation links
    $('.navbar-nav .nav-link').on('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();

        // Get the target section's ID from the href attribute
        var target = $(this).attr('href');

        // Scroll to the target section with animation
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70 // Adjust offset for fixed navbar height
        }, 800); // Animation duration in milliseconds
    });
});