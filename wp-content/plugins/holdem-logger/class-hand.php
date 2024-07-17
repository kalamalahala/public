<?php
/**
 * Schema for a poker hand.
 *
 * @package HoldemLogger
 */

namespace HoldemLogger;

/**
 * Hand class
 */
class Hand {

	/**
	 * Seat position of played hand.
	 *
	 * @var integer
	 */
	public int $position;

	/**
	 * Hole card 1.
	 *
	 * @var Card
	 */
	public ?Card $card1;

	/**
	 * Hole card 2.
	 *
	 * @var Card
	 */
	public ?Card $card2;

	/**
	 * Action taken by player.
	 *
	 * @var string
	 */
	public string $action;
}
