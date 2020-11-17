import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import "./sass/Entry.sass";

const Entry = ({ entry, calc }) => {
	const [size, setSize] = useState("0.8in");

	useEffect(() => {
		if (entry.length <= 6) setSize("0.8in");
		if (entry.length >= 8) setSize("0.5in");
		if (entry.length >= 14) setSize("0.3in");
		if (entry.length >= 21) setSize("0.2in");
	}, [entry]);

	return (
		<div className="entry">
			<div className="entry__calc">
				<p className="entry__calc__p">{calc}</p>
			</div>
			<span style={{ fontSize: size }} className="entry__span">
				{entry}
			</span>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		entry: state.entry,
		calc: state.calc
	};
};

export default connect(mapStateToProps)(Entry);
