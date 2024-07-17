<?php
/**
 * Plugin Name:       Holdem Logger
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       holdem-logger
 *
 * @package CreateBlock
 */

use HoldemLogger\Activator;
use HoldemLogger\Deactivator;
use HoldemLogger\HoldemLogger;
require_once __DIR__ . '/class-holdemlogger.php';

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

define( 'HOLDEM_LOGGER_VERSION', '0.1.0' );

/**
 * Activation hook.
 *
 * @return void
 */
function holdem_logger_activator() {
	require_once __DIR__ . '/class-activator.php';
	Activator::activate();
}

/**
 * Deactivation hook.
 *
 * @return void
 */
function holdem_logger_deactivator() {
	require_once __DIR__ . '/class-deactivator.php';
	Deactivator::deactivate();
}

register_activation_hook( __FILE__, 'holdem_logger_activator' );
register_deactivation_hook( __FILE__, 'holdem_logger_deactivator' );

new HoldemLogger();
