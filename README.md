# Expense_Tracker

An expense tracker project is built to learn and understand the basics of react. Project consists of basics of react like components, states, events and some styling. Code are well commented to be beginner friendly.

# React Basics

React = HTML, CSS and JavaScript

### Declaritive Approach

It is a programming paradigm that emphasizes describing "what" you want to achieve rather than explicitly specifying "how" to achieve it.
React encourages developers to build user interfaces using a declarative style, which means you define the desired UI state, and React takes care of updating the actual DOM to match that state efficiently

### Virtual DOM

React uses a virtual representation of the actual DOM called the Virtual DOM. When you update the state of a component, React constructs a new Virtual DOM tree. It then efficiently calculates the difference between the new and old Virtual DOM trees and updates the real DOM only with the necessary changes. This process abstracts away the low-level DOM manipulation details and makes it more declarative.

## JSX (JavaScript XML)

JSX is a declarative syntax that looks similar to HTML but is actually a way to describe the desired component tree in a declarative manner using JavaScript.

## Components

They are reusable, self-contained pieces of code that encapsulate a specific piece of functionality or UI element.

## Props

"props" (short for properties) are a mechanism for passing data from a parent component to a child component. They allow you to make your components dynamic and reusable by passing data to child components.
You can also pass data from a child component to a parent component in React by passing a function as a prop to the child and invoking it with the required data from within the child component.

### props.children:

a default parameter passed to components via props by setting value between custom tags

## State

State allows components to store and manage data that can change over time, which is crucial for building dynamic and interactive user interfaces. It determines a component's behavior and appearance. When the state changes, React re-renders the component to reflect those changes.

## Lift Up

you need to share some data or functionality between two or more components that are not directly connected in a parent-child relationship (you cannot share data between sibling component). "Lifting up" allows you to solve this problem. This allows us to more easily share state among all of these components that need rely upon it.

## Derived / Computed State

the concept of "derived" state refers to creating new pieces of data or state in a component that are calculated based on existing data or props. Don't need to maintain unncessary state when a data can be computed from other state.

## key

key in react component is essential for efficient list rendering, enabling React to identify and update individual list items with minimal DOM manipulation. It ensures correct state preservation during re-renders and prevents unnecessary rendering of unchanged components. Using a unique and stable identifier as the `key`, such as an item's ID, is crucial for its effectiveness.

## ref

ref allows to directly access and manipulate DOM element.
Preserving Values Across Component Rerenders: Refs can be used to store values that persist across component re-renders, even when the component's state or props change. This is particularly useful when you want to maintain values that shouldn't be reset during re-renders.

## portal

createportal, a way to render components outside their parent DOM hierarchy, allowing you to render content in a different part of the DOM tree while maintaining React's component structure and state management
