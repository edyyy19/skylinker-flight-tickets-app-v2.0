// ========== Display Current Time

const realTime = () => {
  const hourDisplay = document.querySelector('.time-hour');
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes().toString().padStart(2, '0');

  hourDisplay.innerText = `${currentHour}:${currentMinutes}`;

  setTimeout(realTime, 1000);
};

realTime();
// ========== Display Battery Time
const batteryRealTime = () => {
  const batteryLevel = document.querySelector('.battery-level');

  navigator.getBattery().then((battery) => {
    const level = battery.level;
    const status = level * 100;
    batteryLevel.style.width = status;
  });
};
batteryRealTime();
// =========== Generate Page 2 ==============
const bodyPreview = document.querySelector('.body-preview');
const goToPage2Btn = document.querySelector('.button-next-page');

const ticketCardsInfo = [
  {
    id: 1,
    flightName: 'TAROM 6E-723',
    companyLogo:
      'https://flyawaysimulation.com/images/add-ons/3248/737tarom-1zip-7-thumbnail.jpg',
    boardingHour: '17:00',
    arrivalHour: '17:50',
    flightDuration: '1 h : 50 m',
    abbreviatedBoardingAirport: 'OTP',
    abbreviatedArrivalAirpot: 'BUD',
    boardingCountry: 'Romania',
    arrivalCountry: 'Budapesta',
    fullNameBoardingAirport: 'Henri Coanda Airport',
    fullnameArrivalAirport: 'Liszt Ferenc Airport',
    boardingDate: 'Mon, 22 July 2024',
    arrivalDate: 'Mon, 22 July 2024',
    flightPrice: 144,
  },
  {
    id: 2,
    flightName: 'Emirates 10F-219',
    companyLogo:
      'https://cdn.worldvectorlogo.com/logos/emirates-airlines-1.svg',
    boardingHour: '20:45',
    arrivalHour: '01:15',
    flightDuration: '5 h :30 m',
    abbreviatedBoardingAirport: 'DXB',
    abbreviatedArrivalAirpot: 'OTB',
    boardingCountry: 'Dubai',
    arrivalCountry: 'Romania',
    fullNameBoardingAirport: 'Dubai Airport',
    fullnameArrivalAirport: 'Henri Coanda Airport',
    boardingDate: 'Wed, 24 April 2024',
    arrivalDate: 'Sat, 27 April 2024',
    flightPrice: 303,
  },
  {
    id: 3,
    flightName: 'WizzAir 19E-014',
    companyLogo:
      'https://wizzair.com/static/images/default-source/press-office/logos/logos-with-url/wizz_logo__e0b32927.png',
    boardingHour: '19:20',
    arrivalHour: '20:40',
    flightDuration: '2 h : 20 m',
    abbreviatedBoardingAirport: 'OTP',
    abbreviatedArrivalAirpot: 'FCo',
    boardingCountry: 'Romania',
    arrivalCountry: 'Italia',
    fullNameBoardingAirport: 'Henri Coanda Airport',
    fullnameArrivalAirport: 'Fiumicino Airport',
    boardingDate: 'Tue, 28 May 2024',
    arrivalDate: 'Tue, 28 May 2024',
    flightPrice: 109,
  },
  {
    id: 4,
    flightName: 'WizzAir 02C-947',
    companyLogo:
      'https://wizzair.com/static/images/default-source/press-office/logos/logos-with-url/wizz_logo__e0b32927.png',
    boardingHour: '00:45',
    arrivalHour: '02:05',
    flightDuration: '3 h : 20 m',
    abbreviatedBoardingAirport: 'SCV',
    abbreviatedArrivalAirpot: 'LTN',
    boardingCountry: 'Romania',
    arrivalCountry: 'England',
    fullNameBoardingAirport: 'Suceava Airport',
    fullnameArrivalAirport: 'Luton Airport',
    boardingDate: 'Wed, 22 May 2024',
    arrivalDate: 'Wed, 22 May 2024',
    flightPrice: 90,
  },
  {
    id: 5,
    flightName: 'Turkish Airlines 28M-009',
    companyLogo:
      'https://1000logos.net/wp-content/uploads/2020/04/Turkish-Airlines-symbol.png',
    boardingHour: '09:30',
    arrivalHour: '19:15',
    flightDuration: '26 h : 45 m',
    abbreviatedBoardingAirport: 'OTP',
    abbreviatedArrivalAirpot: 'MEL',
    boardingCountry: 'Romania',
    arrivalCountry: 'Australia',
    fullNameBoardingAirport: 'Henri Coanda Airport',
    fullnameArrivalAirport: 'Melbourne Airport',
    boardingDate: 'Wed, 08 May 2024',
    arrivalDate: 'Thu, 09 May 2024',
    flightPrice: 1005,
  },
  {
    id: 6,
    flightName: 'HiSky Europe 05M-599',
    companyLogo:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrVmwfAzUoFr00xJb2muCGf6LAExILJizrQ8br9ulTVA&s',
    boardingHour: '18:30',
    arrivalHour: '20:20',
    flightDuration: '3 h : 50 m',
    abbreviatedBoardingAirport: 'OTP',
    abbreviatedArrivalAirpot: 'DUB',
    boardingCountry: 'Romania',
    arrivalCountry: 'Irlanda',
    fullNameBoardingAirport: 'Henri Coanda Airport',
    fullnameArrivalAirport: 'Dublin Airport',
    boardingDate: 'Fri, 11 October 2024',
    arrivalDate: 'Fri, 11 October 2024',
    flightPrice: 120,
  },
];

