$(window).bind('keydown', function(event) {
    if (event.ctrlKey || event.metaKey) {
        switch (String.fromCharCode(event.which).toLowerCase()) {
			case 's':
				event.preventDefault()
				document.getElementById('validate').click()
				break
			case 'e':
				event.preventDefault()
			    document.getElementById('code').value = ""
				break
        }
    }
});

$('.code-input').on('keydown', function (event) {
	if (event.keyCode === 9) {
		var v = this.value,
			s = this.selectionStart,
			e = this.selectionEnd
		this.value = v.substring(0, s) + '\t' + v.substring(e)
		this.selectionStart = this.selectionEnd = s + 1
		return false
	}
})

$('#validate').on('click', function () {
	let json_code = document.getElementById('code').value
	try {
		let json = JSON.parse(json_code)
		swal({
			title: "JSON validated!",
			text: "Would you like to download JSON file?",
			icon: "success",
			buttons: true,
			dangerMode: true,
		})
		.then((download) => {
			if (download) {
				let data = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(json))
				let dlAnchorElem = document.getElementById('downloadAnchorElem')
				dlAnchorElem.setAttribute("href", data)
				dlAnchorElem.setAttribute("download", "data.json")
				dlAnchorElem.click()
			}
		})
	} catch (error) {
		swal("Error parsing JSON", "" + error, "error")
	}
})