<?php
/**
 * Deactivation procedures for the plugin.
 *
 * @package HoldemLogger
 */

namespace HoldemLogger;

/**
 * Deactivator class
 */
class Deactivator {

		/**
		 * Deactivate the plugin.
		 *
		 * @return void
		 */
	public static function deactivate() {
		self::drop_logger_table();
	}

		/**
		 * Drop the table for logging poker hands.
		 *
		 * @return void
		 */
	private static function drop_logger_table() {
		global $wpdb;

		$table_name = $wpdb->prefix . 'holdem_logger';
		$query      = 'DROP TABLE IF EXISTS ' . $table_name;
        $wpdb->query( $query ); // phpcs:ignore
	}
}
