document.addEventListener("DOMContentLoaded", () => {
  const tableImg = document.querySelector(".feature-table-img");
  const scrollTracker = document.querySelector(".scroll-track");
  const leftLight = document.querySelector(".left-light");
  const leftDark = document.querySelector(".left-dark");
  const rightLight = document.querySelector(".right-light");
  const rightDark = document.querySelector(".right-dark");
  const scrollStep = 100; // Adjust this value for how much to scroll on each click

  if (
    !tableImg ||
    !scrollTracker ||
    !leftLight ||
    !leftDark ||
    !rightLight ||
    !rightDark
  ) {
    console.error("Required elements not found.");
    return;
  }

  // Function to update the tracker's position
  const updateScrollTracker = () => {
    const scrollWidth = tableImg.scrollWidth; // Total width of scrollable content
    const visibleWidth = tableImg.clientWidth; // Visible width of the content
    const scrollLeft = tableImg.scrollLeft; // Current scroll position

    const maxScrollLeft = scrollWidth - visibleWidth;

    // Calculate the tracker's left position as a percentage of the maximum scrollable width
    const trackerLeft = (scrollLeft / maxScrollLeft) * 50;

    // Apply the left position to the tracker
    scrollTracker.style.left = `${trackerLeft}%`;
  };

  // Function to update arrow visibility
  const updateArrows = () => {
    const scrollLeft = tableImg.scrollLeft;
    const maxScrollLeft = tableImg.scrollWidth - tableImg.clientWidth;

    // Update left arrow visibility
    if (scrollLeft === 0) {
      leftLight.style.display = "none";
      leftDark.style.display = "block";
    } else {
      leftLight.style.display = "block";
      leftDark.style.display = "none";
    }

    // Update right arrow visibility
    if (scrollLeft >= maxScrollLeft) {
      rightLight.style.display = "none";
      rightDark.style.display = "block";
    } else {
      rightLight.style.display = "block";
      rightDark.style.display = "none";
    }
  };

  // Scroll left on arrow click
  leftLight.addEventListener("click", () => {
    tableImg.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });

  // Scroll right on arrow click
  rightLight.addEventListener("click", () => {
    tableImg.scrollBy({ left: scrollStep, behavior: "smooth" });
  });

  // Update tracker and arrows on scroll
  tableImg.addEventListener("scroll", () => {
    updateScrollTracker();
    updateArrows();
  });

  // Initialize tracker and arrows on page load
  updateScrollTracker();
  updateArrows();

  // Update tracker on window resize
  window.addEventListener("resize", updateScrollTracker);
});

document.addEventListener("DOMContentLoaded", () => {
  const tableImg = document.querySelector(
    ".aftersize-section-chart-whitebox-left"
  );
  const scrollTracker = document.querySelector(".scroll-track2");
  const leftLight = document.querySelector(".left-light2");
  const leftDark = document.querySelector(".left-dark2");
  const rightLight = document.querySelector(".right-light2");
  const rightDark = document.querySelector(".right-dark2");
  const scrollStep = 100; // Adjust this value for how much to scroll on each click

  if (
    !tableImg ||
    !scrollTracker ||
    !leftLight ||
    !leftDark ||
    !rightLight ||
    !rightDark
  ) {
    console.error("Required elements not found.");
    return;
  }

  // Function to update the tracker's position
  const updateScrollTracker = () => {
    const scrollWidth = tableImg.scrollWidth; // Total width of scrollable content
    const visibleWidth = tableImg.clientWidth; // Visible width of the content
    const scrollLeft = tableImg.scrollLeft; // Current scroll position

    const maxScrollLeft = scrollWidth - visibleWidth;

    // Calculate the tracker's left position as a percentage of the maximum scrollable width
    const trackerLeft = (scrollLeft / maxScrollLeft) * 50;

    // Apply the left position to the tracker
    scrollTracker.style.left = `${trackerLeft}%`;
  };

  // Function to update arrow visibility
  const updateArrows = () => {
    const scrollLeft = tableImg.scrollLeft;
    const maxScrollLeft = tableImg.scrollWidth - tableImg.clientWidth;

    // Update left arrow visibility
    if (scrollLeft === 0) {
      leftLight.style.display = "block";
      leftDark.style.display = "none";
    } else {
      leftLight.style.display = "none";
      leftDark.style.display = "block";
    }

    // Update right arrow visibility
    if (scrollLeft >= maxScrollLeft) {
      rightLight.style.display = "block";
      rightDark.style.display = "none";
    } else {
      rightLight.style.display = "none";
      rightDark.style.display = "block";
    }
  };

  // Scroll left on arrow click
  leftDark.addEventListener("click", () => {
    tableImg.scrollBy({ left: -scrollStep, behavior: "smooth" });
  });

  // Scroll right on arrow click
  rightDark.addEventListener("click", () => {
    tableImg.scrollBy({ left: scrollStep, behavior: "smooth" });
  });

  // Update tracker and arrows on scroll
  tableImg.addEventListener("scroll", () => {
    updateScrollTracker();
    updateArrows();
  });

  // Initialize tracker and arrows on page load
  updateScrollTracker();
  updateArrows();

  // Update tracker on window resize
  window.addEventListener("resize", updateScrollTracker);
});