const cartTickets = [];

const pageTwo = () => {
  bodyPreview.innerHTML = '';

  bodyPreview.innerHTML = `
  <!-- Upper Phone Details (hour, wifi, battery) -->
  <div class="time-and-battery-details-container">
    <span class="time-hour"></span>
    <div class="battery-and-wifi">
      <span class="wifi"><i class="fa-solid fa-wifi"></i></span>
      <div class="battery-outer">
        <div class="battery-level"></div>
      </div>
    </div>
  </div>

  <!-- Under Phone Details Bar  -->
  <div class="under-phone-container">
    <span class="under-phone-text">SkyLinker | Flight Booking App</span>
  </div>

  <div class="scrollbar">
    <!-- Header Elements Page 2 -->
    <div class="header-elements-container">
      <div class="header-elements-image">
        <span class="header-elements-title">Time to travel</span>
        <!-- Search Bar -->
        <div class="search-bar-container">
          <i class="fa-solid fa-magnifying-glass search-bar-icon"></i>
          <input
            type="text"
            name="searchbar"
            id="searchbar"
            class="search-bar"
            placeholder="Search"
          />
        </div>
      </div>
    </div>

    <!-- Tickets Page 2 -->
    <div class="tickets-container"></div>
  </div>

  <nav class="navbar-container">
  <ul class="main-menu">
    <li>
      <a href="./index.html"class="main-menu-button">
        <i class="fa-solid fa-house-chimney"></i>
      </a>
    </li>
    <li>
      <button class="main-menu-button main-menu-active">
        <i class="fa-solid fa-suitcase"></i>
      </button>
    </li>
    <li>
      <button class="main-menu-button">
        <i class="fa-solid fa-wallet"></i>
      </button>
    </li>
    <li>
      <button class="main-menu-button">
        <i class="fa-solid fa-user"></i>
      </button>
    </li>
  </ul>
</nav>
  `;

  realTime();
  batteryRealTime();

  bodyPreview.style.backgroundColor = 'var(--dirty-white)';
  const ticketsContainer = document.querySelector('.tickets-container');

  const createTicketCards = () => {
    const tickets = ticketCardsInfo;

    tickets.forEach((ticket) => {
      const ticketCard = document.createElement('div');
      ticketCard.classList.add('ticket-card');

      ticketCard.innerHTML = `

    <div class="ticket-preview">
      <div
        class="tickets-company-image"
        style="background-image: url(${ticket.companyLogo})"
      ></div>
      <div class="ticket-card-design-elements">
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <!-- flight details -->
      <div class="flight-details-container">
        <!-- name -->
        <div class="flight-company-name-container">
          <span class="flight-company-name">${ticket.flightName}</span>
        </div>
        <!-- boarding details -->
        <div class="flight-boarding-details">
          <!-- time of leave -->
          <div class="flight-hour-airport">
            <span class="flight-hour">${ticket.boardingHour}</span>
            <span class="flight-airport">${ticket.abbreviatedBoardingAirport}</span>
          </div>
          <!-- duration -->
          <div class="flight-duration">
            <span class="flight-duration-time">${ticket.flightDuration}</span>
            <div class="flight-duration-design-elements">
              <div class="circle"></div>
              <div class="line"></div>
              <div class="circle"></div>
            </div>
            <span class="flight-eta">ETA</span>
          </div>
          <!-- time of arrive -->
          <div class="flight-hour-airport">
            <span class="flight-hour">${ticket.arrivalHour}</span>
            <span class="flight-airport">${ticket.abbreviatedArrivalAirpot}</span>
          </div>
          <div class="flight-price-container">
            <span class="flight-price">€${ticket.flightPrice}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- add to cart button -->
    <div class="ticket-add-to-cart">
      <div class="ticket-add-to-cart-margintop"></div>
      <button class="button-add-to-cart">Add To Cart</button>
    </div>
`;

      ticketsContainer.appendChild(ticketCard);

      // Add To Cart
      const addToCartButton = ticketCard.querySelector('.button-add-to-cart');

      const addToCart = (ticket) => {
        const ticketIndex = cartTickets.findIndex(
          (cartTicket) => cartTicket.id === ticket.id
        );

        if (ticketIndex === -1) {
          const ticketData = {
            id: ticket.id,
            flightName: ticket.flightName,
            companyLogo: ticket.companyLogo,
            boardingHour: ticket.boardingHour,
            arrivalHour: ticket.arrivalHour,
            flightDuration: ticket.flightDuration,
            abbreviatedBoardingAirport: ticket.abbreviatedBoardingAirport,
            abbreviatedArrivalAirpot: ticket.abbreviatedArrivalAirpot,
            boardingCountry: ticket.boardingCountry,
            arrivalCountry: ticket.arrivalCountry,
            fullNameBoardingAirport: ticket.fullNameBoardingAirport,
            fullnameArrivalAirport: ticket.fullnameArrivalAirport,
            boardingDate: ticket.boardingDate,
            arrivalDate: ticket.arrivalDate,
            flightPrice: ticket.flightPrice,
            quantity: 1,
          };
          cartTickets.push(ticketData);
        } else {
          cartTickets[ticketIndex].quantity =
            cartTickets[ticketIndex].quantity + 1;
        }
        console.log('after', cartTickets);
      };
      addToCartButton.addEventListener('click', () => {
        const ticketData = {
          id: ticket.id,
          flightName: ticket.flightName,
          companyLogo: ticket.companyLogo,
          boardingHour: ticket.boardingHour,
          arrivalHour: ticket.arrivalHour,
          flightDuration: ticket.flightDuration,
          abbreviatedBoardingAirport: ticket.abbreviatedBoardingAirport,
          abbreviatedArrivalAirpot: ticket.abbreviatedArrivalAirpot,
          boardingCountry: ticket.boardingCountry,
          arrivalCountry: ticket.arrivalCountry,
          fullNameBoardingAirport: ticket.fullNameBoardingAirport,
          fullnameArrivalAirport: ticket.fullnameArrivalAirport,
          boardingDate: ticket.boardingDate,
          arrivalDate: ticket.arrivalDate,
          flightPrice: ticket.flightPrice,
        };
        addToCart(ticketData);
      });
    });
  };

  createTicketCards();
  // Display Add To Cart Button
  const ticketCardsContainer = document.querySelector('.tickets-container');

  ticketCardsContainer.addEventListener('click', (e) => {
    const ticketPreview = e.target.closest('.ticket-preview');

    if (!ticketPreview) return;
    const ticket = ticketPreview.parentElement;
    const ticketHiddenBody = ticket.querySelector('.ticket-add-to-cart');

    // Toggle Visibility
    ticketHiddenBody.classList.toggle('add-to-cart-active');

    // Close Others Tickets Tabs
    const otherTickets = ticketCardsContainer.querySelectorAll('.ticket-card');

    otherTickets.forEach((otherTicket) => {
      if (otherTicket !== ticket) {
        const otherTicketHiddenBody = otherTicket.querySelector(
          '.ticket-add-to-cart'
        );
        otherTicketHiddenBody.classList.remove('add-to-cart-active');
      }
    });
  });

  // Going to Checkout Page 3 Event Listener
  const pageThreeButton = document.querySelector('.fa-wallet');

  pageThreeButton.addEventListener('click', pageThree);
};

