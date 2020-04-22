var mapa;
function initMap()
{
var latlang={lat:4.710859,lng:-74.074955};
var latlang2={lat:6.247514, lng:-75.571676};
mapa=new google.maps.Map(
		document.getElementById('mapa'),
		{center: new google.maps.LatLng(4.665663, -74.077451), zoom:7.5});

var marker= new google.maps.Marker({position:latlang,map:mapa});

marker= new google.maps.Marker({
	map:mapa,
	draggable:true,
	animation:google.maps.Animation.BOUNCE,
	position:new google.maps.LatLng(6.219131, -75.566329),
	icon:'images/house6.jpg'
});
}