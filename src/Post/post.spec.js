import React from 'react';
import Post from './post';

const setUp =(props) => shallow(<Post {...props} />)

describe('should render component', () => { 
    let component;
    beforeEach(()=> { 
        component = setUp()
    })


    it("should render .post wrapper", () => {
        const wrapper = component.find('.post')
        expect(wrapper.length).toBe(1); 
    });
    
    it("should render link", () => {
        const wrapper = component.find('a')
        expect(wrapper.length).toBe(1); 
    });

    it("should render data", () => {
       const created_at = '01-03-2020';
       component = setUp({ created_at });
       const date = component.find('.date');
       expect(date.text()).toBe(new Date(created_at).toLocaleDateString());
    });
}) 