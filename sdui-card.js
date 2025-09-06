class SduiTimetableCard extends HTMLElement {
  setConfig(config) {
    this.config = config;
    this.innerHTML = `
      <ha-card header="SDUI Timetable">
        <div class="content" id="content">Загрузка расписания...</div>
      </ha-card>
    `;
  }

  set hass(hass) {
    const sensor = hass.states[this.config.entity];
    const content = this.querySelector("#content");
    if (!sensor) {
      content.innerHTML = "Сенсор не найден";
      return;
    }

    const lessons = sensor.attributes.lessons || [];
    content.innerHTML = `
      <ul>
        ${lessons
          .map(
            (lesson) => `
          <li>
            <b>${lesson.time}</b>: ${lesson.subject} ${lesson.canceled ? "(Отменён)" : ""}
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }

  getCardSize() {
    return 3;
  }
}

customElements.define("sdui-timetable-card", SduiTimetableCard);
