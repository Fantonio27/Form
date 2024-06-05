import { it, expect, describe } from 'vitest'
import UserList from "./testingComponent"
import { render, screen} from "@testing-library/react"

describe(UserList.name, () => {
    it('should render the users list correctly', () => {
        render(<UserList/>);

        const bodyText = screen.getByText('User List');

        expect(bodyText).toBeInTheDocument();
    })
})