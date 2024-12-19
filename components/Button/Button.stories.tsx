import type { Meta, StoryObj } from '@storybook/react';

import Button, {  ButtonProps } from "./Button";
import { CircleOutlined, CircleRounded, RingVolumeOutlined } from '@mui/icons-material';

const meta = {
	title: 'atom/Button',
	component: Button,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
	  // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
	  layout: 'fullscreen',
	},
	args: {
	},
  } satisfies Meta<typeof Button>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
interface ItemProps {
	colour: string;
	name: string;
	colourRaw?: string;
	colourHsl?: string;
	transparency?: string;
}

export const ButtonStory = function () {
	return (
		<div className={`font-sans`} style={{ display: 'flex', flexWrap: 'wrap', overflow:'scroll' }}>
			<div style={{ marginBottom: '2rem', width: '100%', padding: '2rem 2rem 0' }}>
				<strong className='heading-5'>Brand</strong>
			</div>
			
			<div className="brand" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Primary</strong>
				
				<div className='flex flex-col gap-6'>
					xxSmall
					<Button size={"xxsmall"} variant={"primary"} prefix={ <CircleOutlined  /> } />
					<Button size={"xxsmall"} isDisabled variant={"primary"} prefix={<CircleOutlined /> } />
				</div>
				<div className='flex flex-col gap-6'>
					xSmall
					<Button size={"xsmall"} variant={"primary"} prefix={<CircleOutlined />} />
					<Button size={"xsmall"} isDisabled variant={"primary"} prefix={<CircleOutlined />} />
				</div>
				<div className='flex flex-col gap-6'>
					Small
					<Button size={"small"} variant={"primary"} prefix={<CircleOutlined /> } />
					<Button size={"small"} variant={"primary"} title='Button' >Button</Button>
					<Button size={"small"} variant={"primary"} prefix={<div>O</div> } title='Button'  >Button</Button>
					<Button size={"small"} variant={"primary"} suffix={<div>O</div>} title='Button'  >Button</Button>
					<Button size={"small"} variant={"primary"} prefix={<div>O</div> } suffix={<div>O</div>} title='Button' >Button</Button>
					<Button size={"small"} isDisabled={true}  variant={"primary"} title='Button'  >Button</Button>
				</div>
				
				<div className='flex flex-col gap-6'>
					Medium 
					<Button  variant={"primary"} prefix={<CircleOutlined /> } />
					<Button  variant={"primary"} title='Button' >Button</Button>
					<Button  variant={"primary"} prefix={<div>O</div> } title='Button'  >Button</Button>
					<Button  variant={"primary"} suffix={<div>O</div>} title='Button'  >Button</Button>
					<Button  variant={"primary"} prefix={<div>O</div> } suffix={<div>O</div>} title='Button' >Button</Button>
					<Button isDisabled={true}  variant={"primary"} title='Button'  >Button</Button>
				</div>

				<div className='flex flex-col gap-6'>
					Large
					<Button size={"large"} variant={"primary"} prefix={<CircleOutlined />} />
					<Button size={"large"} variant={"primary"} title='Button' >Button</Button>
					<Button size={"large"} variant={"primary"} prefix={<div>O</div> } title='Button'  >Button</Button>
					<Button size={"large"} variant={"primary"} suffix={<div>O</div>} title='Button'  >Button</Button>
					<Button size={"large"} variant={"primary"} prefix={<div>O</div> } suffix={<div>O</div>} title='Button' >Button</Button>
					<Button size={"large"} isDisabled={true}  variant={"primary"} title='Button'  >Button</Button>
				</div>

			</div>

			<div className="brand" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Secondary</strong>
				
				<Button  variant={"secondary"} title='Button'  >Button</Button>
				<Button  variant={"secondary"} prefix={<div>O</div> } title='Button' >Button</Button>
				<Button  variant={"secondary"} suffix={<div>O</div>} title='Button' >Button</Button>
				<Button  variant={"secondary"} prefix={<div>O</div> } suffix={<div>O</div>} title='Button' >Button</Button>
				<Button isDisabled={true}  variant={"secondary"} title='Button' >Button</Button>
				
			</div>

			
			<div className="brand" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Tertiary</strong>
				
				<Button  variant={"tertiary"} title='Button' >Button</Button>
				<Button  variant={"tertiary"} prefix={<div>O</div> } title='Button' >Button</Button>
				<Button  variant={"tertiary"} suffix={<div>O</div>} title='Button' >Button</Button>
				<Button  variant={"tertiary"} prefix={<div>O</div> } suffix={<div>O</div>} title='Button' >Button</Button>
				<Button isDisabled={true}  variant={"tertiary"} title='Button' >Button</Button>
				
			</div>
			
			<div className="brand" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Link</strong>
				
				<Button size="link" variant={"link"} title='Button' >Button</Button>
				<Button size="link" variant={"link"} prefix={<div>O</div> } title='Button' >Button</Button>
				<Button size="link" variant={"link"} suffix={<div>O</div>} title='Button' >Button</Button>
				<Button size="link" variant={"link"} prefix={<div>O</div> } suffix={<div>O</div>} title='Button' >Button</Button>
				<Button isDisabled={true}  variant={"link"} title='Button' >Button</Button>
				
			</div>

			
			<div style={{ marginBottom: '2rem', width: '100%', padding: '2rem 2rem 0' }}>
				<strong className='heading-5'>Error</strong>
			</div>
			
			<div className="error" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Primary</strong>
				
				<Button  variant={"primary"} title='Button' >Button</Button>
				<Button  variant={"primary"} prefix={<div>O</div> } title='Button' >Button</Button>
				<Button  variant={"primary"} suffix={<div>O</div>} title='Button' >Button</Button>
				<Button  variant={"primary"} prefix={<div>O</div> } suffix={<div>O</div>} title='Button' >Button</Button>
				<Button isDisabled={true}  variant={"primary"} title='Button' >Button</Button>
				

			</div>

			<div className="error" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Secondary</strong>
				
				<Button  variant={"secondary"} title='Button' >Button</Button>
				<Button  variant={"secondary"} prefix={<div>O</div> } title='Button' >Button</Button>
				<Button  variant={"secondary"} suffix={<div>O</div>} title='Button' >Button</Button>
				<Button  variant={"secondary"} prefix={<div>O</div> } suffix={<div>O</div>} title='Button' >Button</Button>
				<Button isDisabled={true}  variant={"secondary"} title='Button' >Button</Button>
				
			</div>

			
			<div className="error" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Tertiary</strong>
				
				<Button  variant={"tertiary"} title='Button' >Button</Button>
				<Button  variant={"tertiary"} prefix={<div>O</div> } title='Button' >Button</Button>
				<Button  variant={"tertiary"} suffix={<div>O</div>} title='Button' >Button</Button>
				<Button  variant={"tertiary"} prefix={<div>O</div> } suffix={<div>O</div>} title='Button' >Button</Button>
				<Button isDisabled={true}  variant={"tertiary"} title='Button' >Button</Button>
				
			</div>
			
			<div className="error" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Link</strong>
				
				<Button  variant={"link"} title='Button' >Button</Button>
				<Button  variant={"link"} prefix={<div>O</div> } title='Button' >Button</Button>
				<Button  variant={"link"} suffix={<div>O</div>} title='Button' >Button</Button>
				<Button  variant={"link"} prefix={<div>O</div> } suffix={<div>O</div>} title='Button' >Button</Button>
				<Button size="link" isDisabled={true}  variant={"link"} title='Button' >Button</Button>
				
			</div>

		</div>
	);
};


ButtonStory.parameters = {
	status: {
		type: 'progress',
	},
};
ButtonStory.storyName = 'Buttons';
