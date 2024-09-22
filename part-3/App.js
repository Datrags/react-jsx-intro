const App = () => (
    <div>
        <Person name="John" age={19} hobbies={["Gaming", "Coding"]}/>
        <Person name="Johnathan" age={17} hobbies={["Cooking"]}/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))