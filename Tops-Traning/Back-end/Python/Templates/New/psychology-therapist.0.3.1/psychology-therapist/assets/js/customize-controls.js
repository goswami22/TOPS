( function( api ) {

	// Extends our custom "psychology-therapist" section.
	api.sectionConstructor['psychology-therapist'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );