<?php
/**
 * Plugin Name:       Helldivers 2 Major Order
 * Description:       Display the current objective from the Ministry of Democracy.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Tyler Karle
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       helldivers-2-major-order
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_helldivers_2_major_order_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_helldivers_2_major_order_block_init' );

// add ajax route /wp-json/helldivers-2-major-order/v1/major-order
add_action( 'rest_api_init', function () {
	register_rest_route( 'helldivers-2-major-order/v1', 'war/major-orders', array(
		'methods' => 'GET',
		'callback' => 'get_major_order',
	) );
} );

// add ajax route to POST /wp-json/helldivers-2-major-order/v1/major-order
add_action( 'rest_api_init', function () {
	register_rest_route( 'helldivers-2-major-order/v1', 'war/major-orders', array(
		'methods' => 'POST',
		'callback' => 'set_major_order',
	) );
} );




function get_major_order() {
	$major_order = get_option( 'helldivers_2_major_order' );
	$decoded_major_order = json_decode( $major_order );
	return $decoded_major_order;
}

// accept json from body
function set_major_order( $request ) {
	$major_order = $request->get_json_params();	
	$current_time = new DateTime();
	$major_order['updated_at'] = $current_time->format( 'Y-m-d H:i:s' );
	update_option( 'helldivers_2_major_order', json_encode( $major_order ) );
	return $major_order;
}
