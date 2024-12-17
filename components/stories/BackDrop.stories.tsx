export default {
	title: 'Base/BackDrop',
};


export const BackDrop = function () {
	return (
        <div className="bg-gradient-1 min-w-[100vh] min-h-[100vw]" />
	);
};
BackDrop.parameters = {
	status: {
		type: 'done',
	},
};
BackDrop.storyName = 'BackDrop';
