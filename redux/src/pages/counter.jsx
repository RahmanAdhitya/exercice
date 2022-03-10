import { Box, Button, Center, Flex, Input, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import counter_types from '../redux/reducers/counter/types';

const CounterPage = () => {
  const countSelector = useSelector((state) => state.counter);
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const inputHandler = (event) => {
    const { value } = event.target;

    setInput(value);
  };

  const changeCountValue = (dir) => {
    if (dir === 'increment') {
      dispatch({
        type: counter_types.INCREMENT_COUNTER,
      });
    } else if (dir === 'decrement') {
      dispatch({
        type: counter_types.DECREMENT_COUNTER,
      });
    } else if (dir === 'goto') {
      dispatch({
        type: 'GOTO',
        value: parseInt(input),
      });
    } else if (dir === 'reset') {
      dispatch({
        type: counter_types.RESET_COUNTER,
      });
    }
  };

  return (
    <Box>
      <Center justifyContent="space-around">
        <Flex alignItems="center" marginTop="10">
          <Button onClick={() => changeCountValue('decrement')} marginRight="4">
            -
          </Button>
          <Text fontSize="2xl">{countSelector.count}</Text>
          <Button onClick={() => changeCountValue('increment')} marginLeft="4">
            +
          </Button>
        </Flex>
      </Center>
      <Center mt={8}>
        <Box>
          <Input me={3} onChange={inputHandler}></Input>
        </Box>
        <Button ms={3} onClick={() => changeCountValue('goto')}>
          Goto Page
        </Button>
      </Center>
      <Center mt={8}>
        <Box>
          <Button onClick={() => changeCountValue('reset')}>Reset Counter</Button>
        </Box>
      </Center>
    </Box>
  );
};

export default CounterPage;
