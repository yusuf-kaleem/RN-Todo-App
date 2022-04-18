import React from "react";
import Task from "./Task"
import { Text } from 'react-native';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe("<Task>", () => {
    it('button should renter title correctly', () => {
        const text = "some random text"
        const wrapper = shallow(<Task text={text}></Task>)
        expect(wrapper.find('Text').first().props().children).toEqual(text);
    });
});


