const App = () => (
    <div>
        <Tweet name="User One" username="user1" date="Sep 20" message="It's me user 1"/>
        <Tweet name="User Two" username="user2" date="Sep 10" message="It's me user 2"/>
        <Tweet name="User Tree" username="thelorax" date="Sep 4" message="We need to look out for the trees!"/>
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))