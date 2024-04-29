/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * Asset Imports
 */
import head from "./img/head.png";
import sample from "./img/sample.png";
import medal from "./img/medal.png";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit() {
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
				<img src={head} className="mo-header-img" />
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
						<div className="mo-requirements">
							<div className="mo-requirements-checkbox"></div>
							<p>
								{__(
									"Capture the deep-space comms array on Troost!",
									"helldivers-2-major-order",
								)}
							</p>
						</div>
					</div>
				</div>
				<footer className="mo-footer">
					<div className="mo-rewards-box">
						<p className="mo-rewards-title">
							{__("REWARD", "helldivers-2-major-order")}
						</p>
						<div className="mo-rewards-text">
							<img src={medal} />
							<span class="reward">1</span>
						</div>
					</div>
				</footer>
			</div>
			<div className="sample-mo">
				<img src={sample} alt="sample" />
			</div>
		</>
	);
}
