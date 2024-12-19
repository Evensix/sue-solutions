import StyledText from "../StyledText/StyledText";

export default {
	title: 'Base/Typography',
};

export const Headings = function () {
	const sizeArray  = [56,48,40,32,24,20,16,14,12,11, 10];
	const weightArray = ['semibold', 'medium', 'regular'];

	return (
		<div style={{ padding: '2rem', gap: '2rem', display: 'flex', flexDirection: 'column'}}>

			{sizeArray.map((size) => {
				return (
					<div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
						{weightArray.map((weight) => {
							return (
								<div className="mb-[1rem] flex flex-col">
									<StyledText as="span"  size={size} weight={weight} >Size {size}</StyledText>
									<StyledText as="span"  size={size} weight={weight} >{weight}</StyledText>
									<StyledText as="span"  size={size} weight={weight} italic='italic' > Italic </StyledText>
									<StyledText as="span" size={size} weight={weight} decoration="underline"> Underline </StyledText>
								</div>
							)
						})}

					</div>
					)
				}
			)}

		</div>
  
	);
};
Headings.parameters = {
	status: {
		type: 'done',
	},
};
Headings.storyName = 'Typography';
