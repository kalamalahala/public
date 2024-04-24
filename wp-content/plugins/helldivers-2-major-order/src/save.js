/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * i18n Import
 */
import { __ } from "@wordpress/i18n";

/**
 * Asset Imports
 */
import head from "./img/head.png";
import sample from "./img/sample.png";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save() {
	return (
		<>
		<div className="helldivers-2-major-order-block">
			<header className="mo-upper">
				<div className="mo-timer-group">
					<div className="mo-timer-ends-in">
						{__("Major Order ends in:", "helldivers-2-major-order")}
					</div>
					<div className="mo-timer-countdown">
						<span>00</span>:<span>00</span>:<span>00</span>
					</div>
				</div>
			</header>
			<img src={head} />
			<div className="mo-body">
				{__(
					'We have discovered Automoton plans for something called "The Reclamation". Capturing their deep-space comms array on Troost may reveal critical intel about their plans.',
					"helldivers-2-major-order",
				)}
			</div>
			<div className="mo-requirements-group">
				<div className="mo-overview">
					<i className="mo-overview-icon"></i>
					<p className="mo-overview-title">
						{__("ORDER OVERVIEW", "helldivers-2-major-order")}
					</p>
				</div>
				<div className="mo-requirement-item">
					<div className="mo-requirements-checkbox"></div>
					<div className="mo-requirements">
						<p>
							{__(
								"Capture the deep-space comms array on Troost",
								"helldivers-2-major-order",
							)}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className="sample-mo">
			<img src={sample} alt="sample" />
		</div>
	</>
	);
}
