
type AccordionType = {
	title: string,
	collapsed: boolean
}
type AccordionTitleType = {
	title: string
}

export const Accordion = (props: AccordionType) => {
	return (
		props.collapsed ?
			<div>
				<AccordionTitle title={props.title} />
				<AccordionBody />
			</div>
		:
			<div>
				<AccordionTitle title={props.title} />
			</div>		
	)
}
export const AccordionTitle = (props: AccordionTitleType) => {
	return (
		<div>{props.title}</div>
	)
}
export const AccordionBody = () => {
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ul>
	)
}