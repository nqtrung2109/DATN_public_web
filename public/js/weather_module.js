'use strict';

export const weekDayNames = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thur",
    "Fri",
    "Sat"
];

export const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];

/** 
    * @param {number} dateUnix unix date in seconds
    * @param {number} timezone timezone shift from UTC to seconds
    * @returns {string} date string. format" "Sunday 10, Jan"
*/
export const getDate = function (dateUnix, timezone) {
    
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthDayName = date.getUTCDate();
    const monthName = monthNames[date.getUTCMonth()];

    // console.log("dateUnix:", dateUnix);
    // console.log("timezone:", timezone);
    // console.log("UTChour:", date.getUTCHours());
    // console.log("UTCday week:", date.getUTCDay());
    // console.log("UTCday month:", monthDayName);
    // console.log("UTCday month:", date.getUTCMonth());

    return `${weekDayName} ${monthDayName}, ${monthName}`;
}

/** 
    * @param {number} timeUnix unix date in seconds
    * @param {number} timezone timezone shift from UTC to seconds 
    * @returns {string} time string. format: "HH:MM AM/PM"
*/
export const getTime = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM"; 

    return `${hours % 12 || 12}:${minutes} ${period}`;
}

/** 
    * @param {number} timeUnix unix date in seconds
    * @param {number} timezone timezone shift from UTC to seconds 
    * @returns {string} time string. format: "HH AM/PM"
*/
export const getHours = function (timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM"; 

    return `${hours % 12 || 12} ${period}`;
}

/** 
    * @param {number} mps meter per seconds
    * @returns {number} kilometer per seconds
*/
export const mps_to_kmh = mps => {
    const mph = mps * 3600;
    return mph / 1000;
}

export const aqiText = {
    1: {
        level: "Good",
        message: "Air quality is considered satisfactory, and air pollution poses little or no risk."
    },
    2: {
        level: "Fair",
        message: "Air quality is acceptable; however, for some pollutants there may be a moderate health \
        concern for a very small number of people who are unusually sensitive to air pollution."
    },
    3: {
        level: "Moderate",
        message: "Members of sensitive groups may experience health effects. The general public is not likely\
         to be affected"
    },
    4: {
        level: "Poor",
        message: "Everyone may begin to experience health effects, members of sensitive groups may experience \
        more serious health effects"
    },
    5: {
        level: "Very Poor",
        message: "Health warnings of emergency conditions. The entire population is more likely to be affected"
    }
}

