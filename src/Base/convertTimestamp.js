export default {
  convertDateTimeToString(t) {
    if (t !== null) {
      let dateTimeConvert = new Date(t / 1000);
      let date = dateTimeConvert.toLocaleDateString();
      let time = dateTimeConvert.toLocaleTimeString("es-AR");
      let ms = dateTimeConvert.getMilliseconds();
      let result = date + " " + time + "." + ms;
      return result;
    } else {
      return "None";
    }
  },
  renderListValue(data) {
    let array = [];
    for (const entry of Object.entries(data)) {
      const [key, value] = entry;
      let v = 0;
      if (value) {
        v = 1;
      } else {
        v = 0;
      }
      array.push(key + "=" + v + ",");
    }
    return array;
  },

  renderListCommand(data) {
    if (data) {
      let array = [];
      for (const entry of Object.entries(data)) {
        const [key, value] = entry;

        array.push(key + "=" + value + ",");
      }
      return array;
    }
    return "None";
  },
};
