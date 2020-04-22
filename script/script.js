var mapa;
function intitMap()
{
mapa=new google.maps.Map(
		document.getElementById('mapa'),
		{center: new google.maps.LatLng(4.665663, -74.077451), zoom:18});
}