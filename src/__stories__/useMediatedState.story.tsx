import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { useMediatedState } from '../useMediatedState';
import ShowDocs from './util/ShowDocs';

const InputMediator = s => s.replace(/[\s]+/, ' ');
const Demo = () => {
  const [state, setState] = useMediatedState(InputMediator, '');

  return (
    <div>
      <div>You will not be able to enter more than one space</div>
      <input
        type="text"
        min="0"
        max="10"
        value={state}
        onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
          setState(ev.target.value);
        }}
      />
    </div>
  );
};

storiesOf('State|useMediatedState', module)
  .add('Docs', () => <ShowDocs md={require('../../docs/useMediatedState.md')} />)
  .add('Demo', () => <Demo />);