document.addEventListener("DOMContentLoaded", function () {
  const cardList = document.querySelector(".aftersize-section-voice-cardlist");
  const cards = Array.from(
    document.querySelectorAll(".aftersize-section-voice-cardlist-card")
  );
  const leftLight = document.querySelector(".slider-arrow.white-left");
  const leftDark = document.querySelector(".slider-arrow.grey-left");
  const rightLight = document.querySelector(".slider-arrow.white-right");
  const rightDark = document.querySelector(".slider-arrow.grey-right");

  let currentIndex = 1; // Start at the first real slide (after the duplicate)
  const autoSlideInterval = 3000; // Auto-slide every 3 seconds
  let autoSlideTimer;

  function initializeSliderForSmallScreens() {
    if (window.innerWidth > 500) {
      return; // Exit if screen size is larger than 500px
    }

    // Duplicate the first and last slides
    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[cards.length - 1].cloneNode(true);
    cardList.appendChild(firstClone); // Add first slide clone to the end
    cardList.insertBefore(lastClone, cards[0]); // Add last slide clone to the start

    // Update the cards list with the new clones
    const updatedCards = Array.from(
      document.querySelectorAll(".aftersize-section-voice-cardlist-card")
    );

    function updateSliderPosition() {
      const slideWidth = updatedCards[0].offsetWidth;
      const slideMargin =
        parseInt(getComputedStyle(updatedCards[0]).marginRight) || 0;
      const translateValue = -(currentIndex * (slideWidth + slideMargin));

      cardList.style.transition = "transform 0.3s ease"; // Add smooth animation
      cardList.style.transform = `translateX(${translateValue}px)`;

      // Check if we're at the duplicated slides and "snap" back
      cardList.addEventListener(
        "transitionend",
        () => {
          if (currentIndex === 0) {
            cardList.style.transition = "none";
            currentIndex = updatedCards.length - 2; // Real last slide index
            const snapValue = -(currentIndex * (slideWidth + slideMargin));
            cardList.style.transform = `translateX(${snapValue}px)`;
          } else if (currentIndex === updatedCards.length - 1) {
            cardList.style.transition = "none";
            currentIndex = 1; // Real first slide index
            const snapValue = -(currentIndex * (slideWidth + slideMargin));
            cardList.style.transform = `translateX(${snapValue}px)`;
          }
        },
        { once: true }
      );

      updateArrowState();
    }

    function updateArrowState() {
      if (currentIndex === 1) {
        leftLight.style.display = "none";
        leftDark.style.display = "block";
      } else {
        leftLight.style.display = "block";
        leftDark.style.display = "none";
      }

      if (currentIndex === updatedCards.length - 2) {
        rightLight.style.display = "none";
        rightDark.style.display = "block";
      } else {
        rightLight.style.display = "block";
        rightDark.style.display = "none";
      }
    }

    leftLight.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateSliderPosition();
        resetAutoSlide();
      }
    });

    rightLight.addEventListener("click", () => {
      if (currentIndex < updatedCards.length - 1) {
        currentIndex++;
        updateSliderPosition();
        resetAutoSlide();
      }
    });

    function startAutoSlide() {
      autoSlideTimer = setInterval(() => {
        if (currentIndex < updatedCards.length - 1) {
          currentIndex++;
          updateSliderPosition();
        }
      }, autoSlideInterval);
    }

    function stopAutoSlide() {
      clearInterval(autoSlideTimer);
    }

    function resetAutoSlide() {
      stopAutoSlide();
      startAutoSlide();
    }

    // Initial setup
    updateSliderPosition();
    startAutoSlide();
  }

  // Initialize the slider for small screens
  initializeSliderForSmallScreens();

  // Reinitialize the slider on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 500) {
      location.reload(); // Reload the page to ensure proper setup for small screens
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const ankerSection = document.querySelector(".fv-anker-section");
  const prevButton = document.querySelector(".arrow.prev");
  const nextButton = document.querySelector(".arrow.next");
  const items = Array.from(document.querySelectorAll(".anker-item-box"));
  const itemWidth = items[0].offsetWidth; // Width of each item
  let currentIndex = 0;
  let isMobile = window.matchMedia("(max-width: 500px)").matches;
  let firstClone, lastClone;

  function initializeSlider() {
    if (!isMobile) return;

    // Clone the first and last items for looping
    firstClone = items[0].cloneNode(true);
    lastClone = items[items.length - 1].cloneNode(true);

    ankerSection.appendChild(firstClone);
    ankerSection.insertBefore(lastClone, items[0]);

    // Adjust the transform to account for the first clone
    currentIndex = 1;
    ankerSection.style.transform = `translateX(${-currentIndex * itemWidth}px)`;

    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);
    ankerSection.addEventListener("transitionend", handleTransitionEnd);
  }

  function destroySlider() {
    if (firstClone) {
      ankerSection.removeChild(firstClone);
    }
    if (lastClone) {
      ankerSection.removeChild(lastClone);
    }
    currentIndex = 0;
    ankerSection.style.transform = "";
    ankerSection.style.transition = "";

    prevButton.removeEventListener("click", handlePrevClick);
    nextButton.removeEventListener("click", handleNextClick);
    ankerSection.removeEventListener("transitionend", handleTransitionEnd);
  }

  function handlePrevClick() {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
    }
  }

  function handleNextClick() {
    if (currentIndex < items.length + 1) {
      currentIndex++;
      updateSliderPosition();
    }
  }

  function updateSliderPosition() {
    ankerSection.style.transition = "transform 0.5s ease-in-out";
    const offset = -currentIndex * itemWidth;
    ankerSection.style.transform = `translateX(${offset}px)`;
  }

  function handleTransitionEnd() {
    if (currentIndex === 0) {
      ankerSection.style.transition = "none";
      currentIndex = items.length; // Real last item
      const offset = -currentIndex * itemWidth;
      ankerSection.style.transform = `translateX(${offset}px)`;
    } else if (currentIndex === items.length + 1) {
      ankerSection.style.transition = "none";
      currentIndex = 1; // Real first item
      const offset = -currentIndex * itemWidth;
      ankerSection.style.transform = `translateX(${offset}px)`;
    }
  }

  function checkScreenSize() {
    isMobile = window.matchMedia("(max-width: 500px)").matches;
    if (isMobile) {
      initializeSlider();
    } else {
      destroySlider();
    }
  }

  // Initial check and setup
  checkScreenSize();

  // Add a listener for screen resize
  window.addEventListener("resize", checkScreenSize);
});

