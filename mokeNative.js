(function () {
	window.nativeBridge = {
		postMessage: function (_data) {
			var bridgeName = _data.bridgeName
			var data = _data.data || {}
			var callbackId = _data.callbackId
			var responstId = _data.responstId || Math.random()

			window.JSBridge.receiveMessage({
				bridgeName,
				data:'sdvsdbrberberer',
				callbackId,
				responstId
			})
		}
	}
})();