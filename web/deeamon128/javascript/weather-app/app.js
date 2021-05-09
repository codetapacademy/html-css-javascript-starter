window.addEventListener("load", () => {
  let locationTimeZone = document.querySelector('.location-timezone');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let temperatureDescription = document.querySelector('.temperature-description');

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

      const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London?unitGroup=uk&key=E9R3A3G5GD6CPRK8S7YZBLCVB`;
      
      fetch(api)
        .then(response => {
          return response.json();
        })
        .then(data => {
          const {conditions, temp} = data.currentConditions
          temperatureDegree.textContent = temp;
          temperatureDescription.textContent = conditions;
          locationTimeZone.textContent = data.timezone
        })
    });
  }
});
