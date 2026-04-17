<?php
/**
 * Typography control class.
 *
 * @since  1.0.0
 * @access public
 */

class Psychology_Therapist_Control_Typography extends WP_Customize_Control {

	/**
	 * The type of customize control being rendered.
	 *
	 * @since  1.0.0
	 * @access public
	 * @var    string
	 */
	public $type = 'psychology-therapist-typography';

	/**
	 * Array 
	 *
	 * @since  1.0.0
	 * @access public
	 * @var    string
	 */
	public $l10n = array();

	/**
	 * Set up our control.
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  object  $manager
	 * @param  string  $id
	 * @param  array   $args
	 * @return void
	 */
	public function __construct( $manager, $id, $args = array() ) {

		// Let the parent class do its thing.
		parent::__construct( $manager, $id, $args );

		// Make sure we have labels.
		$this->l10n = wp_parse_args(
			$this->l10n,
			array(
				'color'       => esc_html__( 'Font Color', 'psychology-therapist' ),
				'family'      => esc_html__( 'Font Family', 'psychology-therapist' ),
				'size'        => esc_html__( 'Font Size',   'psychology-therapist' ),
				'weight'      => esc_html__( 'Font Weight', 'psychology-therapist' ),
				'style'       => esc_html__( 'Font Style',  'psychology-therapist' ),
				'line_height' => esc_html__( 'Line Height', 'psychology-therapist' ),
				'letter_spacing' => esc_html__( 'Letter Spacing', 'psychology-therapist' ),
			)
		);
	}

	/**
	 * Enqueue scripts/styles.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function enqueue() {
		wp_enqueue_script( 'psychology-therapist-ctypo-customize-controls' );
		wp_enqueue_style(  'psychology-therapist-ctypo-customize-controls' );
	}

	/**
	 * Add custom parameters to pass to the JS via JSON.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function to_json() {
		parent::to_json();

		// Loop through each of the settings and set up the data for it.
		foreach ( $this->settings as $setting_key => $setting_id ) {

			$this->json[ $setting_key ] = array(
				'link'  => $this->get_link( $setting_key ),
				'value' => $this->value( $setting_key ),
				'label' => isset( $this->l10n[ $setting_key ] ) ? $this->l10n[ $setting_key ] : ''
			);

			if ( 'family' === $setting_key )
				$this->json[ $setting_key ]['choices'] = $this->get_font_families();

			elseif ( 'weight' === $setting_key )
				$this->json[ $setting_key ]['choices'] = $this->get_font_weight_choices();

			elseif ( 'style' === $setting_key )
				$this->json[ $setting_key ]['choices'] = $this->get_font_style_choices();
		}
	}

	/**
	 * Underscore JS template to handle the control's output.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function content_template() { ?>

		<# if ( data.label ) { #>
			<span class="customize-control-title">{{ data.label }}</span>
		<# } #>

		<# if ( data.description ) { #>
			<span class="description customize-control-description">{{{ data.description }}}</span>
		<# } #>

		<ul>

		<# if ( data.family && data.family.choices ) { #>

			<li class="typography-font-family">

				<# if ( data.family.label ) { #>
					<span class="customize-control-title">{{ data.family.label }}</span>
				<# } #>

				<select {{{ data.family.link }}}>

					<# _.each( data.family.choices, function( label, choice ) { #>
						<option value="{{ choice }}" <# if ( choice === data.family.value ) { #> selected="selected" <# } #>>{{ label }}</option>
					<# } ) #>

				</select>
			</li>
		<# } #>

		<# if ( data.weight && data.weight.choices ) { #>

			<li class="typography-font-weight">

				<# if ( data.weight.label ) { #>
					<span class="customize-control-title">{{ data.weight.label }}</span>
				<# } #>

				<select {{{ data.weight.link }}}>

					<# _.each( data.weight.choices, function( label, choice ) { #>

						<option value="{{ choice }}" <# if ( choice === data.weight.value ) { #> selected="selected" <# } #>>{{ label }}</option>

					<# } ) #>

				</select>
			</li>
		<# } #>

		<# if ( data.style && data.style.choices ) { #>

			<li class="typography-font-style">

				<# if ( data.style.label ) { #>
					<span class="customize-control-title">{{ data.style.label }}</span>
				<# } #>

				<select {{{ data.style.link }}}>

					<# _.each( data.style.choices, function( label, choice ) { #>

						<option value="{{ choice }}" <# if ( choice === data.style.value ) { #> selected="selected" <# } #>>{{ label }}</option>

					<# } ) #>

				</select>
			</li>
		<# } #>

		<# if ( data.size ) { #>

			<li class="typography-font-size">

				<# if ( data.size.label ) { #>
					<span class="customize-control-title">{{ data.size.label }} (px)</span>
				<# } #>

				<input type="number" min="1" {{{ data.size.link }}} value="{{ data.size.value }}" />

			</li>
		<# } #>

		<# if ( data.line_height ) { #>

			<li class="typography-line-height">

				<# if ( data.line_height.label ) { #>
					<span class="customize-control-title">{{ data.line_height.label }} (px)</span>
				<# } #>

				<input type="number" min="1" {{{ data.line_height.link }}} value="{{ data.line_height.value }}" />

			</li>
		<# } #>

		<# if ( data.letter_spacing ) { #>

			<li class="typography-letter-spacing">

				<# if ( data.letter_spacing.label ) { #>
					<span class="customize-control-title">{{ data.letter_spacing.label }} (px)</span>
				<# } #>

				<input type="number" min="1" {{{ data.letter_spacing.link }}} value="{{ data.letter_spacing.value }}" />

			</li>
		<# } #>

		</ul>
	<?php }

	/**
	 * Returns the available fonts.  Fonts should have available weights, styles, and subsets.
	 *
	 * @todo Integrate with Google fonts.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return array
	 */
	public function get_fonts() { return array(); }

