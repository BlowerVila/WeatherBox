var weekWeather = [
  {
    day: "MON",
    tempC: 27,
    weather: "cloud",
    isChecked: true
  },
  {
    day: "TUE",
    tempC: 24,
    weather: "thunder",
    isChecked: false
  },
  {
    day: "WED",
    tempC: 30,
    weather: "rain",
    isChecked: false
  },
  {
    day: "THU",
    tempC: 28,
    weather: "cloud",
    isChecked: false
  },
  {
    day: "FRI",
    tempC: 27,
    weather: "sunNcloud",
    isChecked: false
  },
  {
    day: "SAT",
    tempC: 26,
    weather: "rain",
    isChecked: false
  },
  {
    day: "sun",
    tempC: 28,
    weather: "cloud",
    isChecked: false
  }
];

var weatherSheet = [
  {
    name: "cloud",
    wClass: "material-symbols-outlined",
    wText: "cloud"
  },
  {
    name: "sunNcloud",
    wClass: "material-symbols-outlined",
    wText: "partly_cloudy_day"
  },
  {
    name: "thunder",
    wClass: "material-symbols-outlined",
    wText: "thunderstorm"
  },
  {
    name: "rain",
    wClass: "material-symbols-outlined",
    wText: "rainy"
  }
];


var weeksHTML = `
<div class='weak'>
  <div class='li_state'>
    <span class='{{{wIcon}}}'>{{{wText}}}</span>
  </div>
  <div class='li_info'>
    <h5 class='day'>{{{day}}}</h5>
    <h5 class='tempC'>{{{tempC}}}</h5>
  </div>
</div>
`;



weekWeather.forEach(function(wTemp){
  // 攝華氏轉換
  wTemp.tempF = wTemp.tempC * 9 / 5 +32;
  
  // 右手邊天氣呈現
  var wBeTurnHTML = weeksHTML;
  weatherSheet.forEach(function(wName){
    if(wTemp.weather == wName.name){
      
      var nowHTML = wBeTurnHTML
                   .replace("{{{wIcon}}}",wName.wClass)
                   .replace("{{{wText}}}",wName.wText)
                   .replace("{{{day}}}",wTemp.day)
                   .replace("{{{tempC}}}",wTemp.tempC);
      
      if(wTemp.isChecked == true){
        var nowHTML = nowHTML
                   .replace("weak","weak checked");
      };
      
      // jQuery的append可自動解析內容成HTML，DOM不會，要用innerHTML
      document.getElementById("weaks").innerHTML += nowHTML;
    };
  });
  
});



