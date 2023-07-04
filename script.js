function progress()
{
var input= parseInt ( document.getElementById("input").value);
var max= parseInt (document.getElementById("max").value );
if(input > max)
{
alert("input value is greater than max");
}
else
{
const percentage = ( input /max )*100;
const roundedPercentage = Math.floor (percentage);
var bar = document.getElementById("bar");
bar.style.width= ( roundedPercentage+"%" );
var one = document.createElement('span');
one.innerHTML=roundedPercentage+"%";
one.classList.add('highlight');
bar.appendChild(one);
var pie = document.getElementById("pie");
pie.style.width= ( roundedPercentage+"%" );
pie.style.borderRadius = ( roundedPercentage + "%");
var one = document.createElement('span');
one.innerHTML=roundedPercentage+"%";
one.classList.add('highlight');
pie.appendChild(one);
}
}

