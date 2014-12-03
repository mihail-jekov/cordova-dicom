var dicom = {
	createEvent: function() {
		alert("ASDASD");
		var successCallback = alert(1);
		var errorCallback = alert(2);
		cordova.exec(successCallback, errorCallback, 'ParseDicom', 'action', [12]);
	}
}

module.exports = dicom;