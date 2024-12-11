export default {
	title: 'Base/Typography',
};

export const Headings = function () {
	return (
		<div style={{ padding: '2rem' }}>
			<div style={{ marginBottom: '5rem' }}>
				<div style={{ marginBottom: '1rem' }} className='heading-80'>
					Heading 80
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-72'>
					Heading 72
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-64'>
					Heading 64
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-56'>
					Heading 56
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-48'>
					Heading 48
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-40'>
					Heading 40
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-32'>
					Heading 32
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-28'>
					Heading 28
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-24'>
					Heading 24
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-20'>
					Heading 20
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-18'>
					Heading 18
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-16'>
					Heading 16
				</div>
				<div style={{ marginBottom: '1rem' }} className='heading-14'>
					Heading 14
				</div>
			</div>
			<div style={{ marginBottom: '5rem' }}>
				<div style={{ marginBottom: '1rem' }} className='body-18'>
					Body 18
				</div>
				<div style={{ marginBottom: '1rem' }} className='body-18-bold'>
					Body 18 Bold
				</div>
				<div style={{ marginBottom: '1rem' }} className='body-16'>
					Body 16
				</div>
				<div style={{ marginBottom: '1rem' }} className='body-16-bold'>
					Body 16 Bold
				</div>
				<div style={{ marginBottom: '1rem' }} className='body-14'>
					Body 14
				</div>
				<div style={{ marginBottom: '1rem' }} className='body-14-bold'>
					Body 14 Bold
				</div>
			</div>
			<div style={{ marginBottom: '5rem' }}>
				<div style={{ marginBottom: '1rem' }} className='label-16'>
					Label 16
				</div>
				<div style={{ marginBottom: '1rem' }} className='label-14'>
					Label 14
				</div>
				<div style={{ marginBottom: '1rem' }} className='label-12'>
					Label 12
				</div>
			</div>
			<div style={{ marginBottom: '5rem' }}>
				<div style={{ marginBottom: '1rem' }} className='button-16'>
					Button 16
				</div>
			</div>
			<div style={{ marginBottom: '5rem' }}>
				<div style={{ marginBottom: '1rem' }} className='quote-32'>
					Quote 32
				</div>
				<div style={{ marginBottom: '1rem' }} className='quote-24'>
					Quote 24
				</div>
			</div>
			<div style={{ marginBottom: '5rem' }}>
				<div style={{ marginBottom: '1rem' }} className='ticker-140'>
					Ticker 140
				</div>
			</div>
			<div style={{ marginBottom: '2rem' }} className='typography'>
				<h1>Heading 1</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies accumsan eros eget ultricies. Aliquam dictum faucibus
					ullamcorper. Quisque consequat massa et mattis accumsan. Nulla sagittis fermentum enim at sagittis. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Praesent porttitor at arcu eu dignissim.
				</p>
				<h2>Heading 2</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies accumsan eros eget ultricies. Aliquam dictum faucibus
					ullamcorper. Quisque consequat massa et mattis accumsan. Nulla sagittis fermentum enim at sagittis. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Praesent porttitor at arcu eu dignissim.
				</p>
				<h3>Heading 3</h3>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies accumsan eros eget ultricies. Aliquam dictum faucibus
					ullamcorper. Quisque consequat massa et mattis accumsan. Nulla sagittis fermentum enim at sagittis. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Praesent porttitor at arcu eu dignissim.
				</p>
				<h4>Heading 4</h4>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies accumsan eros eget ultricies. Aliquam dictum faucibus
					ullamcorper. Quisque consequat massa et mattis accumsan. Nulla sagittis fermentum enim at sagittis. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Praesent porttitor at arcu eu dignissim.
				</p>
				<h5>Heading 5</h5>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies accumsan eros eget ultricies. Aliquam dictum faucibus
					ullamcorper. Quisque consequat massa et mattis accumsan. Nulla sagittis fermentum enim at sagittis. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Praesent porttitor at arcu eu dignissim.
				</p>
				<h6>Heading 6</h6>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies accumsan eros eget ultricies. Aliquam dictum faucibus
					ullamcorper. Quisque consequat massa et mattis accumsan. Nulla sagittis fermentum enim at sagittis. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Praesent porttitor at arcu eu dignissim.
				</p>
				<ol>
					<li>Ordered list item</li>
					<li>Ordered list item</li>
					<li>Ordered list item</li>
				</ol>
				<ul>
					<li>Unordered list item</li>
					<li>Unordered list item</li>
					<li>Unordered list item</li>
				</ul>
			</div>
		</div>
	);
};
Headings.parameters = {
	status: {
		type: 'done',
	},
};
Headings.storyName = 'Typography';
