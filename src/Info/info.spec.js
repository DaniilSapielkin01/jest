import React from 'react';
import { describe } from 'yargs';
import Info from './info';

const setUp = (props) => shallow(<Info />);

const componentDidMountSpy = jest.spyOn(Info.prototype, 'componentDidMount');
const componentDidUpdateSpy = jest.spyOn(Info.prototype,'componentDidUpdate');
const componentWillUnmountSpy = jest.spyOn(Info.prototype,'componentWillUnmount');


describe("Info component",()=>{
    let component;
    beforeEach(()=> { 
        jest.spyOn(window, 'addEventListener');
        jest.spyOn(window, 'removeEventListener');
        component = setUp();

    });

    afterEach(()=>{
        window.addEventListener.mockRestore();
        window.removeEventListener.mockRestore();
    }); 

    it("should render info",()=> { 
        expect(component).toMatchSnapshot(); 
    });

    describe('Lifecycle methods', ()=>{
        it("should call componentDidMount one ",()=> { 
         expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
        });

        it("should not call componentWillUnmount when componet just mounted ",()=> { 
            expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
            expect(componentWillUnmountSpy).toHaveBeenCalledTimes(0);
           });

           it('should componentDidUpdate',() => { 
            component.setProps();
            expect(componentDidUpdateSpy).toHaveBeenCalled()
           });

           it('should componentWillUnmount',() => { 
            component.unmount();

            expect(componentWillUnmountSpy).toHaveBeenCalledTimes(1)
           });

           describe('Component handlers', () => { 
            it('should call addEventListener when component mounted',()=> { 
                expect(window.addEventListener).toHaveBeenCalledTimes(1);
            });

            it('should call handleChangeTitle in componentDidUpdate',()=> { 
                const instance = setUp().instance();
                instance.handleChangeTitle = jest.fn();
                expect(instance.handleChangeTitle).toHaveBeenCalled();

            });

            it('should call removeEventListener when component unmounted',()=> { 
                component.unmount();

               expect(window.addEventListener).toHaveBeenCalledTimes(1);
            });
            
            it("should call handleWidth during window resize",()=> {
                expect(component.state().width).toBe(0);
                //вызываем рисайз
                global.dispatchEvent(new Event('resize'));
                expect(component.state().width).toBe(window.innerWidth)

            });


        });
    });

});
