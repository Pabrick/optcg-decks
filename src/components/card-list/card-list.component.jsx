import Card from '../card/card.component';
import './card-list.styles.scss';

const CardList = ({ list }) => (
	<ul className='card-list'>
		{list.map((card) => (
			<li key={card.id}>
				<Card card={card} />
			</li>
		))}
	</ul>
);

export default CardList;
