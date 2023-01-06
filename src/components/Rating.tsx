type StarType = {
	selected: boolean
}

export const Rating = () => {
	return (
		<div>
			<Star selected={true} />
			<Star selected={true} />
			<Star selected={true} />
			<Star selected={false} />
			<Star selected={false} />
		</div>
	)
}

export const Star = (props: StarType) => {
	return (
		props.selected ? <span><b>star </b></span> : <span>star </span>
	)
}