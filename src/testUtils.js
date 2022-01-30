import checkPropTypes from "check-prop-types";
/**
 * @function setup
 * @param {object} props
 * @returns {ShallowWrapper}
 */


export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, conformingProp) => {
    const propError = checkPropTypes(component.propTypes, conformingProp, 'prop')
    expect(propError).toBeUndefined();
}