import Window from "./components/Window";

const App = () => {
  return (
    <div className="App">
      <Window
        title="React Fun"
        content="Warning! You are about to blend the whole world! I'm just trying to fill the whole window."
        onMinimize={() => {}}
        onMaximize={() => {}}
        onClose={() => {}}
        onSubmit={() => {}}
        submitText="Bend"
        onCancel={() => {}}
        cancelText="Cancel"
        inactive
      />
    </div>
  );
}

export default App;