	/**
	 * Returns the available font families.
	 *
	 * @todo Pull families from `get_fonts()`.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return array
	 */
	function get_font_families() {

		return array(
			'' => __( 'No Fonts', 'psychology-therapist' ),
        'Abril Fatface' => __( 'Abril Fatface', 'psychology-therapist' ),
        'Acme' => __( 'Acme', 'psychology-therapist' ),
        'Anton' => __( 'Anton', 'psychology-therapist' ),
        'Architects Daughter' => __( 'Architects Daughter', 'psychology-therapist' ),
        'Arimo' => __( 'Arimo', 'psychology-therapist' ),
        'Arsenal' => __( 'Arsenal', 'psychology-therapist' ),
        'Arvo' => __( 'Arvo', 'psychology-therapist' ),
        'Alegreya' => __( 'Alegreya', 'psychology-therapist' ),
        'Alfa Slab One' => __( 'Alfa Slab One', 'psychology-therapist' ),
        'Averia Serif Libre' => __( 'Averia Serif Libre', 'psychology-therapist' ),
        'Bangers' => __( 'Bangers', 'psychology-therapist' ),
        'Boogaloo' => __( 'Boogaloo', 'psychology-therapist' ),
        'Bad Script' => __( 'Bad Script', 'psychology-therapist' ),
        'Bitter' => __( 'Bitter', 'psychology-therapist' ),
        'Bree Serif' => __( 'Bree Serif', 'psychology-therapist' ),
        'BenchNine' => __( 'BenchNine', 'psychology-therapist' ),
        'Cabin' => __( 'Cabin', 'psychology-therapist' ),
        'Cardo' => __( 'Cardo', 'psychology-therapist' ),
        'Courgette' => __( 'Courgette', 'psychology-therapist' ),
        'Cherry Swash' => __( 'Cherry Swash', 'psychology-therapist' ),
        'Cormorant Garamond' => __( 'Cormorant Garamond', 'psychology-therapist' ),
        'Crimson Text' => __( 'Crimson Text', 'psychology-therapist' ),
        'Cuprum' => __( 'Cuprum', 'psychology-therapist' ),
        'Cookie' => __( 'Cookie', 'psychology-therapist' ),
        'Chewy' => __( 'Chewy', 'psychology-therapist' ),
        'Days One' => __( 'Days One', 'psychology-therapist' ),
        'Dosis' => __( 'Dosis', 'psychology-therapist' ),
        'Droid Sans' => __( 'Droid Sans', 'psychology-therapist' ),
        'Economica' => __( 'Economica', 'psychology-therapist' ),
        'Fredoka One' => __( 'Fredoka One', 'psychology-therapist' ),
        'Fjalla One' => __( 'Fjalla One', 'psychology-therapist' ),
        'Francois One' => __( 'Francois One', 'psychology-therapist' ),
        'Frank Ruhl Libre' => __( 'Frank Ruhl Libre', 'psychology-therapist' ),
        'Gloria Hallelujah' => __( 'Gloria Hallelujah', 'psychology-therapist' ),
        'Great Vibes' => __( 'Great Vibes', 'psychology-therapist' ),
        'Handlee' => __( 'Handlee', 'psychology-therapist' ),
        'Hammersmith One' => __( 'Hammersmith One', 'psychology-therapist' ),
        'Inconsolata' => __( 'Inconsolata', 'psychology-therapist' ),
        'Indie Flower' => __( 'Indie Flower', 'psychology-therapist' ),
        'IM Fell English SC' => __( 'IM Fell English SC', 'psychology-therapist' ),
        'Julius Sans One' => __( 'Julius Sans One', 'psychology-therapist' ),
        'Josefin Slab' => __( 'Josefin Slab', 'psychology-therapist' ),
        'Josefin Sans' => __( 'Josefin Sans', 'psychology-therapist' ),
        'Kanit' => __( 'Kanit', 'psychology-therapist' ),
        'Lobster' => __( 'Lobster', 'psychology-therapist' ),
        'Lato' => __( 'Lato', 'psychology-therapist' ),
        'Lora' => __( 'Lora', 'psychology-therapist' ),
        'Libre Baskerville' => __( 'Libre Baskerville', 'psychology-therapist' ),
        'Lobster Two' => __( 'Lobster Two', 'psychology-therapist' ),
        'Merriweather' => __( 'Merriweather', 'psychology-therapist' ),
        'Monda' => __( 'Monda', 'psychology-therapist' ),
        'Montserrat' => __( 'Montserrat', 'psychology-therapist' ),
        'Muli' => __( 'Muli', 'psychology-therapist' ),
        'Marck Script' => __( 'Marck Script', 'psychology-therapist' ),
        'Noto Serif' => __( 'Noto Serif', 'psychology-therapist' ),
        'Open Sans' => __( 'Open Sans', 'psychology-therapist' ),
        'Overpass' => __( 'Overpass', 'psychology-therapist' ),
        'Overpass Mono' => __( 'Overpass Mono', 'psychology-therapist' ),
        'Oxygen' => __( 'Oxygen', 'psychology-therapist' ),
        'Orbitron' => __( 'Orbitron', 'psychology-therapist' ),
        'Patua One' => __( 'Patua One', 'psychology-therapist' ),
        'Pacifico' => __( 'Pacifico', 'psychology-therapist' ),
        'Padauk' => __( 'Padauk', 'psychology-therapist' ),
        'Playball' => __( 'Playball', 'psychology-therapist' ),
        'Playfair Display' => __( 'Playfair Display', 'psychology-therapist' ),
        'PT Sans' => __( 'PT Sans', 'psychology-therapist' ),
        'Philosopher' => __( 'Philosopher', 'psychology-therapist' ),
        'Permanent Marker' => __( 'Permanent Marker', 'psychology-therapist' ),
        'Poiret One' => __( 'Poiret One', 'psychology-therapist' ),
        'Quicksand' => __( 'Quicksand', 'psychology-therapist' ),
        'Quattrocento Sans' => __( 'Quattrocento Sans', 'psychology-therapist' ),
        'Raleway' => __( 'Raleway', 'psychology-therapist' ),
        'Rubik' => __( 'Rubik', 'psychology-therapist' ),
        'Rokkitt' => __( 'Rokkitt', 'psychology-therapist' ),
        'Russo One' => __( 'Russo One', 'psychology-therapist' ),
        'Righteous' => __( 'Righteous', 'psychology-therapist' ),
        'Slabo' => __( 'Slabo', 'psychology-therapist' ),
        'Source Sans Pro' => __( 'Source Sans Pro', 'psychology-therapist' ),
        'Shadows Into Light Two' => __( 'Shadows Into Light Two', 'psychology-therapist'),
        'Shadows Into Light' => __( 'Shadows Into Light', 'psychology-therapist' ),
        'Sacramento' => __( 'Sacramento', 'psychology-therapist' ),
        'Shrikhand' => __( 'Shrikhand', 'psychology-therapist' ),
        'Tangerine' => __( 'Tangerine', 'psychology-therapist' ),
        'Ubuntu' => __( 'Ubuntu', 'psychology-therapist' ),
        'VT323' => __( 'VT323', 'psychology-therapist' ),
        'Varela Round' => __( 'Varela Round', 'psychology-therapist' ),
        'Vampiro One' => __( 'Vampiro One', 'psychology-therapist' ),
        'Vollkorn' => __( 'Vollkorn', 'psychology-therapist' ),
        'Volkhov' => __( 'Volkhov', 'psychology-therapist' ),
        'Yanone Kaffeesatz' => __( 'Yanone Kaffeesatz', 'psychology-therapist' )
		);
	}

	/**
	 * Returns the available font weights.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return array
	 */
	public function get_font_weight_choices() {

		return array(
			'' => esc_html__( 'No Fonts weight', 'psychology-therapist' ),
			'100' => esc_html__( 'Thin',       'psychology-therapist' ),
			'300' => esc_html__( 'Light',      'psychology-therapist' ),
			'400' => esc_html__( 'Normal',     'psychology-therapist' ),
			'500' => esc_html__( 'Medium',     'psychology-therapist' ),
			'700' => esc_html__( 'Bold',       'psychology-therapist' ),
			'900' => esc_html__( 'Ultra Bold', 'psychology-therapist' ),
		);
	}

	/**
	 * Returns the available font styles.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return array
	 */
	public function get_font_style_choices() {

		return array(
			'' => esc_html__( 'No Fonts Style', 'psychology-therapist' ),
			'normal'  => esc_html__( 'Normal', 'psychology-therapist' ),
			'italic'  => esc_html__( 'Italic', 'psychology-therapist' ),
			'oblique' => esc_html__( 'Oblique', 'psychology-therapist' )
		);
	}
}
