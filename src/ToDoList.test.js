import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './ToDoList.jsx';
import ToDoItems from './ToDoItems.jsx'
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()})
let dummyEntries = [{
    key: 11928,
    task: 'go to school'
}, {
    key: 119809,
    task: 'brush my teeth'
}
]

describe('<ToDoList/> shallow rendering', () =>{
    it('matches the snapshot', () => {
        const tree = shallow(<ToDoList />)
        expect(toJson(tree)).toMatchSnapshot()
    })
    it('correctly takes in input', () => {
        const wrapper = mount(<ToDoList />)
        const form = wrapper.find('form')
        form.simulate('submit', { target: { value: 'do some testing' } })
        expect(wrapper.state().tasks.length).toBe(1)
    })
    it('correctly removes input', () => {
        const wrapper = mount(<ToDoList />)
        const form = wrapper.find('form')
        form.simulate('submit', { target: { value: 'do some testing' } })
        const element = wrapper.find('li')
        element.simulate('click')
        form.simulate('submit', { target: { value: 'do some work' } })
        expect(wrapper.state().tasks.length).toBe(1)
    })
})

describe('<ToDoItems/> shallow rendering', () => {

    it('successfully takes in props', () => {
        const wrapper = shallow(<ToDoItems entries ={dummyEntries} />)
       
        expect(wrapper.getElement().props.children.length).toBe(2)
    })

    
})