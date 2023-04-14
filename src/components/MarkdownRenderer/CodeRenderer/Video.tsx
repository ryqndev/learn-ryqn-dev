import * as cn from './CodeRenderer.module.scss';

const Video = ({ link }: { link: string }) => {
	return (
		<div className={cn.video}>
			<iframe
				src={link}
				title='Embedded Workshop Video'
				frameBorder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
				allowFullScreen
			></iframe>
		</div>
	);
};

export { Video };
