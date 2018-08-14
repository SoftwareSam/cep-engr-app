// Here it is, the thing that I started with which the rest of the code is based off. I don't have a good reason as to why I chose this particular, it seemed the most straight forward so i went with it.
var person = new Object();
person.firstName = 'Sam';
person.lastName = 'Soheylee';
person.jobTitle = 'Trust & Security';
person.homeOffice = 'RPP Austin, TX';
person.aboutMe = 'With renewed vigor and determination, I have returned to programming to fill my life with the challenges I seek. Graduating from Glamorgan University in Wales in 2006 with a BS in Computer Science I was immediately faced with the prospect of relocating to Texas of all places. Having family already in Austin it was an obvious choice. 10 years on and I have finally achieved the discipline and willpower to enter the fray once again.';

// The biggest thorn in my side. Having this thing grab the info above it and slap it into the button. I was having a heck of a time figuring out how they interacted. It probably would have been a sinch if I had any prior knowledge, but it seems that this method of getting and setting is avoided. What I have learned is that best practices ask you to keep the languages separate, or to simplify as much as possible. Thankfully I pieced together a solution with some assistance from a friend who had not coded in JS in years.
$(document).ready(function() {

  $("#firstName").click(function(){
    $("#textboxDiv").text(person.firstName);
  });
  $("#lastName").click(function(){
    $("#textboxDiv").text(person.lastName);
  });
  $("#jobTitle").click(function(){
    $("#textboxDiv").text(person.jobTitle);
  });
  $("#homeOffice").click(function(){
    $("#textboxDiv").text(person.homeOffice);
  });
  $("#aboutMe").click(function(){
    $("#textboxDiv").text(person.aboutMe);
  });


});