goToPage2Btn.addEventListener('click', pageTwo);

// Going to Checkout Page 3 Function
const pageThree = () => {
  bodyPreview.innerHTML = '';

  bodyPreview.innerHTML = `
  <!-- Upper Details (hour, wifi, battery) -->
      <div class="time-and-battery-details-container">
        <span class="time-hour"></span>
        <div class="battery-and-wifi">
          <span class="wifi"><i class="fa-solid fa-wifi"></i></span>
          <div class="battery-outer">
            <div class="battery-level"></div>
          </div>
        </div>
      </div>

      <!-- Under Phone Details Bar  -->
      <div class="under-phone-container">
        <span class="under-phone-text">SkyLinker | Flight Booking App</span>
      </div>

      <div class="notification-container">
      <div class="notification">
        <span class="notification-text"
          >You need to agree with our terms before proceeding.</span
        >
      </div>
    </div>

      <div class="scrollbar">
        <!-- Checkout  -->
        <div class="checkout-container">
          <div class="checkout-title">
            <span class="checkout-text">Checkout Information</span>
          </div>

          <!-- Tickets Checkout Page 3 -->
          <div class="tickets-checkout-container">
           
          </div>
          <div class="bottom-line"></div>

          <!-- Refundable Text -->
          <div class="refundable-container">
            <span class="refundable-title">Refundable</span>
            <a href="#" class="refundable-documentation"
              >Cancellation & Baggage Policies</a
            >
            <span class="refundable-description"
              >Note: Airlines cancellation changes do apply. Please check
              cancellation and baggage policies for more details.</span
            >
          </div>

          <div class="bottom-line"></div>
        </div>
      </div>

      <!-- Checkout Pay Info -->
      <div class="checkout-pay-container">
        <div class="checkout-quantity-container">
          <span class="checkout-quantity-text">Quantity</span>
          <span class="checkout-quantity">0 Tickets</span>
        </div>
        <div class="checkout-total-container">
          <span class="checkout-total-text">Book for</span>
          <span class="checkout-total">€ 0</span>
        </div>
        <button class="buy-tickets">PROCEED</button>
      </div>

      <!-- Navigastion Bar -->
      <nav class="navbar-container">
        <ul class="main-menu">
          <li>
          <a href="./index.html"class="main-menu-button">
          <i class="fa-solid fa-house-chimney"></i>
        </a>
          </li>
          <li>
            <button class="main-menu-button">
              <i class="fa-solid fa-suitcase"></i>
            </button>
          </li>
          <li>
            <button class="main-menu-button main-menu-active">
              <i class="fa-solid fa-wallet"></i>
            </button>
          </li>
          <li>
            <button class="main-menu-button">
              <i class="fa-solid fa-user"></i>
            </button>
          </li>
        </ul>
      </nav>
  
  
  
  
  
  
  
  `;
  // Cart total
  const cartTotal = document.querySelector('.checkout-total');
  let total = 0;
  for (let i = 0; i < cartTickets.length; i++) {
    total += cartTickets[i].flightPrice * cartTickets[i].quantity;
  }
  cartTotal.innerText = `€ ${total}`;
  // Cart total

  // Cart ticket quantity
  let totalQuantity = 0;
  const cartTicketsQuantity = document.querySelector('.checkout-quantity');
  for (let i = 0; i < cartTickets.length; i++) {
    totalQuantity += cartTickets[i].quantity;
  }
  cartTicketsQuantity.innerText = `${totalQuantity} Tickets`;
  // Cart ticket quantity

  const ticketsCheckoutContainer = document.querySelector(
    '.tickets-checkout-container'
  );
  realTime();
  batteryRealTime();

  const createCheckoutTicketCards = () => {
    const ticketsCheckout = cartTickets;

    ticketsCheckout.forEach((ticket) => {
      const ticketCardCheckout = document.createElement('div');
      ticketCardCheckout.classList.add('ticket-checkout-card');

      ticketCardCheckout.innerHTML = `

<div class="ticket-chekout-preview">
<div class="ticket-checkoout-company-logo">
  <div class="logo"  style="background-image: url(${ticket.companyLogo})"></div>
  <span class="tickets-checkout-quantity-per-ticket">Quantity: ${ticket.quantity}</span>
</div>

<!-- flight details -->
<div class="flight-checkout-details-container">
  <!-- name -->
  <div class="flight-checkout-company-name-container">
    <div class="flight-checkout-company-name">
    ${ticket.flightName}
    </div>
  </div>

  <!-- boarding details -->
  <div class="flight-checkout-boarding-details">
    <!-- flight leave/arrival -->
    <div class="flight-checkout-leave-arrival">
      <!-- time of leave -->
      <div class="flight-checkout-hour-airport">
        <span class="flight-checkout-country">${ticket.boardingCountry}</span>
        <span class="flight-checkout-hour">${ticket.boardingHour}</span>
      </div>

      <!-- duration -->
      <div class="flight-checkout-duration">
        <span class="flight-checkout-duration-time"
          >${ticket.flightDuration}</span
        >
        <div class="flight-checkout-duration-design-elements">
          <div class="circle-checkout"></div>
          <div class="line-checkout"></div>
          <div class="circle-checkout"></div>
        </div>
        <span class="flight-checkout-eta">ETA</span>
      </div>

      <!-- time of arrival -->
      <div class="flight-checkout-hour-airport">
        <span class="flight-checkout-country">${ticket.arrivalCountry}</span>
        <span class="flight-checkout-hour">${ticket.arrivalHour}</span>
      </div>
    </div>
    <!-- flight date  -->
    <div class="flight-checkout-date-container">
      <span class="flight-checkout-date-boarding"
        >${ticket.boardingDate}</span
      >
      <span class="flight-checkout-date-arrival"
        >${ticket.arrivalDate}</span
      >
    </div>

    <!-- flight airport -->
    <div class="flight-checkout-airport">
      <span class="flight-checkout-airport-boarding"
        >${ticket.fullNameBoardingAirport}</span
      >
      <span class="flight-checkout-airport-arrival"
        >${ticket.fullnameArrivalAirport}</span
      >
    </div>
  </div>
</div>
</div>
`;
      ticketsCheckoutContainer.appendChild(ticketCardCheckout);
    });
  };
  createCheckoutTicketCards();
  // Going back to Page 2 Event Listener
  const pageTwoButton = document.querySelector('.fa-suitcase');

  pageTwoButton.addEventListener('click', pageTwo);

  // Going to Page 4 Checkout Infomartions

  const pageFourCheckoutInfo = document.querySelector('.buy-tickets');
  pageFourCheckoutInfo.addEventListener('click', () => {
    if (cartTickets.length === 0) {
      const notificationBar = document.querySelector('.notification');
      notificationBar.innerText = `Your cart is empty.`;
      notificationBar.style.transform = 'translateY(0%)';

      setTimeout(() => {
        notificationBar.style.transform = 'translateY(-1000%)';
      }, 2000);
    } else {
      pageFour();
    }
  });
};

