import { shallow } from 'enzyme';
import React from 'react'
import { NavigateButtons } from '../../../components/UI/buttons/NavigateButtons';

describe('Test in <NavigateButtons/>', () => {
    
    const componentArgs = {
        
        handleSetUrL : jest.fn(),
        next : 'next',
        previous : 'previous',
    }

    const wrapper = shallow( <NavigateButtons {...componentArgs }/>)

    test('should be shown propperly', () => {
        
        expect( wrapper ).toMatchSnapshot()
    })
    
    test('should include 2 buttons', () => {
        
        expect( wrapper.find('button').length ).toEqual( 2 )
    })

    test('should work handleSetUrL with next & previos', () => {
        
        const bottonPrevious = wrapper.find('button').at(0)
        const bottonNext = wrapper.find('button').at(1)

        bottonPrevious.simulate('click');
        expect(componentArgs.handleSetUrL)
            .toHaveBeenCalledWith(componentArgs.previous)

        bottonNext.simulate('click');
        expect(componentArgs.handleSetUrL)
            .toHaveBeenCalledWith(componentArgs.next)
    })

    
})
