/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * Asset Imports
 */
import head from './img/head.png';

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
		// <p { ...useBlockProps() }>
		// 	{ __(
		// 		'Helldivers 2 Major Order – hello from the editor!',
		// 		'helldivers-2-major-order'
		// 	) }
		// </p>
	);
}
