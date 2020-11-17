import React from "react";
import { add, erase, clean, result } from "../reducers/entry";
import { connect } from "react-redux";

import "./sass/Buttons.sass";

const Buttons = (props) => {
	return (
		<div className="options">
			<button onClick={props.clean}>C</button>
			<button onClick={props.erase}>E</button>
			<button onClick={() => props.add("%")}>%</button>
			<button onClick={() => props.add("÷")} className="options__color">÷</button>
			<button onClick={() => props.add(7)}>7</button>
			<button onClick={() => props.add(8)}>8</button>
			<button onClick={() => props.add(9)}>9</button>
			<button onClick={() => props.add("x")} className="options__color">x</button>
			<button onClick={() => props.add(4)}>4</button>
			<button onClick={() => props.add(5)}>5</button>
			<button onClick={() => props.add(6)}>6</button>
			<button onClick={() => props.add("-")} className="options__color">-</button>
			<button onClick={() => props.add(1)}>1</button>
			<button onClick={() => props.add(2)}>2</button>
			<button onClick={() => props.add(3)}>3</button>
			<button onClick={() => props.add("+")} className="options__color">+</button>
			<button onClick={() => props.add(0)}>0</button>
			<button onClick={() => props.add(".")}>.</button>
			<button onClick={props.result} className="options__color options__color--equal">=</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		entry: state.entry
	};
};

const mapDispatchToProps = {
	add,
	erase,
	clean,
	result
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
