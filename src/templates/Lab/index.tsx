import { memo } from 'react';
import { Layout, MarkdownRenderer } from '../../components';
import { PageProps } from 'gatsby';
import * as cn from './Lab.module.scss';

const Lab = ({ pageContext }: PageProps<any, any>) => {
	return (
		<Layout>
			{/* <Head meta={pageContext} /> */}
			<div className={cn.container}>
				{/* <main className={cn.article}>
				</main> */}
			</div>
		</Layout>
	);
};

export default memo(Lab);
