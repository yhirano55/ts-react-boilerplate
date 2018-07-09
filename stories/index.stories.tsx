import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Hello } from "../src/components/Hello";
import 'normalize.css';

const stories = storiesOf('Hello', module);
stories.add('to Storybook', () => <Hello compiler="TypeScript" framework="React" />);
