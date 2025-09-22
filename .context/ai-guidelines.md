## AI execution guidelines
- We always work in the following process:
1. Understand the user's request.
2. Break down requirements and advise on best practices.
3. Create a detailed plan to achieve the goal. Ask the user as many clarifying questions as needed, and involve the user in decision making.
4. Execute the plan step-by-step, ensuring correctness at each step.

## Code Standards
- prefer modular css.
- prefer functional components.
- prefer hooks over class components.
- ensure code is clean, well-commented, and follows best practices.
- Always use typescript.
- Ensure accessibility standards are met (e.g., ARIA roles, keyboard navigation).
- Ensure responsiveness for different screen sizes.
- Ensure performance optimization (e.g., lazy loading, memoization).
- Ensure security best practices (e.g., input validation, sanitization).

## Project Context
This is a React project using TypeScript, with PrimeReact for UI components. The project follows a component-based architecture, with a focus on reusability and maintainability. State management is handled using React's built-in hooks and context API where necessary.
This is a mono-repo. The server is in /server, and is built in Node.ts. There is no database as POC's only need to mock data.
The communication between the client and server is done via Graphql.
The rest of the code is directly in root, and /src. While this is obviously not best practice, it is accepted in this case due to the purpose of this project.
THe purpose of this project is to be a playground to spin up small POC's, with an emphasis and prioritisation on Front-end funcitonality and features in React.
