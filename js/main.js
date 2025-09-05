(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

document.addEventListener('DOMContentLoaded', function() {
    // 1. Get all elements - using your exact HTML structure
    const trackForm = document.querySelector('form[name="wpcargo-track-form"]');
    const trackingInput = trackForm.querySelector('input[type="text"]');
    const resultSection = document.getElementById('wpcargo-result-print');
    const historySection = document.querySelector('.shipment-history-section'); // Add this class to your history section

    // 2. Initialize - hide results by default
    if (resultSection) resultSection.style.display = 'none';
    if (historySection) historySection.style.display = 'none';

    // 3. Remove form attributes that cause reload
    trackForm.removeAttribute('action');
    trackForm.removeAttribute('method');

    // 4. Sample shipment data - use your complete dataset
    const shipments = {
        "PP016926117US": {
            "status": "ON HOLD",
            "shipper": {
                "name": "COREY PFEIFER LARIMER",
                "address": "80 N CENTER ST SANTAQUIN, UT 84655",
                "phone": "(567) 704-1480"
            },
            "receiver": {
                "name": "SAMANTHA CRUMPTON",
                "address": "1517 HOBSON DR APARTMENT 5 RANTOUL, IL 61866",
                "phone": "(517) 599-6991"
            },
            "shipmentInfo": {
                "origin": "United States",
                "destination": "United States",
                "package": "VALVE INDEX FULL VR SET",
                "carrier": "DHL",
                "shipmentType": "Expresss",
                "weight": "12 LBS",
                "shipmentMode": "Land Shipping",
                "carrierRef": "016926117",
                "product": "VALVE INDEX FULL VR SET",
                "quantity": "1",
                "paymentMode": "CASH",
                "totalFreight": "1",
                "expectedDelivery": "05-30-2025",
                "departureTime": "18:00 pm",
                "pickupDate": "05-28-2025",
                "pickupTime": "16:30 pm",
                "comments": "* DELIVERY SCAN *"
            },
            "history": [
                {
                    "date": "05-30-2025",
                    "time": "11:00 am",
                    "location": "DELIVERY CENTER",
                    "status": "On Hold",
                    "updatedBy": "PostPlus Logistics",
                    "remarks": "PACKAGE MARKED AS DELINQUENT. DELIVERY ON HOLD FOR FUEL AND ADDITIONAL HANDLING SURCHARGES (IMMEDIATE $100 FEE REQUIRED TO COMPLETE DELIVERY)"
                },
                {
                    "date": "05-30-2025",
                    "time": "6:30 am",
                    "location": "IL DISTRIBUTION CENTER",
                    "status": "Enroute",
                    "updatedBy": "PostPlus Logistics",
                    "remarks": "Arrived at Hub"
                },
                {
                    "date": "05-29-2025",
                    "time": "10:30 am",
                    "location": "MOVING THROUGH NETWORK",
                    "status": "In Transit",
                    "updatedBy": "Post Plus Logistics",
                    "remarks": "InTransit to Next Facility"
                },
                {
                    "date": "05-28-2025",
                    "time": "18:00 pm",
                    "location": "UT DISTRIBUTION CENTER",
                    "status": "In Transit",
                    "updatedBy": "PostPlus Logistics",
                    "remarks": "PACKAGE SUCESSFULLY SHIPPED TO DESTINATION"
                },
                {
                    "date": "05-28-2025",
                    "time": "16:30 pm",
                    "location": "UT DISTRIBUTION CENTER",
                    "status": "Picked Up",
                    "updatedBy": "PostPlus Logistics",
                    "remarks": "* WE HAVE YOUR PACKAGE *"
                }
            ],
            "packages": [
                {
                    "quantity": "1",
                    "pieceType": "Box",
                    "description": "VALVE INDEX FULL VR SET",
                    "length": "150",
                    "width": "100",
                    "height": "80",
                    "weight": "12"
                }
            ]
        },
        "PP016926119US": {
            "status": "Enroute",
            "shipper": {
                "name": "Travis Triggs",
                "address": "400 Emery Dr, LONGMONT, CO 80501",
                "phone": "(567) 704-1480"
            },
            "receiver": {
                "name": "Ryan Klopack",
                "address": "8420 E MONTEBELLO AVE, SCOTTSDALE, AZ 85250",
                "phone": "(972) 839-8938"
            },
            "shipmentInfo": {
                "origin": "United States",
                "destination": "United States",
                "package": "SONY ALPHA ZV-E10 CAMERA",
                "carrier": "DHL",
                "shipmentType": "Express",
                "weight": "4 LBS",
                "shipmentMode": "Land Shipping",
                "carrierRef": "016926119",
                "product": "SONY ALPHA ZV-E10 CAMERA",
                "quantity": "1",
                "paymentMode": "CASH",
                "totalFreight": "1",
                "expectedDelivery": "09-05-2025",
                "departureTime": "18:30 pm",
                "pickupDate": "09-03-2025",
                "pickupTime": "17:45 pm",
                "comments": "* ARRIVAL SCAN *"
            },
            "history": [
                {
                    "date": "09-05-2025",
                    "time": "7:30 am",
                    "location": "AZ REGIONAL DISTRIBUTION CENTER",
                    "status": "Enroute",
                    "updatedBy": "Post Plus Logistics",
                    "remarks": "* ARRIVED AT FACILITY *"
                },
                {
                    "date": "09-04-2025",
                    "time": "12:00 pm",
                    "location": "MOVING THROUGH NETWORK",
                    "status": "In Transit",
                    "updatedBy": "Post Plus Logistics",
                    "remarks": "* IN TRANSIT TO NEXT FACILITY *"
                },
                {
                    "date": "09-03-2025",
                    "time": "18:30 pm",
                    "location": "LONGMONT CO PACKAGE SORTING CENTER",
                    "status": "In Transit",
                    "updatedBy": "Post Plus Logistics",
                    "remarks": "* DEPARTED FROM FACILITY *"
                },
                {
                    "date": "09-03-2025",
                    "time": "17:45 pm",
                    "location": "LONGMONT, CO 80501",
                    "status": "Picked Up",
                    "updatedBy": "Post Plus Logistics",
                    "remarks": "* WE HAVE YOUR PACKAGE *"
                }
            ],
            "packages": [
                {
                    "quantity": "1",
                    "pieceType": "Box",
                    "description": "SONY ALPHA ZV-E10 CAMERA",
                    "length": "120",
                    "width": "80",
                    "height": "60",
                    "weight": "6 LBS"
                }
            ]
        }
    };

    // 5. Form submission handler - FIXED
    trackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const trackingNumber = trackingInput.value.trim().toUpperCase();
        
        // Reset display
        if (resultSection) {
            resultSection.style.display = 'none';
            resultSection.innerHTML = '';
        }
        if (historySection) historySection.style.display = 'none';
        
        if (!trackingNumber) {
            showError("Please enter a tracking number");
            return;
        }
        
        showLoadingSpinner();
        
        // Simulate API delay
        setTimeout(() => {
            if (shipments[trackingNumber]) {
                displayShipmentInfo(trackingNumber);
                if (resultSection) resultSection.style.display = 'block';
                if (historySection) historySection.style.display = 'block';
            } else {
                showError("No results found - Tracking number does not exist");
            }
        }, 4000);
    });

    // 6. Display functions - USING YOUR EXACT HTML STRUCTURE
    function showLoadingSpinner() {
        if (!resultSection) return;
        resultSection.innerHTML = `
            <div class="text-center py-5">
                <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                <p class="mt-3">Tracking your shipment...</p>
            </div>
        `;
        resultSection.style.display = 'block';
    }

    function displayShipmentInfo(trackingNumber) {
        const shipment = shipments[trackingNumber];
        if (!resultSection || !shipment) return;
        
        // Make sure we have the original HTML structure
        if (!resultSection.querySelector('.shipper-details')) {
            resultSection.innerHTML = document.getElementById('wpcargo-result-template').innerHTML;
        }
        
        // Update tracking number
        const trackingNumberElement = resultSection.querySelector('h4');
        if (trackingNumberElement) trackingNumberElement.textContent = trackingNumber;
        
        // Update shipper info
        const shipperDetails = resultSection.querySelector('.shipper-details');
        if (shipperDetails) {
            shipperDetails.innerHTML = `
                ${shipment.shipper.name}<br>
                ${shipment.shipper.address}<br>
                ${shipment.shipper.phone}
            `;
        }
        
        // Update receiver info
        const receiverDetails = resultSection.querySelector('.receiver-details');
        if (receiverDetails) {
            receiverDetails.innerHTML = `
                ${shipment.receiver.name}<br>
                ${shipment.receiver.address}<br>
                ${shipment.receiver.phone}
            `;
        }
        
        // Update status badge
        const statusBadge = resultSection.querySelector('.badge');
        if (statusBadge) {
            statusBadge.textContent = shipment.status;
            statusBadge.className = 'badge ' + (
                shipment.status.includes('Pending') ? 'bg-warning text-dark' : 
                shipment.status.includes('ON HOLD') ? 'bg-danger text-light' :
                shipment.status.includes('Transit') ? 'bg-primary' : 'bg-success'
            );
        }
        
        // Update all info fields
        const info = shipment.shipmentInfo;
        const updateField = (selector, value) => {
            const element = resultSection.querySelector(selector);
            if (element) element.textContent = value;
        };
        
        updateField('.origin-info', info.origin);
        updateField('.destination-info', info.destination);
        updateField('.package-info', info.package);
        updateField('.carrier-info', info.carrier);
        updateField('.shipment-type-info', info.shipmentType);
        updateField('.weight-info', info.weight);
        updateField('.shipment-mode-info', info.shipmentMode);
        updateField('.carrier-ref-info', info.carrierRef);
        updateField('.product-info', info.product);
        updateField('.quantity-info', info.quantity);
        updateField('.payment-mode-info', info.paymentMode);
        updateField('.freight-info', info.totalFreight);
        updateField('.delivery-date-info', info.expectedDelivery);
        updateField('.departure-time-info', info.departureTime);
        updateField('.pickup-date-info', info.pickupDate);
        updateField('.pickup-time-info', info.pickupTime);
        updateField('.comments-info', info.comments);
        
        // Update history table
        const historyTable = document.querySelector('#shipment-history tbody');
        if (historyTable) {
            historyTable.innerHTML = shipment.history.map(item => `
                <tr class="history-row">
                    <td class="history-data date">${item.date}</td>
                    <td class="history-data time">${item.time}</td>
                    <td class="history-data location">${item.location}</td>
                    <td class="history-data status">${item.status}</td>
                    <td class="history-data updated-name">${item.updatedBy}</td>
                    <td class="history-data remarks">${item.remarks}</td>
                </tr>
            `).join('');
        }
        
        // Update packages table
        const packagesTable = document.querySelector('#wpc-multiple-package tbody');
        if (packagesTable) {
            packagesTable.innerHTML = shipment.packages.map(pkg => `
                <tr class="package-row">
                    <td class="package-data wpc-pm-qty">${pkg.quantity}</td>
                    <td class="package-data wpc-pm-piece-type">${pkg.pieceType}</td>
                    <td class="package-data wpc-pm-description">${pkg.description}</td>
                    <td class="package-data wpc-pm-length">${pkg.length}</td>
                    <td class="package-data wpc-pm-width">${pkg.width}</td>
                    <td class="package-data wpc-pm-height">${pkg.height}</td>
                    <td class="package-data wpc-pm-weight">${pkg.weight}</td>
                </tr>
            `).join('');
        }

        // Mobile table transformation
        if (window.innerWidth <= 768) {
            const tables = document.querySelectorAll('.wpcargo-table');
            
            tables.forEach(table => {
            const headers = Array.from(table.querySelectorAll('th')).map(th => th.textContent);
            const cells = table.querySelectorAll('td');
            
            cells.forEach((td, index) => {
                const headerIndex = index % headers.length;
                td.setAttribute('data-label', headers[headerIndex]);
            });
            });
        }
    }

    function showError(message) {
        if (!resultSection) return;
        resultSection.innerHTML = `
            <div class="card-body text-center py-5">
                <i class="fas fa-exclamation-triangle fa-3x text-danger mb-3"></i>
                <h3 class="text-danger">${message}</h3>
                <p>Please check your tracking number and try again.</p>
                <p class="text-muted">Example: SHI-123456789</p>
            </div>
        `;
        resultSection.style.display = 'block';
    }
});

// Print function
window.wpcargo_print = function(wpcargo_class) {
    const printContents = document.getElementById(wpcargo_class).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
};