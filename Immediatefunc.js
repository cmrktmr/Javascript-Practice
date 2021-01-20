//Sadece 1 kez çalışan fonksiyonlar

(function (name) {
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wed",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var today = new Date();
  var msg = "Welcome "+ name+ " today is " + days[today.getDay()];
  console.log(msg);
}("cemre"));
