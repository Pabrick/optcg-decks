import { Component } from 'react';

import './search-box.styles.scss';

class SearchBox extends Component {
	render() {
		const { placeholder, onChangeHandler } = this.props;
		return (
			<input
				type='search'
				className='search-box'
				placeholder={placeholder}
				onChange={onChangeHandler}
			/>
		);
	}
}

export default SearchBox;