const pageFour = () => {
  bodyPreview.innerHTML = ``;

  bodyPreview.innerHTML = `
  
  <!-- Upper Details (hour, wifi, battery) -->
  <div class="time-and-battery-details-container">
    <span class="time-hour">13:37</span>
    <div class="battery-and-wifi">
      <span class="wifi"><i class="fa-solid fa-wifi"></i></span>
      <div class="battery-outer">
        <div class="battery-level"></div>
      </div>
    </div>
  </div>

  <!-- Under Phone Details Bar  -->
  <div class="under-phone-container">
    <button class="under-phone-go-back">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <span class="under-phone-text">SkyLinker | Flight Booking App</span>
  </div>

  <div class="notification-container">
    <div class="notification">
      <span class="notification-text"
        >You need to agree with our terms before proceeding.</span
      >
    </div>
  </div>
  <div class="scrollbar">
    <!-- Traveller Information -->
    <div class="traveller-info-container">
      <div class="traveller-info-title">
        <span class="traveller-info-text">Traveller Information</span>
      </div>
      <div class="traveller-note-container">
        <span class="traveller-note-title">Information Note:</span>
        <span class="traveller-note-description"
          >Name should be same as on Governament ID Proof</span
        >
      </div>

      <!-- Traveller Personal Information -->

      <div class="traveller-personal-information-container">
        <form class="traveller-personal-information-form" id="form">
          <span class="traveller-personal-details-text form-info-text"
            >Personal details</span
          >
          <!-- inputs -->
          <input
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Full Name"
            class="inputs"
            required
          />

          <input
            type="text"
            name="age"
            id="age"
            placeholder="Age"
            class="inputs"
            required
          />

          <input
            type="text"
            name="passport-number"
            id="passport-number"
            placeholder="Passport Number"
            class="inputs"
            required
          />

          <input
            type="text"
            name="passport-expire-date"
            id="passport-expire-date"
            placeholder="Passport Expire Date"
            class="inputs"
            required
          />

          <input
            type="text"
            name="passport-issuing-date"
            id="passport-issuing-date"
            placeholder="Passport Issuing Date"
            class="inputs"
            required
          />

          <input
            type="text"
            name="passport-issuing-country"
            id="passport-issuing-country"
            placeholder="Passport Issuing Country"
            class="inputs"
            required
          />

          <input
            type="text"
            name="passport-nationality"
            id="passport-nationality"
            placeholder="Passport Nationality"
            class="inputs"
            required
          />
          <div class="traveller-contact-info">
            <span class="text1 form-info-text">Contact Information</span>
            <span class="text2"
              >Your booking details will be sent to below contact
              details</span
            >
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            class="inputs"
            required
          />

          <input
            type="number"
            name="phone-number"
            id="phone-number"
            placeholder="Phone Number"
            class="inputs"
            required
          />
          <div class="traveller-agree-with-terms">
            <input
              type="checkbox"
              name="agree"
              id="agree"
              class="agree-checkbox"
            />
            <span class="traveller-agree-with-terms-text"
              >I agree to the cancellation and Refund Policy</span
            >
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Proceed to pay -->
  <div class="proceed-to-pay-container">
    <button type="submit" class="proceed-to-pay" form="form">
      PROCEED TO BOOK
    </button>
  </div>

  <!-- Navigastion Bar -->
  <nav class="navbar-container">
    <ul class="main-menu">
      <li>
      <a href="./index.html"class="main-menu-button">
      <i class="fa-solid fa-house-chimney"></i>
    </a>
      </li>
      <li>
        <button class="main-menu-button">
          <i class="fa-solid fa-suitcase"></i>
        </button>
      </li>
      <li>
        <button class="main-menu-button main-menu-active">
          <i class="fa-solid fa-wallet"></i>
        </button>
      </li>
      <li>
        <button class="main-menu-button">
          <i class="fa-solid fa-user"></i>
        </button>
      </li>
    </ul>
  </nav>
  
  `;
  realTime();
  batteryRealTime();

  const form = document.querySelector('.traveller-personal-information-form');
  const notificationBar = document.querySelector('.notification');

  const infodata = [];
  const travellerDataInformation = (e) => {
    e.preventDefault();
    const data = new FormData(form);

    const fullNameInput = data.get('full-name');
    const ageInput = data.get('age');
    const passportNumberInput = data.get('passport-number');
    const passportExpireDateInput = data.get('passport-expire-date');
    const passportIssuingDateInput = data.get('passport-issuing-date');
    const passportIssuingCountryInput = data.get('passport-issuing-country');
    const passportNationalityInput = data.get('passport-nationality');
    const travellerEmailInput = data.get('email');
    const phoneNumberInput = data.get('phone-number');
    const agree = data.get('agree');

    agreeButton = agree;

    if (
      !fullNameInput ||
      !ageInput ||
      !passportNumberInput ||
      !passportExpireDateInput ||
      !passportIssuingDateInput ||
      !passportIssuingCountryInput ||
      !passportNationalityInput ||
      !travellerEmailInput ||
      !phoneNumberInput ||
      !agree
    ) {
      notificationBar.innerText = `Please fill in all the required inputs.`;
      notificationBar.style.transform = 'translateY(0%)';

      setTimeout(() => {
        notificationBar.style.transform = 'translateY(-1000%)';
      }, 2000);

      return;
    }

    const travellerData = {
      fullname: fullNameInput,
      age: ageInput,
      passportNumber: passportNumberInput,
      pasportExpireDate: passportExpireDateInput,
      passportIssuingDate: passportIssuingDateInput,
      passportIssuingcountry: passportIssuingCountryInput,
      passportNationality: passportNationalityInput,
      email: travellerEmailInput,
      phoneNumber: phoneNumberInput,
    };
    infodata.push(travellerData);
    console.log(infodata);
  };

  const btn = document.querySelector('.proceed-to-pay');
  btn.addEventListener('click', travellerDataInformation);

  // Going back to page 3 Checkout Tickets
  const backToPage3Checkout = document.querySelector('.under-phone-go-back');
  backToPage3Checkout.addEventListener('click', pageThree);

  // Going Back to page 2 buy tickets
  const backToPage2BuyTickets = document.querySelector('.fa-suitcase');
  backToPage2BuyTickets.addEventListener('click', pageTwo);

  // Going to Page 5 Checkout Payment Infomartions
  const goToPage5Payment = document.querySelector('.proceed-to-pay');
  goToPage5Payment.addEventListener('click', () => {
    if (infodata.length === 0) {
      notificationBar.innerText = `Please fill in all the required inputs.`;
      notificationBar.style.transform = 'translateY(0%)';

      setTimeout(() => {
        notificationBar.style.transform = 'translateY(-1000%)';
      }, 2000);

      return;
    }
    pageFivePayment();
  });
};

