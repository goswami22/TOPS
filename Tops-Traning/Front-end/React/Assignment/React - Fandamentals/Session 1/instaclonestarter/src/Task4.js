
import React from 'react'

function Task4() {
    return (
        <div>

            Q1.Explain in your own words (3-4 lines) how React's Virtual DOM makes updating the UI faster compared to traditional DOM manipulation.
            <br/>

            Ans. React’s Virtual DOM is a lightweight copy of the real DOM. When data changes, React first updates the Virtual DOM instead of directly changing the real DOM. It then compares the new Virtual DOM with the previous one and updates only the changed parts in the real DOM. This process is faster because direct DOM manipulation is slow and expensive in traditional web development.
        </div>
    )
}

export default Task4




