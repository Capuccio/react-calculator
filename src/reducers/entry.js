/* Actions */
const ADD = "entry/add";
const ERASE = "entry/erase";
const CLEAN = "entry/clean";
const RESULT = "entry/result";

const initialState = {
	entry: "0",
	calc: "0"
};

/* Reducer */
export default function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD:
			let number = state.entry;
			if (state.entry === "0") {
				if (
					action.payload === "÷" ||
					action.payload === "x" ||
					action.payload === "-" ||
					action.payload === "+" ||
					action.payload === "."
				) {
					number += action.payload.toString();
				} else {
					number = action.payload.toString();
				}
			} else {
				number += action.payload.toString();
			}

			return {
				...state,
				entry: number
			};

		case ERASE:
			let deleting =
				state.entry.toString().length === 1 ? "0" : state.entry.slice(0, -1);

			return {
				...state,
				entry: deleting
			};

		case CLEAN:
			return {
				...state,
				entry: "0",
				calc: "0"
			};

		case RESULT:
			let addedSymbols = state.entry.replace(/÷|x/g, (symbol) => {
				if (symbol === "÷") return "/";
				if (symbol === "x") return "*";
			});

			try {
				addedSymbols = eval(addedSymbols).toString();
			} catch (e) {
				addedSymbols = "Syntax error";
			}

			return {
				...state,
				calc: state.entry,
				entry: addedSymbols
			};

		default:
			return state;
	}
}

/* Actions Creators */
export const add = (num) => {
	return {
		type: ADD,
		payload: num
	};
};

export const erase = () => {
	return {
		type: ERASE
	};
};

export const clean = () => {
	return {
		type: CLEAN
	};
};

export const result = () => {
	return {
		type: RESULT
	};
};
