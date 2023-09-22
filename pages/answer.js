var currQ = parseInt(localStorage.getItem("currQuestion"));
var corrAns = parseInt(localStorage.getItem("correctAns")); 
const answers = ["Drink water to stay hydrated because water helps yor body to stay cool and work properly. When it's hot, we sweat, and that makes us lose water. Drinking water helps us stay healthy and not get too hot or tired","They can also visit a local clinic or community health center that provides care regardless of a family's ability to pay. It's important because everyone deserves a chance to get better when they're sick.","You should tell a teacher or a school staff member about the dirty water immediately. They can investigate and make sure the water is safe to drink. Clean drinking water is essential to stay healthy because dirty water can make you sick."]
document.getElementById("Consequences").innerHTML = answers[currQ];
if(corrAns)
{
    document.getElementById("right_wrong").innerHTML = "Correct Answer";
    
}
else
{
    document.getElementById("right_wrong").innerHTML = "Wrong Answer";
    
}
function goBack()
{
    window.open("../pages/question.html","_self");
}