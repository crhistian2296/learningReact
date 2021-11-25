// Definiendo estado inicial
const initialState = [
  {
    id: "1",
    content: "Lavar los platos",
    done: "false",
  },
];

// Funcion Reducer
const todoReducer = (state = initialState, action) => {
  if (action?.type === "add") {
    return [...state, action.payload];
  }

  return state;
};

// Impresion en consola 1
let todo = todoReducer();
console.log(todo);

const newTodo = {
  id: "2",
  content: "Aspirar la casa",
  done: "false",
};

const actionAdd = {
  type: "add",
  payload: newTodo,
};

todo = todoReducer(initialState, actionAdd);
console.log(todo);
