import React from 'react';
import Input from "./input";

describe('_Input component_', () => { 

    it("should render Input component", () => {
        const component = shallow(<Input />);
        expect(component).toMatchSnapshot();
      });

      it("should call onclick method",()=> {
          const mockCallBack = jest.fn();
          const component = shallow(<Input onChange={mockCallBack} />);
          expect(mockCallBack.mock.calls.length).toBe(0);
          component.find('.input').simulate('change');
          expect(mockCallBack.mock.calls.length).toBe(1);
      });

      describe('defaultProps', () => {
          it('should use default onChange', () => { 
              const result = Input.defaultProps.onChange();
              expect(result).toBe(undefined);
          });

          it('should use default onKeyPress', ()=> {
              const result = Input.defaultProps.onKeyPress();
              expect(result).toBe(undefined);
          });
      });
});