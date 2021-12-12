import { useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import scrollWithOffset from '../../../controller/libs/hashLinkScroll';

const ListItem = ({ ordered, children, ...props }) => {
	const location = useLocation();
	/**
	 * Links have an actual link nested deep inside. Will rethink infrastructure later but this will
	 * work for now as long as all list items in markdown are links.
	 */
	const extraTextFromInnerLink = node =>
		node.children?.[0]?.children?.[0]?.children?.[0]?.value;
	const linkLocation = location.pathname + children[0].props.href;

	if (children.length > 1) {
		return (
			<li>
				{'\u00A0'.repeat(ordered ? 6 : 0)}
				<ol>
					<HashLink
						smooth
						to={linkLocation}
						scroll={el => scrollWithOffset(el)}
					>
						<li>
							{'\u00A0'.repeat(ordered ? 6 : 0)}
							<span>•</span>
							{'\u00A0'.repeat(6)}
							<span className='text'>
								{extraTextFromInnerLink(props.node)}
							</span>
						</li>
					</HashLink>
					{children.slice(1)}
				</ol>
			</li>
		);
	}
	return (
		<HashLink smooth to={linkLocation} scroll={el => scrollWithOffset(el)}>
			<li>
				{'\u00A0'.repeat(ordered ? 6 : 0)}
				<span>•</span>
				{'\u00A0'.repeat(6)}
				<span className='text'>
					{extraTextFromInnerLink(props.node)}
				</span>
			</li>
		</HashLink>
	);
};

export default ListItem;
