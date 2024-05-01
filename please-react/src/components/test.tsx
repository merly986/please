
import { Box, Button, Stack } from '@mui/material';
import LoadingStore from '../stores/loading-store';
import { observer } from 'mobx-react-lite';
import { red } from '@mui/material/colors';
import TestS2 from './test2';
import Loading2Store from '../stores/loading2-store';

const loading1 = new Loading2Store();

const TestS = observer(() => {
	const { loading, loadingStart, loadingEnd } = LoadingStore;

	return (
		<Box>
			<Stack>
				<Box bgcolor={red}>
					{loading && <p>Loading...</p>}
					<Button onClick={loadingStart}>Start</Button>
					<Button onClick={loadingEnd}>End</Button>
				</Box>
				<Box bgcolor={red}>
					<TestS2 {...loading1} ></TestS2>
				</Box>
			</Stack>
		</Box>
	)
});

export default TestS;