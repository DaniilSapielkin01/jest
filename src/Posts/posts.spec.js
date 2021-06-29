import React from 'react';
import Posts from './posts';

const setUp = (props) => shallow(<Posts />)

describe("Posts component", () => { 
    const DEFAULT_PAGE = 10; 
    let component;
    let instance;
  
    beforeEach(() => {
      component = setUp();
      instance = component.instance();
    });

    it("should render Posts component", () => { 
        expect(component).toMatchSnapshot();
    });

    describe("Posts handlers", () => {  
        it("should handle search input value", () => {
            expect(component.state().searchQuery).toBe("");
            instance.handleInputChange({ target: { value: "test" } });
            expect(component.state().searchQuery).toBe("test");
          });

          it('hanle hits per page', () => { 
              expect(component.state().hitsPerPage).toBe(20);
              instance
              .handleHitsChange({ target: { value: String(DEFAULT_PAGE) } });
              expect(component.state().hitsPerPage).toBe(DEFAULT_PAGE);
          });

          it("handle change if 'Enter' cicked", () => {
              instance.setState({ page: DEFAULT_PAGE });
              instance.getSearch({ key: "Enter"});
              expect(component.state().page).toBe(0);
          });
          
          it("handle change if 'a' button cicked", () => {
            instance.setState({ page: DEFAULT_PAGE });
            instance.getSearch({ key: "a"});
            expect(component.state().page).toBe(DEFAULT_PAGE);
        });

        
    });
});