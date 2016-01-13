	function DashboardView() {

	}

	DashboardView.prototype.toggleProfile = function() {
	  $container = $("#folio_card").packery();
	  $("#folio_card").toggleClass("m6").toggleClass("m12");
	  $("#profile").toggle();
	  $container.packery();
	};


