import React from 'react';
import CounterButton from './counter';

const setUp = () => shallow(<CounterButton />);

describe('Count component', () => { 
    let component; 
    let instance;
    beforeEach(() => {
     component = setUp();
     instance = component.instance();
    });

    it("should render Counter component",()=>{
        expect(component).toMatchSnapshot();
    });

    describe("Counter handlers", () => { 
        it('should changecount value to plus one',()=>{  
            const btn = component.find('.plusOneBtn');
            btn.simulate('click');
            // expect(component).toMatchSnapshot();
            expect(component.state().count).toBe(1);
        }); 

        it('should reset count value to 10',()=>{  
            const btn = component.find('.resetBtn');
            btn.simulate('click');
            expect(component.state().count).toBe(10);
        });

        it('should reset count value to custom value',()=> {  
            instance.handleReset(20);
            expect(component.state().count).toBe(20);
        });

    });

});