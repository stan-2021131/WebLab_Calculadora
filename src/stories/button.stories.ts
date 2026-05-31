import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button'

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
}

export default meta

type Story = StoryObj<typeof Button>

export const NumberButton: Story = {
    args: {
        label: '7',
        onClick: () => {},
        className: 'btn-number',
    },
}

export const OperatorButton: Story = {
    args: {
        label: '+',
        onClick: () => {},
        className: 'btn-operator',
    },
}