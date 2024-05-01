
import { Box, Button, Stack } from '@mui/material';


type Props={
	loading: boolean,
	loadingStart: () => void,
	loadingEnd: () => void,
}
const TestS2 = ({ loading, loadingStart, loadingEnd }: Props) => {
	return (
		<Box>
			<Stack>
				<Box>
					{loading && <p>Loading...</p>}
					<Button onClick={loadingStart}>Start</Button>
					<Button onClick={loadingEnd}>End</Button>
				</Box>
			</Stack>
		</Box>
	)
};

export default TestS2;