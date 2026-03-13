# JavaScript Spread Operator Examples

## Overview

This repository contains a comprehensive collection of practical examples demonstrating the usage of the JavaScript spread operator (`...`). The spread operator, introduced in ES6, allows for the expansion of iterable objects (like arrays and strings) and object properties into individual elements or properties. This project serves as an educational resource for developers learning or reviewing the spread operator's capabilities in various scenarios.

The examples cover common use cases such as array manipulation, object cloning, merging data structures, and more advanced applications. Each example is contained in a separate JavaScript file for clarity and ease of reference.

## Features

- **Array Operations**: Copying arrays, adding elements, merging arrays
- **Object Manipulation**: Cloning objects, updating properties, merging objects
- **Practical Scenarios**: Real-world examples with relatable data (fruits, students, tasks, etc.)
- **Educational Focus**: Each example includes clear, commented code for learning purposes
- **Modular Structure**: Individual files for each concept, making it easy to study specific use cases

## Prerequisites

Before running these examples, ensure you have the following installed on your system:

- **Node.js** (version 12.0.0 or higher) - Required to execute the JavaScript files
- **npm** (comes with Node.js) - For potential package management if extended

## Usage

Each example is a standalone JavaScript file that can be executed using Node.js. To run any example:

```bash
node spreadEx1.js
```

Replace `spreadEx1.js` with the desired example file name.

The output will be displayed in the terminal, demonstrating the result of the spread operator operation.

## Examples

This section provides a detailed breakdown of each example file, including the concept demonstrated and the expected output.

### 1. spreadEx1.js - Array Copying and Modification
Demonstrates basic array copying using the spread operator and adding new elements without mutating the original array.

**Key Concept**: Creating a shallow copy of an array and appending elements.

**Expected Output**:
```
[ 1, 2, 3, 4 ]
```

### 2. spreadEx2.js - Adding Elements to Arrays
Shows how to create a new array by spreading an existing array and adding new elements.

**Key Concept**: Non-destructive array expansion.

**Expected Output**:
```
[ 'Maçã', 'Banana', 'Laranja' ]
```

### 3. spreadEx3.js - Prepending Elements
Illustrates prepending elements to an existing array using the spread operator.

**Key Concept**: Flexible element positioning in array creation.

**Expected Output**:
```
[ 'Vermelho', 'Azul', 'Verde' ]
```

### 4. spreadEx4.js - Merging Multiple Arrays
Demonstrates merging two or more arrays into a single array.

**Key Concept**: Combining multiple iterable data structures.

**Expected Output**:
```
[ 'HTML', 'CSS', 'Node', 'SQL' ]
```

### 5. spreadEx5.js - Dynamic Array Updates
Shows adding a single element to an existing array of student names.

**Key Concept**: Simulating dynamic list updates in applications.

**Expected Output**:
```
[ 'Ana', 'Carlos', 'Marina', 'João' ]
```

### 6. spreadEx6.js - Task List Management
Illustrates adding new tasks to an existing task array.

**Key Concept**: Managing collections of items (useful for todo apps, etc.).

**Expected Output**:
```
[ 'Estudar', 'Treinar', 'Ler Livros' ]
```

### 7. spreadEx7.js - Object Cloning and Extension
Introduces object spreading to clone an object and add new properties.

**Key Concept**: Creating new objects based on existing ones without mutation.

**Expected Output**:
```
{ nome: 'Lucas', idade: 17, curso: 'Desenvolvimento de Sistemas' }
```

### 8. spreadEx8.js - Object Property Updates
Demonstrates updating specific properties in an object using spread syntax.

**Key Concept**: Immutable object updates for state management.

**Expected Output**:
```
{ nome: 'Notebook', preco: 3500 }
```

### 9. spreadEx9.js - Initializing Arrays with Spread
Shows creating a new array from an empty array and adding multiple elements.

**Key Concept**: Building arrays dynamically from scratch.

**Expected Output**:
```
[ 'Estudar JS', 'Fazer exercício', 'Dormir cedo' ]
```

### 10. spreadEx10.js - Shopping List Expansion
Illustrates expanding a shopping list with multiple new items.

**Key Concept**: Bulk additions to arrays.

**Expected Output**:
```
[ 'Arroz', 'Feijão', 'Macarrão', 'Leite', 'ovos' ]
```

### 11. spreadEx11.js - Task Management Continuation
Further demonstrates task list manipulation with multiple additions.

**Key Concept**: Ongoing collection management.

**Expected Output**:
```
[ 'Estudar', 'Treinar', 'Programar', 'Assistir aula' ]
```
