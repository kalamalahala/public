<?php
/**
 * This file contains the core functionality of the plugin.
 *
 * @package HoldemLogger
 */

namespace HoldemLogger;

/**
 * HoldemLogger class
 */
class HoldemLogger {

	/**
	 * Plugin version.
	 *
	 * @var string
	 */
	private $version = HOLDEM_LOGGER_VERSION;

	/**
	 * API Namespace.
	 *
	 * @var string
	 */
	private $api_namespace = 'holdem-logger/v1';

	/**
	 * Constructor.
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'create_block_holdem_logger_block_init' ) );
		add_action( 'init', array( $this, 'register_holdem_logger_endpoints' ) );
	}

	/**
	 * Registers the block using the metadata loaded from the `block.json` file.
	 * Behind the scenes, it registers also all assets so they can be enqueued
	 * through the block editor in the corresponding context.
	 *
	 * @see https://developer.wordpress.org/reference/functions/register_block_type/
	 */
	public function create_block_holdem_logger_block_init() {
		register_block_type( __DIR__ . '/build' );
	}

	/**
	 * Register WordPress REST API endpoints for logging hands.
	 *
	 * @return void
	 */
	public function register_holdem_logger_endpoints() {
		add_action(
			'rest_api_init',
			function () {
				register_rest_route(
					'holdem-logger/v1',
					'/log',
					array(
						'methods'  => 'POST',
						'callback' => array( $this, 'save_hand' ),
					)
				);

				register_rest_route(
					'holdem-logger/v1',
					'/log',
					array(
						'methods'  => 'GET',
						'callback' => array( $this, 'get_hands' ),
					)
				);

				register_rest_route(
					'holdem-logger/v1',
					'/log/(?P<id>\d+)',
					array(
						'methods'  => 'GET',
						'callback' => array( $this, 'get_hand' ),
					)
				);
			}
		);
	}

	/**
	 * Save a hand to the database.
	 *
	 * @param WP_REST_Request $request The request object.
	 * @return WP_REST_Response
	 */
	public function save_hand( $request ) {
		global $wpdb;

		$body     = json_decode( $request->get_body(), true );
		$date     = current_time( 'mysql' );
		$position = $body['position'];
		$hole1    = $body['hole1'];
		$hole2    = $body['hole2'];
		$action   = $body['action'];

		$row = array(
			'date'     => $date,
			'position' => $position,
			'hole1'    => $hole1,
			'hole2'    => $hole2,
			'action'   => $action,
		);

		$table = $wpdb->prefix . 'holdem_logger';

		$insert = $wpdb->insert( $table, $row ); // phpcs:ignore

		if ( ! $insert ) {
			return new \WP_REST_Response( 'Error logging hand', 500 );
		}

		return new \WP_REST_Response( 'Hand logged', 200 );
	}

	/**
	 * Get all hands from the database.
	 *
	 * @return WP_REST_Response
	 */
	public function get_hands() {
		global $wpdb;

		$table = $wpdb->prefix . 'holdem_logger';

        $hands = $wpdb->get_results( "SELECT * FROM $table" ); // phpcs:ignore

		return new \WP_REST_Response( $hands, 200 );
	}
}
