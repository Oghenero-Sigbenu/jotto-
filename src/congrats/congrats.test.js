import  {shallow} from "enzyme";
import { findByTestAttr, checkProps } from "../testUtils";
import Congrats from "./congrats";


const defaultProps = {success: true}

const setUp = (props={}) => {
    const setupProps = {...props, ...defaultProps}
    return shallow(<Congrats {...setupProps}/>)
}

test("renders without error", () => {
    const wrapper = setUp();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1)
});

test("renders no text when `success` prop is false", () => {
    const wrapper = setUp({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('')
}) 

test("renders non-empty congrats message when `props` is true", () => {
    const wrapper = setUp({success: true});
    const component = findByTestAttr(wrapper, 'congrats-message');
    expect(component.text().length).not.toBe(0)
}) 

test("does not throw warning with expected props", () => {
    const expectedProps = {success: true};
   checkProps(Congrats, expectedProps);
   
}) 