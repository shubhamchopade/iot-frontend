import { Button, Group } from '@mantine/core'
import React from 'react'

const ButtonGroup = ({
    currentFarmer,
    setCurrentFarmer
}) => {
    return (
        <div>
            <Group position="center">
                <Button onClick={() => setCurrentFarmer("farmer1")} variant="outline">Farmer 1</Button>
                <Button onClick={() => setCurrentFarmer("farmer2")} variant="outline">Farmer 2</Button>
                <Button onClick={() => setCurrentFarmer("farmer3")} variant="outline">Farmer 3</Button>
            </Group>
        </div>
    )
}

export default ButtonGroup