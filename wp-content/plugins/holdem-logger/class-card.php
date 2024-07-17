<?php
/**
 * Object schema for a poker card.
 *
 * @package HoldemLogger
 */

namespace HoldemLogger;

/**
 * Card class
 */
class Card {
	/**
	 * Suit of the card.
	 *
	 * @var string
	 */
	public string $suit;

	/**
	 * Rank of the card.
	 *
	 * @var string
	 */
	public string $rank;
}
