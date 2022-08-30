import './App.scss';
import TaskViewer from './components/TaskViewer';
import { TaskViewerProvider } from './components/contexts/tasksContext';

function App() {
  return (
    <TaskViewerProvider>
      <TaskViewer />
    </TaskViewerProvider>
  );
}

export default App;
