# Task Tracker

Simple solution for the [task-tracker](https://roadmap.sh/projects/task-tracker) challenge from [roadmap.sh](https://roadmap.sh/).

This is a simple command-line interface (CLI) application for managing tasks.

## Features

- Add new tasks with a unique ID and store it in `JSON` format.
- List tasks by their status: `todo`, `in-progress`, or `done`.
- Update the description of an existing task.
- Delete tasks by their ID.
- Mark tasks as `in-progress` or `done`.

## Prerequisites

- Node.js installed on your system.

## Installation

**Clone the Repository**

   ```bash
   git clone https://github.com/aopina1/NodeJSLearning

   # Navigate to the project Directory
   cd task_tracker
   ```
## Usage

- **Add a Task**
```bash
node main.js add "Buy Groceries"
```

- **List all Tasks**
```bash
node main.js list
```
- **or by list the tasks by status**
```bash
# To list the tasks that are marked as to-do
node main.js list todo

# To list the tasks that are marked as in-progess
node main.js list in-progress

# To list the tasks that are marked as done
node main.js list done
```

- **Update a Task**
```bash
node main.js update 1 "Buy Groceries at Corner's store"
```

- **Mark Task Status**
```bash
# Mark as `in-progress` with containing task ID as 1
node main.js mark-in-progress 1

# Mark as `done` with containing task ID as 1
node main.js mark-done 1
```

- **Delete a Task**
```bash
# Delete the task by containing its ID 1
node main.js delete 1
```

### Sample JSON structure
```JSON
[
    {
        "id": 0,
        "data": {
            "description": "Buy Groceries",
            "status": "todo",
            "createdAt": "2024-12-26T21:56:24.360Z",
            "updatedAt": "2024-12-26T21:56:24.360Z"
        }
    }
]
```
> Note: You can edit the JSON filename in main.js. If JSON file does not exists it will be created when adding the first task.
