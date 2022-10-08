import { useEffect, useState } from 'react';
import './Home.scss';

import CardList from '../components/card-list/card-list.component';
import SearchBox from '../components/search-box/search-box.component';
import dataCards from '../data/cards.json';
import { getCardMapping } from './../utils/data';

const Home = () => {
	const [cards, setCards] = useState([]);
	const [filteredCards, setFilteredCards] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		const cards = dataCards.map((card) => getCardMapping(card));
		setCards(cards);
	}, []);

	useEffect(() => {
		const filteredCards = cards.filter((card) => {
			return card.name.toLocaleLowerCase().includes(searchField);
		});
		setFilteredCards(filteredCards);
	}, [cards, searchField]);

	const onSearchChange = (event) => {
		setSearchField(event.target.value.toLocaleLowerCase());
	};

	return (
		<div>
			<h1>Decks of Ohara</h1>
			<SearchBox
				className={'search-box'}
				placeholder={'search card'}
				onChangeHandler={onSearchChange}
			/>
			<CardList list={filteredCards} />
		</div>
	);
}

export default Home;
