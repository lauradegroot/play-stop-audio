$(function(){

	stop();	

});		


var stop = function(){
	var testfile = $('.test')[0];
	testfile.pause(function(){
		console.log(testfile.currentTime);
	});
	// $('.test')[0].currentTime=0;
}
