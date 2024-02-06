var i = 0;
var txt1 =
  "Hi Love.....!  <<              I have something truly special to share with you, and I hope you'll take the time to read it with an open heart.. <<<                From the moment our eyes first met, I knew there was something extraordinary about you.                                                                           > Your presence in my thoughts is constant, and every aspect of you captivates me < You seems something Special to me.  <<                  As the days goes < you get closer to me....! <<                           I don't know the reason why your thoughts always resonates inside my mind...!                                                     > Everything about you is always intresting for me...!                     << I confess, expressing these feelings makes me a bit nervous, but they're unlike any I've felt before...!                                                     > While my love for my parents is boundless.....!                    << you've carved out a place in my heart that's just as cherished....!                                                             >I Love U <SweetHeart.....! |                  <<<< Please allow me the opportunity to prove the depth of my love for you. ...!  ";
var speed = 55;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
