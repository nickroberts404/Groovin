import React, { useState, useReducer } from 'react';
import styled from 'styled-components';
import usePlaySequence from './usePlaySequence';
import { useRing, useOuterRing } from './useRing';

const width = 500;
const height = 500;

const Sequencer = ({ input, output, sequencer, dispatch }) => {
	const { tracks, current, ring } = sequencer;
	const sequence = current.sequence;
	const [svg, setSvg] = useState(null);
	const [step, isPlaying, setIsPlaying] = usePlaySequence(input, output, sequence);
	for (var i = 0; i < tracks.length; i++) {
		useRing(svg, i, ring, sequence[i], tracks[i], dispatch);
	}
	useOuterRing(svg, step, isPlaying, sequence[0]);
	return (
		<Container>
			<svg ref={setSvg} height={height} width={width} />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
`;

export default Sequencer;
