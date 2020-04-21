var mapa;
function intitMap()
{
	mapa=new google.maps.Map(
		document.getElementById('mapa'),
		{center: new google.maps.LatLng(0,0), zoom:18});
}