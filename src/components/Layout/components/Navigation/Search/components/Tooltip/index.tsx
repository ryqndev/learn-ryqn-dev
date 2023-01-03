import UpIcon from './up.svg';
import DownIcon from './down.svg';
import EnterIcon from './enter.svg';
import * as cn from './Tooltip.module.scss';

const Tooltip = () => {
	return (
		<div className={cn.container}>
			<UpIcon className={cn.icon} viewBox='0 0 48 48' />
			<DownIcon className={cn.icon} viewBox='0 0 48 48' />
			<p>Move Up / Down</p>
			<div />
			<div />
			<EnterIcon className={cn.icon} viewBox='0 0 48 48' />
			<p>Open Link</p>
		</div>
	);
};

export { Tooltip };
