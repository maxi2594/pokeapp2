import { shallow } from 'enzyme'
import React from 'react'
import { LoadIcon } from '../../../components/UI/loading/LoadIcon'

describe('tests in <LoadIcon/>', () => {
    
    const wrapper = shallow(<LoadIcon/>)

    test('should be shown properly', () => {
        
        expect( wrapper ).toMatchSnapshot();

        expect( wrapper.find('div').props().className ).toBe('lds-dual-ring')

    })
    
})
