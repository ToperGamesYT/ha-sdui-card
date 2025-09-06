# SDUI Timetable Card
![Home Assistant](https://img.shields.io/badge/Home%20Assistant-Custom%20Card-blue)
![HACS Custom](https://img.shields.io/badge/HACS-Custom-orange)

![Logo](/logo.png)

A custom Lovelace card for Home Assistant to display school schedules from the [`sdui_timetable`](https://github.com/ToperGamesYT/sdui_timetable) integration.

---

## ✨ Features

- Display today's lessons from the `sdui_timetable` sensor.
- Highlight canceled lessons.
- Automatically updates when the sensor updates.
- Minimalistic design for Lovelace dashboards.

---

## 📦 Installation

### Via HACS (recommended)

1. In Home Assistant, open **HACS → Integrations → Custom repositories**.
2. Add this repository:  
   `https://github.com/ToperGamesYT/ha-sdui-card`
3. Select repository type: **Lovelace**.
4. Install **SDUI Timetable Card**.
5. Add a resource to your Lovelace configuration:

```yaml
url: /hacsfiles/ha-sdui-card/sdui-card.js
type: module
```


## Usage
Example card configuration in ui-lovelace.yaml:
```yaml
type: custom:sdui-timetable-card
entity: sensor.sdui_timetable
```