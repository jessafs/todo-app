import React from "react";
import Dashboard from "../Dashboard";
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('header renders correctly',()=>{
    const component = render(<Dashboard/>)
    const headerEl = component.getByTestId('header')
    expect(headerEl.textContent).toBe("TODO LIST")
})