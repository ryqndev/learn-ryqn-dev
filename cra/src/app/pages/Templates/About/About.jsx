import { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { ScrollableNotice } from '../../../components';

const About = () => {
	let { url } = useRouteMatch();
	useEffect(() => {
		document.title = 'Learn';
        navigator.sendBeacon(
            'https://us-central1-analytics-b9413.cloudfunctions.net/init',
            // createBlob({
            //     product: this.product,
            // })
        );
	}, []);

	return (
		<div className='template-about--wrapper'>
			<div className='page__component'>
				<section>
					<h1>Templates</h1>
					<p>
						This is a templating tool that will set up a web app
						boilerplate with your preferred languages. Not limited
						to but made for beginner hackathons in mind. The
						documentation provided is also written in the
						perspective for those starting out web development for
						the first time.
					</p>
					<ScrollableNotice className='hero' />
				</section>

				<section>
					<h2>Why do I need this tool?</h2>
					<p className='description'>
						Web development has become extremely versatile in recent
						years. Improvements to technology have driven huge
						innovations to the web and allow developers the freedom
						to create whatever they want. However, these benefits do
						not come without cost. For every new application, there
						exists a new technology - to use machine learning, we
						can run a python server - to write a 2d multiplayer
						game, we can use the HTML canvas element with websockets
						in the backend - to make a dashboard with multiple
						updating components, we can use a front-end
						component-based framework like React or Vue - etc...{' '}
					</p>
					<p className='description'>
						<span>tl;dr </span> every new idea yields a brand new
						library / language / framework that can execute it
						better than existing solutions and ... now we have so
						many tools available, it's easy to get lost. Here,
						you'll answer 2-3 questions about your web-app and I'll
						provide a starting template as well as documentation for
						you to get started.{' '}
					</p>
				</section>

				<section>
					<h2>What do I need to know beforehand?</h2>
					<p className='description'>
						The first thing you'll be asked is if you need a
						backend. This is a pretty loaded question and to know if
						you need a backend, ask yourself these questions:
					</p>
					<ul>
						<li>
							Do I need to call an API(with a secret API key)?
						</li>
						<li>Do I need a database?</li>
						<li>
							Do I want to have users login / save unique user
							data?
						</li>
						<li>Do I need users to interact with each other?</li>
						<li>Do I need to sync user data?</li>
					</ul>
					<p className='description'>
						If you answered 'yes' to any of the above, you will
						likely need a backend. If your use case is simple or you
						prefer not having to worry about a backend, you can use
						a BaaS (Backend as a Service) like Firebase but
						otherwise, you'll likely answer yes to the first
						question.
					</p>

					<h3>Backend Language</h3>
					<p className='description'>
						If you choose to have a backend, you will need to select
						a language to write it in. The first and most important
						point to consider is to pick the correct tool for the
						job. If your app requires some machine learning like
						image recognition or NLP, you will probably want to go
						for Python since it is one of the{' '}
						<a
							href='https://github.blog/2019-01-24-the-state-of-the-octoverse-machine-learning/'
							target='_blank'
							rel='noopener noreferrer'
						>
							most popular
						</a>{' '}
						and supported language for this type of work.
					</p>

					<p className='description'>
						The other thing to consider is which language you are
						most comfortable with. If you've only written Java
						before, you should go for Java as your server side
						language of choice. Since most of your core
						algorithms/business logic will be run on the
						server-side, it's best that you're in a comfortable
						environment where you're focused on solving problems
						with your code, rather than in your code.
					</p>

					<h3>Frontend</h3>
					<p className='description'>
						There are no "language" options for the frontend. Every
						webpage is written in HTML, styled with CSS, and
						executes Javascript. Your choice, however, lies in
						frameworks. Frameworks often look like a language
						themselves considering how unique each one works but the
						idea behind them are the same. If you are new to web
						development, it is highly recommended that you pick
						"vanilla" (no framework) so you can learn the ropes and
						learn later on what these frameworks are doing for you.
						Eventually, you'll want to use one of the many
						frameworks available if you're developing a mid to large
						sized project.
					</p>

					<p className='description'>
						With these things in mind,{' '}
						<span>let's get started!</span>
					</p>
				</section>
				<Link to={`${url}/create`}>
					<button>START</button>
				</Link>
			</div>
		</div>
	);
};

export default About;
