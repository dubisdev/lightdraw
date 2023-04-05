import { Tldraw, useFileSystem } from "@tldraw/tldraw";

function App() {
  const fileSystemEventHandlers = useFileSystem()
  return <div className="tldraw">
    <Tldraw showMultiplayerMenu={false} {...fileSystemEventHandlers} />
  </div>
}

export default App;
