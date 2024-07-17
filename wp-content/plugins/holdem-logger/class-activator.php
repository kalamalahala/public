<?php
/**
 * Activation procedures for the plugin.
 *
 * @package HoldemLogger
 */

namespace HoldemLogger;

/**
 * Activator class
 */
class Activator {

	/**
	 * Activate the plugin.
	 *
	 * @return void
	 */
	public static function activate() {
		self::create_logger_table();
	}

	/**
	 * Create the table for logging poker hands.
	 *
	 * @return void
	 */
	private static function create_logger_table() {
		global $wpdb;

		$table_name = $wpdb->prefix . 'holdem_logger';

		$charset_collate = $wpdb->get_charset_collate();

		$sql = "CREATE TABLE $table_name (
            id mediumint(9) NOT NULL AUTO_INCREMENT,
            date_created datetime DEFAULT '0000-00-00 00:00:00' NOT NULL,
            position mediumint(9) NOT NULL,
            hole1 varchar(255) NOT NULL,
            hole2 varchar(255) NOT NULL,
            action_taken varchar(255) NOT NULL,
            PRIMARY KEY  (id)
        ) $charset_collate;";

		require_once ABSPATH . 'wp-admin/includes/upgrade.php';
		dbDelta( $sql );
	}
}
