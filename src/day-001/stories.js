import React from 'react';
import { storiesOf } from '@storybook/react';
import { host } from 'storybook-host';
import Day001 from './index';

storiesOf('CSS Challenge/Day 001', module)
  .addDecorator(
    host({
      title: 'Day 1',
      align: 'center middle',
      height: 400,
      width: 400
    })
  )
  .add('Index letters with gradient background', () => <Day001 />);
