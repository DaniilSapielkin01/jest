import React from 'react';
import Title from './title';

describe("Title component", () => { 

    it("should render Title with props" , () => { 
        const component = shallow(<Title title={"Test title #1"} />);
        expect(component).toMatchSnapshot();
    });

    it("should render Title with props" , () => { 
        const component = shallow(<Title />);
        expect(component).toMatchSnapshot();
    });

});