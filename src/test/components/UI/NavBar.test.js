import { mount, shallow } from "enzyme"
import toJson from "enzyme-to-json";
import { MemoryRouter } from "react-router";

import { Navbar } from "../../../components/UI/NavBar"
import { pokeContext } from "../../../context/pokeContext";

describe('Prubas en <NavBar/>', () => {

    const handleSetUrL = jest.fn()

    const wrapper = shallow(
        <pokeContext.Provider value={{handleSetUrL}}>
                <Navbar/>

        </pokeContext.Provider>
    )

    test('should render properly', () => {
        
        expect(toJson( wrapper)).toMatchSnapshot();
    })
    
    test('should include navlink-inicio', () => {
        
        const wrapper = mount(
            <pokeContext.Provider value={{handleSetUrL}}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>

            </pokeContext.Provider>
        )

        expect( wrapper.find('NavLink').exists()).toBe(true)
        expect( wrapper.find('NavLink').at(0).text()).toBe('Inicio')

    })

    test('should handleSetUrL be colled on click', () => {

        const wrapper = mount(
            <pokeContext.Provider value={{handleSetUrL}}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>

            </pokeContext.Provider>
        )

        const inicioNav = wrapper.find('NavLink').at(0);
        inicioNav.simulate('click')
        
        expect(handleSetUrL).toBeCalledTimes(1);    
    })
    
    
    
    
})
