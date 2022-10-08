import './card.styles.scss';

const Card = ({ card }) => {
	const { name, color, type, effect, image, collectionId } = card;
	return (
		<div className={`card color-${color}`}>
			<img className='image' src={image} alt={collectionId} />
			<div className='info'>
				<section className='info__title'>
					<div className='name'>{name}</div>
					<div className='type'>{type}</div>
				</section>
				<section className='info__effect'>{effect}</section>
			</div>
		</div>
	);
};

export default Card;
