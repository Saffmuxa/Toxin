import AirDatepicker from "air-datepicker";

const initDatePicker = (datePickerId, settings = {}) => {
  const { clickOutHandler, newOpts = {} } = settings;
  const containerEl = document.getElementById(datePickerId);

  const calendar = new AirDatepicker(containerEl, {
    range: true,
    // position: "bottom center",
    // startDate: new Date(2019, 7, 10),
    minDate: new Date(),

    buttons: [
      {
        content: "очистить",
        attrs: { type: "button" },
        onClick: (dpInstance) => dpInstance.clear(),
      },
      {
        content: "Применить",
        attrs: { type: "button" },
        onClick: () => clickOutHandler(),
      },
    ],
    dateFormat(date) {
      return date.toLocaleString("ru", {
        day: "2-digit",
        month: "short",
      });
    },
    prevHtml: '<span class="air-datepicker-prev"></span>',
    nextHtml: '<span class="air-datepicker-next"></span>',
    navTitles: { days: "MMMM yyyy" },
  });

  calendar.update(newOpts);
};

const initCalendar = (calendarId, datePickerId, type = "") => {
  const calendarEl = document.getElementById(calendarId);
  const calendarMenu = calendarEl.querySelector(".js-calendar__menu");
  const dateInputs = calendarEl.querySelectorAll(".js-calendar__input");
  const inputElements = calendarEl.querySelectorAll("input");
  const datePickerToogle = () => {
    calendarMenu.classList.toggle("js-calendar__menu_active");
  };

  const clickOut = () => {
    // calendarMenu.addEventListener("click", (event) => {
    //   event.stopPropagation();
    // });
    document.addEventListener("click", (event) => {
      if (!calendarEl.contains(event.target)) {
        calendarMenu.classList.remove("js-calendar__menu_active");
      }
    });
  };

  dateInputs.forEach((field) => {
    field.addEventListener("click", datePickerToogle);
  });

  if (type === "two-input") {
    const onSelect = ({ formattedDate }) => {
      const [firstDate, lastDate] = formattedDate;
      const [firstInputEl, lastInputdEl] = inputElements;
      firstInputEl.value = firstDate ?? "";
      lastInputdEl.value = lastDate ?? "";
    };

    const dateFormat = (date) => {
      return date.toLocaleString("ru", {
        year: "numeric",
        day: "2-digit",
        month: "2-digit",
      });
    };

    initDatePicker(datePickerId, {
      clickOutHandler: datePickerToogle,
      newOpts: { onSelect, dateFormat },
    });
  } else {
    const onSelect = ({ date, formattedDate, datePicker }) => {
      const inputElement = inputElements[0];
      const formattedDateValue = formattedDate.join(" - ");
      inputElement.value = formattedDateValue;
    };

    initDatePicker(datePickerId, {
      clickOutHandler: datePickerToogle,
      newOpts: {
        onSelect,
      },
    });
  }

  clickOut();
};

export { initCalendar };
