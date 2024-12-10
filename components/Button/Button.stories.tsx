import { ChevronLeftCircle, ChevronRightCircle, Icon } from "lucide-react";
import Button, {  ButtonProps } from "./Button";

export default {
	title: 'atoms/Buttons',
};

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
				
				<Button  variant={"primary"} >Button</Button>
				<Button  variant={"primary"} prefix={<ChevronLeftCircle/> } > Button</Button>
				<Button  variant={"primary"} suffix={<ChevronRightCircle/>} >Button</Button>
				<Button  variant={"primary"} prefix={<ChevronLeftCircle/> } suffix={<ChevronRightCircle/>} >Button</Button>
				<Button isDisabled={true}  variant={"primary"} >Button</Button>
				

			</div>

			<div className="brand" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Secondary</strong>
				
				<Button  variant={"secondary"} >Button</Button>
				<Button  variant={"secondary"} prefix={<ChevronLeftCircle/> } > Button</Button>
				<Button  variant={"secondary"} suffix={<ChevronRightCircle/>} >Button</Button>
				<Button  variant={"secondary"} prefix={<ChevronLeftCircle/> } suffix={<ChevronRightCircle/>} >Button</Button>
				<Button isDisabled={true}  variant={"secondary"} >Button</Button>
				
			</div>

			
			<div className="brand" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Tertiary</strong>
				
				<Button  variant={"tertiary"} >Button</Button>
				<Button  variant={"tertiary"} prefix={<ChevronLeftCircle/> } > Button</Button>
				<Button  variant={"tertiary"} suffix={<ChevronRightCircle/>} >Button</Button>
				<Button  variant={"tertiary"} prefix={<ChevronLeftCircle/> } suffix={<ChevronRightCircle/>} >Button</Button>
				<Button isDisabled={true}  variant={"tertiary"} >Button</Button>
				
			</div>
			
			<div className="brand" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Link</strong>
				
				<Button  variant={"link"} >Button</Button>
				<Button  variant={"link"} prefix={<ChevronLeftCircle/> } > Button</Button>
				<Button  variant={"link"} suffix={<ChevronRightCircle/>} >Button</Button>
				<Button  variant={"link"} prefix={<ChevronLeftCircle/> } suffix={<ChevronRightCircle/>} >Button</Button>
				<Button isDisabled={true}  variant={"link"} >Button</Button>
				
			</div>


			
			<div style={{ marginBottom: '2rem', width: '100%', padding: '2rem 2rem 0' }}>
				<strong className='heading-5'>Error</strong>
			</div>
			
			<div className="error" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Primary</strong>
				
				<Button  variant={"primary"} >Button</Button>
				<Button  variant={"primary"} prefix={<ChevronLeftCircle/> } > Button</Button>
				<Button  variant={"primary"} suffix={<ChevronRightCircle/>} >Button</Button>
				<Button  variant={"primary"} prefix={<ChevronLeftCircle/> } suffix={<ChevronRightCircle/>} >Button</Button>
				<Button isDisabled={true}  variant={"primary"} >Button</Button>
				

			</div>

			<div className="error" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Secondary</strong>
				
				<Button  variant={"secondary"} >Button</Button>
				<Button  variant={"secondary"} prefix={<ChevronLeftCircle/> } > Button</Button>
				<Button  variant={"secondary"} suffix={<ChevronRightCircle/>} >Button</Button>
				<Button  variant={"secondary"} prefix={<ChevronLeftCircle/> } suffix={<ChevronRightCircle/>} >Button</Button>
				<Button isDisabled={true}  variant={"secondary"} >Button</Button>
				
			</div>

			
			<div className="error" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Tertiary</strong>
				
				<Button  variant={"tertiary"} >Button</Button>
				<Button  variant={"tertiary"} prefix={<ChevronLeftCircle/> } > Button</Button>
				<Button  variant={"tertiary"} suffix={<ChevronRightCircle/>} >Button</Button>
				<Button  variant={"tertiary"} prefix={<ChevronLeftCircle/> } suffix={<ChevronRightCircle/>} >Button</Button>
				<Button isDisabled={true}  variant={"tertiary"} >Button</Button>
				
			</div>
			
			<div className="error" style={{ marginBottom: '2rem', width: '100%', padding: '2rem', gap: '1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                <strong style={{width: "5rem"}}>Link</strong>
				
				<Button  variant={"link"} >Button</Button>
				<Button  variant={"link"} prefix={<ChevronLeftCircle/> } > Button</Button>
				<Button  variant={"link"} suffix={<ChevronRightCircle/>} >Button</Button>
				<Button  variant={"link"} prefix={<ChevronLeftCircle/> } suffix={<ChevronRightCircle/>} >Button</Button>
				<Button isDisabled={true}  variant={"link"} >Button</Button>
				
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