const pageFivePayment = () => {
  bodyPreview.innerHTML = ``;

  bodyPreview.innerHTML = `
  
  <!-- Upper Details (hour, wifi, battery) -->
  <div class="time-and-battery-details-container">
    <span class="time-hour"></span>
    <div class="battery-and-wifi">
      <span class="wifi"><i class="fa-solid fa-wifi"></i></span>
      <div class="battery-outer">
        <div class="battery-level"></div>
      </div>
    </div>
  </div>

  <!-- Under Phone Details Bar  -->
  <div class="under-phone-container">
    <button class="under-phone-go-back">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <span class="under-phone-text">SkyLinker | Flight Booking App</span>
  </div>

  <div class="notification-container">
    <div class="notification">
      <span class="notification-text"
        >You need to agree with our terms before proceeding.</span
      >
    </div>
  </div>

  <div class="scrollbar">
    <!-- Paying Information -->
    <div class="payment-information-container">
      <div class="payment-information-title-container">
        <span class="payment-information-title">Payment Option</span>
      </div>

      <!-- <div class="payment-option-text-container">
        <span class="payment-option-text">Select option to pay</span>
        <span class="payment-option-paying-amount">€1019</span>
      </div> -->

      <!-- Payment Personal Information -->

      <div class="payment-personal-information-container">
        <form class="payment-personal-information-form">
          <div class="payment-personal-details-text">
            <span class="payment-text-title">Payment Information</span>
            <span class="payment-text-subtitle subtitle-text"
              >Enter your payment information below</span
            >
          </div>

          <div class="bottom-line"></div>

          <div class="payment-method">
            <input
              type="radio"
              name="select"
              id="credit-card"
              value="credit-card"
            />
            <input type="radio" name="select" id="paypal" value="paypal" />
            <label for="credit-card" class="option option-1">
              <div class="dot"></div>
              <span class="credit-card-text"
                ><i class="fa-regular fa-credit-card"></i> Credit Card</span
              >
            </label>
            <label for="paypal" class="option option-2">
              <div class="dot"></div>
              <div class="paypal-image"></div>
            </label>
          </div>

          <div class="payment-card-number inputs-text-container">
            <span class="subtitle-text">Card Number</span>
            <input
              type="number"
              name="card-number"
              id="card-number"
              class="input-card-number"
              placeholder="1234 1234 1234 1234"
              oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
              maxlength="16"
            />
          </div>

          <div class="payment-expire-date-cvc">
            <div class="expiration-date-container">
              <span class="subtitle-text">Expiration Date</span>
              <div class="month-and-day-container">
                <input
                  type="text"
                  name="card-month"
                  id="card-month"
                  class="input-month-day-cvc"
                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  maxlength="2"
                  placeholder="Month"
                />
                <input
                  type="text"
                  name="card-day"
                  id="card-day"
                  class="input-month-day-cvc"
                  oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                  maxlength="2"
                  placeholder="Day"
                />
              </div>
            </div>
            <div class="cvc-container">
              <span class="subtitle-text">CVC</span>
              <input
                type="number"
                name="card-cvc"
                id="card-cvc"
                class="input-month-day-cvc"
                oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                maxlength="3"
                placeholder="123"
              />
            </div>
          </div>
        </form>
        <div class="subtitle-text-terms">
          <span>By continuing, you agree to SkiLinker's</span>
          <a href="#">Terms of Use</a>
          <span>and</span>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Proceed to pay -->
  <div class="pay-button-container">
    <button type="submit" class="pay-button" form="form">
     
    </button>
  </div>
  
  `;

  realTime();
  batteryRealTime();

  const form = document.querySelector('.payment-personal-information-form');
  const notificationBar = document.querySelector('.notification');

  const paymentDataInfo = [];
  let paymentMethod;

  const travellerPaymentInformation = (e) => {
    e.preventDefault();
    const data = new FormData(form);

    let selectedCard = '';
    const selectRadioButtons = form.querySelectorAll('input[name="select"]');
    selectRadioButtons.forEach((radioButton) => {
      if (radioButton.checked) {
        selectedCard = radioButton.value;
      }
    });

    const cardNumberInput = data.get('card-number');
    const expirationMonthInput = data.get('card-month');
    const expirationDayInput = data.get('card-day');
    const cvcInput = data.get('card-cvc');

    if (
      !selectedCard ||
      !cardNumberInput ||
      !expirationMonthInput ||
      !expirationDayInput ||
      !cvcInput
    ) {
      notificationBar.innerText = `Please fill in all the required inputs.`;
      notificationBar.style.transform = 'translateY(0%)';

      setTimeout(() => {
        notificationBar.style.transform = 'translateY(-1000%)';
      }, 2000);

      return;
    }

    paymentMethod = selectedCard;

    const paymentData = {
      paymentMethod: selectedCard,
      cardNumber: cardNumberInput,
      expirationMonth: expirationMonthInput,
      expirationDay: expirationDayInput,
      cvc: cvcInput,
    };

    paymentDataInfo.push(paymentData);
    console.log(paymentDataInfo);
  };
  // Cart total
  const payAmount = document.querySelector('.pay-button');
  let total = 0;
  for (let i = 0; i < cartTickets.length; i++) {
    total += cartTickets[i].flightPrice * cartTickets[i].quantity;
  }
  payAmount.innerText = `BOOK FOR €${total}`;
  // Cart total

  const payButton = document.querySelector('.pay-button');
  payButton.addEventListener('click', travellerPaymentInformation);

  // Going back to page 4 Checkout Tickets
  const backToPage3Checkout = document.querySelector('.under-phone-go-back');
  backToPage3Checkout.addEventListener('click', pageFour);

  // Going to Page 5 Thank You Message
  const goToThankYouMessage = document.querySelector('.pay-button');
  goToThankYouMessage.addEventListener('click', () => {
    if (paymentDataInfo.length === 0) {
      notificationBar.innerText = `Please fill in all the required inputs.`;
      notificationBar.style.transform = 'translateY(0%)';

      setTimeout(() => {
        notificationBar.style.transform = 'translateY(-1000%)';
      }, 2000);

      return;
    }
    page6ThankYou();
  });
};

