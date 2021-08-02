export const getAction = (date: Date) => {
  const tasks = [
    "Working on a side project",
    "Listening to music",
    "Reading about saving the planet",
    "On a nature walk",
    "Exercising",
    "Hard at work",
    "In class",
    "Studying",
    "Exploring Boston",
    "Winding down",
    "Cooking",
  ];
  const taskEmojis = [
    "⌨️",
    "🎧",
    "📖",
    "🌳",
    "🏋🏼‍♂️",
    "👨🏼‍💻",
    "✏️",
    "📚",
    "🗺",
    "🥱",
    "👨‍🍳",
  ];
  const minDate = new Date(`09/01/${date.getFullYear()}`); // beginning of september of the current year
  const maxDate = new Date(`12/31/${date.getFullYear()}`); // end of december of the current year

  const isWeekend = date.getDay() == 6 || date.getDay() == 0;
  const isSchoolYear = date > minDate && date < maxDate;

  var index: number;

  if (isSchoolYear && !isWeekend) {
    // school year, school day
    switch (date.getHours()) {
      case 7:
        index = 1;
        break;
      case 8:
        index = 6;
        break;
      case 9:
        index = 6;
        break;
      case 10:
        index = 6;
        break;
      case 11:
        index = 6;
        break;
      case 12:
        index = 1;
        break;
      case 13:
        index = 6;
        break;
      case 14:
        index = 6;
        break;
      case 15:
        index = 5;
        break;
      case 16:
        index = 5;
        break;
      case 17:
        index = 4;
        break;
      case 18:
        index = 10;
        break;
      case 19:
        index = 65;
        break;
      case 20:
        index = 5;
        break;
      case 21:
        index = 7;
        break;
      case 22:
        index = 9;
        break;
      default:
        index = 2;
        break;
    }
  } else if (isSchoolYear) {
    // school year, weekend
    switch (date.getHours()) {
      case 8:
        index = 4;
        break;
      case 9:
        index = 4;
        break;
      case 13:
        index = 7;
        break;
      case 14:
        index = 7;
        break;
      case 15:
        index = 7;
        break;
      case 16:
        index = 7;
        break;
      case 17:
        index = 7;
        break;
      case 18:
        index = 10;
        break;
      case 19:
        index = 7;
        break;
      case 20:
        index = 7;
        break;
      case 21:
        index = 7;
        break;
      case 22:
        index = 9;
        break;
      default:
        index = 8;
        break;
    }
  } else if (isWeekend) {
    // not a school year, weekend
    switch (date.getHours()) {
      case 8:
        index = 1;
        break;
      case 9:
        index = 0;
        break;
      case 10:
        index = 0;
        break;
      case 11:
        index = 0;
        break;
      case 12:
        index = 10;
        break;
      case 13:
        index = 3;
        break;
      case 14:
        index = 3;
        break;
      case 15:
        index = 4;
        break;
      case 16:
        index = 4;
        break;
      case 17:
        index = 0;
        break;
      case 18:
        index = 3;
        break;
      case 19:
        index = 0;
        break;
      case 20:
        index = 0;
        break;
      case 21:
        index = 0;
        break;
      case 22:
        index = 9;
        break;
      default:
        index = 2;
        break;
    }
  } else {
    // not a school year, work day
    switch (date.getHours()) {
      case 7:
        index = 5;
        break;
      case 8:
        index = 5;
        break;
      case 9:
        index = 5;
        break;
      case 10:
        index = 5;
        break;
      case 11:
        index = 5;
        break;
      case 12:
        index = 1;
        break;
      case 13:
        index = 1;
        break;
      case 14:
        index = 5;
        break;
      case 15:
        index = 5;
        break;
      case 16:
        index = 5;
        break;
      case 17:
        index = 5;
        break;
      case 18:
        index = 2;
        break;
      case 19:
        index = 1;
        break;
      case 20:
        index = 1;
        break;
      case 21:
        index = 10;
        break;
      case 22:
        index = 10;
        break;
      default:
        index = 4;
        break;
    }
  }

  return {
    activityEmoji: taskEmojis[index],
    activity: tasks[index],
  };
};
