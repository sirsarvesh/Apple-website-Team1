$(document).ready(function() {
    const iphoneData = {
        title: 'iPhone 13 Pro',
        description: 'The iPhone 13 Pro is the most advanced smartphone Apple has ever made. Featuring a stunning ProMotion display, a powerful A15 Bionic chip, and an exceptional camera system, it sets a new standard for mobile devices.',
        image: 'iphone_13_pro.jpg'
    };

    // Display dynamic content
    $('#product-details').html(`
        <h2>${iphoneData.title}</h2>
        <img src="${iphoneData.image}" alt="${iphoneData.title}" style="max-width: 100%;">
        <p>${iphoneData.description}</p>
    `);

 
    $('#product-details').hover(
        function() {
            $(this).css('background-color', '#f5f5f5');
        },
        function() {
            $(this).css('background-color', '#fff');
        }
    );
});