const page6ThankYou = () => {
  bodyPreview.innerHTML = ``;

  bodyPreview.innerHTML = `
<!-- Upper Details (hour, wifi, battery) -->
<div class="time-and-battery-details-container" style="background-color: var(--dirty-white)" >
  <span class="time-hour" style="color: var(--black)"></span>
  <div class="battery-and-wifi">
    <span class="wifi" style="color: var(--black)"><i class="fa-solid fa-wifi"></i></span>
    <div class="battery-outer" style="border: 1px solid black">
    <style>
    .battery-outer::after {
        background-color: var(--black)
    }
</style>
      <div class="battery-level" style="background-color: var(--black);"></div>
    </div>
  </div>
</div>

<!-- thank you message -->
<div class="message-container">
  <div class="message-image"></div>
  <span class="message-thank-you">Thank You.</span>
  <span class="message-description">Your Flight Booking Payment</span>
  <span class="message-description">Done Successfully.</span>
</div>

<!-- Proceed to pay -->
<div class="homepage-button-container">
  <a href="index.html" class="homepage-button">GO TO HOMEPAGE</a>
</div>

`;

  realTime();
  batteryRealTime();

  // Going back to homepage
  const backToHomepageButton = document.querySelector('.homepage-button');
  backToHomepageButton.addEventListener('click', pageTwo);
};
