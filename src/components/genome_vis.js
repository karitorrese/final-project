import React from "react";
import styled from "styled-components";
// components
import StatLine from "./stat_line";

const GenVisContainer = styled.div`
	width: 300px;
	word-wrap: break-word;
	margin-top: 0.5em;
	font-size: 0.8em;
	color: white;
	font-family: "Source Code Pro", monospace;
`;

const GenBitChange = styled.span`
	font-size: 1em;
	color: ${props => props.color};
	font-family: "Source Code Pro", monospace;
`;

const change_color_lookup = ["#df2644", "#e96a7f", "#f19dab", "#fff"];

const GenomeEvolutionVis = ({ genomes }) => {
	const [current_genome] = genomes.slice(-1);
	const genome_history = genomes.slice(-4, -1).reverse();
	return (
		<>
			<StatLine>genome:</StatLine>

			<GenVisContainer>
				{Array.from(current_genome).map((bit, bit_idx) => {
					let lastChange = change_color_lookup.length - 1;
					for (const [gen_idx, genome] of genome_history.entries())
						if (Array.from(genome)[bit_idx] !== bit) {
							lastChange = gen_idx;
							break;
						}
					return (
						<GenBitChange key={bit_idx} color={change_color_lookup[lastChange]}>
							{bit}
						</GenBitChange>
					);
				})}
			</GenVisContainer>
		</>
	);
};

export default GenomeEvolutionVis;
