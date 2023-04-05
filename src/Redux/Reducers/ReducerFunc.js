 const reducerFunc = (
  state = {
    count: 1,
    harga:5000,
    rows:[
      { id: 1, col1: 'Hello', col2: 'World' },
      { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
      { id: 3, col1: 'MUI', col2: 'is Amazing', col3:'fauzan' },
    ],
    columns : [
      { field: 'col1', headerName: 'Column 1', width: 150 },
      { field: 'col2', headerName: 'Column 2', width: 150 },
      { field: 'col3', headerName: 'Column 3', width: 150 },
    ]
  },
  action
) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
      case "INCREMENTH":
        return{
            ...state,
            harga: state.harga + action.newHarga
        };
    case "DECREMENT":
      if (state.count <= 1) {
        return {
          ...state,
          count: (state.count = 1),
        };
      } else
        return {
          ...state,
          count: state.count - 1,
        };
        case "DECREMENTH":
          if(state.harga <= 5000){
            return {
              ...state,
              harga: (state.harga = 5000),
            };
          }
            return{
                ...state,
                harga: state.harga - action.newHarga
            };
       
    default:
      return state;
  }
}
export default reducerFunc;