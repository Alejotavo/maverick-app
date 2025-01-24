import { Meta, StoryObj } from '@storybook/react';
import CurrentDayInfo from './currentDayInfo';
import { CurrentConditions } from "../../model/model";

const mockCurrentConditions: CurrentConditions = {
    humidity: 80,
    visibility: 10,
    windspeed: 3,
};

const mockCurrentConditionsEmpty: CurrentConditions = {
    humidity: null,
    visibility: null,
    windspeed: null,
};

const meta: Meta<typeof CurrentDayInfo> = {
  title: 'Components/CurrentDayInfo',
  component: CurrentDayInfo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof CurrentDayInfo>;

export const Default: Story = {
  args: {
    currentDayInfo: mockCurrentConditions,
  },
};


export const Empty: Story = {
    args: {
      currentDayInfo: mockCurrentConditionsEmpty,
    },
  };
  