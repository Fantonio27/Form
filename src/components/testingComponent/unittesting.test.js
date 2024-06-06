import { it, describe, expect} from 'vitest'
import {UserList} from "./testingComponent"
import { render, screen} from '@testing-library/react'
// import {sum} from './function.ts'
describe(UserList.name, () => {
    it('should render the users list correctly', () => {
        render(<UserList/>);

        const bodyText = screen.getByText("User List SCSAC");
        expect(bodyText).toBeDefined();
    })
})