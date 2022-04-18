import React from "react";
import Button from "./Button"
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe("<Button>", () => {
    it('button should renter title correctly', () => {
        const title = "Login"
        const wrapper = shallow(<Button title={title}></Button>)
        expect(wrapper.find('Text').first().contains(<Text>{title}</Text>)).toBe(true);
    });
});


