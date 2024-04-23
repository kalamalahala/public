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
		<div className="helldivers-2-major-order-block">
			<header className="mo-header">
				<div className="mo-header__container">
					<p 
						className="mo-header__time-text"
					>
						{
							__('Major Order ends in:', 'helldivers-2-major-order')
						}
					</p>
					<img
						src={head}
						alt="Helldivers 2 Major Order"
						className="mo-header__logo"
					/>
				</div>
			</header>
		</div>
	);
}
