export default {
	title: 'Base/Colours',
};

interface ItemProps {
	colour: string;
	name: string;
	colourRaw?: string;
	colourHsl?: string;
	transparency?: string;
}

const StyleItem = function (props: ItemProps) {
	return (
		<li>
			<div className={` border-[2px] bg-green transition-colors duration-slow  ease-smooth  ${props.colour} `} style={{ height: '5rem', width: '8rem', marginBottom: '0.5rem' }}></div>
			<span style={{ fontSize: '0.75rem' }}>{props.name}</span>
		</li>
	);
};

export const Colours = function () {
	return (
		<div className={`font-sans`} style={{ display: 'flex', flexWrap: 'wrap', overflow:'scroll' }}>
			<div style={{ marginBottom: '2rem', width: '100%', padding: '2rem 2rem 0' }}>
				<strong className='heading-5'>Base Colours</strong>
			</div>
			
			<div style={{ marginBottom: '2rem', width: '100%', padding: '2rem' }}>
                <strong>Brand</strong>

				<ul data-theme='brand' style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
					<StyleItem colour='brand bg-button-background-primary' name='Button Background' />
					<StyleItem colour='brand bg-button-background-primary-hover' name='Button Background Hover' />
					<StyleItem colour='brand bg-button-background-primary-disabled' name='Button Background Disabled' />
					<StyleItem colour='brand bg-button-text-primary' name='Button Text' />
					<StyleItem colour='brand bg-button-text-primary-hover' name='Button Text Hover' />
					<StyleItem colour='brand bg-button-text-primary-outline' name='Button Text Outline' />
				</ul>
			</div>
			
			<div style={{ marginBottom: '2rem', width: '100%', padding: '2rem' }}>
                <strong>Error</strong>

				<ul data-theme='error' style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
					<StyleItem colour='error bg-button-background-primary' name='Button Background' />
					<StyleItem colour='error bg-button-background-primary-hover' name='Button Background Hover' />
					<StyleItem colour='error bg-button-background-primary-disabled' name='Button Background Disabled' />
					<StyleItem colour='error bg-button-text-primary' name='Button Text ' />
					<StyleItem colour='error bg-button-text-primary-hover' name='Button Text Hover' />
					<StyleItem colour='error bg-button-text-primary-outline' name='Button Text Outline' />
				</ul>
			</div>
			
			
		</div>
	);
};
Colours.parameters = {
	status: {
		type: 'done',
	},
};
Colours.storyName = 'Colours';
