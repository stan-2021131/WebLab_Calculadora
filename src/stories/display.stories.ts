import type { Meta, StoryObj } from '@storybook/react-vite'
import { Display } from '../components/Display'

const meta: Meta<typeof Display> = {
    title: 'Components/Display',
    component: Display,
}

export default meta

type Story = StoryObj<typeof Display>

export const Default: Story = {
    args: {
        value: '12345',
    },
}

export const ErrorDisplay: Story = {
    args: {
        value: 'ERROR',
    },
}