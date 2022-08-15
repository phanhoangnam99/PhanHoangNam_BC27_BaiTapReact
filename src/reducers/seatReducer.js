import { Test } from "../BT_DatVeXemPhimRedux/styles";

const initialState = {
  seats: [
    {
      "row": "A",
      "seats": [
        { "name": "A1", "price": 75000, "booked": false, "selected": false },
        { "name": "A2", "price": 75000, "booked": false, "selected": false },
        { "name": "A3", "price": 75000, "booked": false, "selected": false },
        { "name": "A4", "price": 75000, "booked": false, "selected": false },
        { "name": "A5", "price": 75000, "booked": false, "selected": false },
        { "name": "A6", "price": 75000, "booked": false, "selected": false },
        { "name": "A7", "price": 75000, "booked": false, "selected": false },
        { "name": "A8", "price": 75000, "booked": false, "selected": false },
        { "name": "A9", "price": 75000, "booked": false, "selected": false },
        { "name": "A10", "price": 75000, "booked": false, "selected": false },
        { "name": "A11", "price": 75000, "booked": true, "selected": false },
        { "name": "A12", "price": 75000, "booked": true, "selected": false }
      ]
    },
    {
      "row": "B",
      "seats": [
        { "name": "B1", "price": 75000, "booked": false, "selected": false },
        { "name": "B2", "price": 75000, "booked": false, "selected": false },
        { "name": "B3", "price": 75000, "booked": false, "selected": false },
        { "name": "B4", "price": 75000, "booked": false, "selected": false },
        { "name": "B5", "price": 75000, "booked": false, "selected": false },
        { "name": "B6", "price": 75000, "booked": false, "selected": false },
        { "name": "B7", "price": 75000, "booked": false, "selected": false },
        { "name": "B8", "price": 75000, "booked": false, "selected": false },
        { "name": "B9", "price": 75000, "booked": false, "selected": false },
        { "name": "B10", "price": 75000, "booked": false, "selected": false },
        { "name": "B11", "price": 75000, "booked": false, "selected": false },
        { "name": "B12", "price": 75000, "booked": false, "selected": false }
      ]
    },
    {
      "row": "C",
      "seats": [
        { "name": "C1", "price": 75000, "booked": false, "selected": false },
        { "name": "C2", "price": 75000, "booked": false, "selected": false },
        { "name": "C3", "price": 75000, "booked": false, "selected": false },
        { "name": "C4", "price": 75000, "booked": false, "selected": false },
        { "name": "C5", "price": 75000, "booked": false, "selected": false },
        { "name": "C6", "price": 75000, "booked": false, "selected": false },
        { "name": "C7", "price": 75000, "booked": false, "selected": false },
        { "name": "C8", "price": 75000, "booked": false, "selected": false },
        { "name": "C9", "price": 75000, "booked": false, "selected": false },
        { "name": "C10", "price": 75000, "booked": false, "selected": false },
        { "name": "C11", "price": 75000, "booked": false, "selected": false },
        { "name": "C12", "price": 75000, "booked": false, "selected": false }
      ]
    },
    {
      "row": "D",
      "seats": [
        { "name": "D1", "price": 75000, "booked": false, "selected": false },
        { "name": "D2", "price": 75000, "booked": false, "selected": false },
        { "name": "D3", "price": 75000, "booked": false, "selected": false },
        { "name": "D4", "price": 75000, "booked": false, "selected": false },
        { "name": "D5", "price": 75000, "booked": false, "selected": false },
        { "name": "D6", "price": 75000, "booked": false, "selected": false },
        { "name": "D7", "price": 75000, "booked": false, "selected": false },
        { "name": "D8", "price": 75000, "booked": false, "selected": false },
        { "name": "D9", "price": 75000, "booked": false, "selected": false },
        { "name": "D10", "price": 75000, "booked": false, "selected": false },
        { "name": "D11", "price": 75000, "booked": false, "selected": false },
        { "name": "D12", "price": 75000, "booked": false, "selected": false }
      ]
    },
    {
      "row": "E",
      "seats": [
        { "name": "E1", "price": 75000, "booked": false, "selected": false },
        { "name": "E2", "price": 75000, "booked": false, "selected": false },
        { "name": "E3", "price": 75000, "booked": false, "selected": false },
        { "name": "E4", "price": 75000, "booked": false, "selected": false },
        { "name": "E5", "price": 75000, "booked": false, "selected": false },
        { "name": "E6", "price": 75000, "booked": false, "selected": false },
        { "name": "E7", "price": 75000, "booked": false, "selected": false },
        { "name": "E8", "price": 75000, "booked": false, "selected": false },
        { "name": "E9", "price": 75000, "booked": false, "selected": false },
        { "name": "E10", "price": 75000, "booked": false, "selected": false },
        { "name": "E11", "price": 75000, "booked": false, "selected": false },
        { "name": "E12", "price": 75000, "booked": false, "selected": false }
      ]
    },
    {
      "row": "F",
      "seats": [
        { "name": "F1", "price": 75000, "booked": false, "selected": false },
        { "name": "F2", "price": 75000, "booked": false, "selected": false },
        { "name": "F3", "price": 75000, "booked": false, "selected": false },
        { "name": "F4", "price": 75000, "booked": false, "selected": false },
        { "name": "F5", "price": 75000, "booked": false, "selected": false },
        { "name": "F6", "price": 75000, "booked": false, "selected": false },
        { "name": "F7", "price": 75000, "booked": false, "selected": false },
        { "name": "F8", "price": 75000, "booked": false, "selected": false },
        { "name": "F9", "price": 75000, "booked": false, "selected": false },
        { "name": "F10", "price": 75000, "booked": false, "selected": false },
        { "name": "F11", "price": 75000, "booked": false, "selected": false },
        { "name": "F12", "price": 75000, "booked": false, "selected": false }
      ]
    },
    {
      "row": "G",
      "seats": [
        { "name": "G1", "price": 75000, "booked": false, "selected": false },
        { "name": "G2", "price": 75000, "booked": false, "selected": false },
        { "name": "G3", "price": 75000, "booked": false, "selected": false },
        { "name": "G4", "price": 75000, "booked": false, "selected": false },
        { "name": "G5", "price": 75000, "booked": false, "selected": false },
        { "name": "G6", "price": 75000, "booked": false, "selected": false },
        { "name": "G7", "price": 75000, "booked": false, "selected": false },
        { "name": "G8", "price": 75000, "booked": false, "selected": false },
        { "name": "G9", "price": 75000, "booked": false, "selected": false },
        { "name": "G10", "price": 75000, "booked": false, "selected": false },
        { "name": "G11", "price": 75000, "booked": false, "selected": false },
        { "name": "G12", "price": 75000, "booked": false, "selected": false }
      ]
    },
    {
      "row": "H",
      "seats": [
        { "name": "H1", "price": 75000, "booked": false, "selected": false },
        { "name": "H2", "price": 75000, "booked": false, "selected": false },
        { "name": "H3", "price": 75000, "booked": false, "selected": false },
        { "name": "H4", "price": 75000, "booked": false, "selected": false },
        { "name": "H5", "price": 75000, "booked": false, "selected": false },
        { "name": "H6", "price": 75000, "booked": false, "selected": false },
        { "name": "H7", "price": 75000, "booked": false, "selected": false },
        { "name": "H8", "price": 75000, "booked": false, "selected": false },
        { "name": "H9", "price": 75000, "booked": false, "selected": false },
        { "name": "H10", "price": 75000, "booked": false, "selected": false },
        { "name": "H11", "price": 75000, "booked": false, "selected": false },
        { "name": "H12", "price": 75000, "booked": false, "selected": false }
      ]
    },
    {
      "row": "I",
      "seats": [
        { "name": "I1", "price": 75000, "booked": false, "selected": false },
        { "name": "I2", "price": 75000, "booked": false, "selected": false },
        { "name": "I3", "price": 75000, "booked": false, "selected": false },
        { "name": "I4", "price": 75000, "booked": false, "selected": false },
        { "name": "I5", "price": 75000, "booked": false, "selected": false },
        { "name": "I6", "price": 75000, "booked": false, "selected": false },
        { "name": "I7", "price": 75000, "booked": false, "selected": false },
        { "name": "I8", "price": 75000, "booked": false, "selected": false },
        { "name": "I9", "price": 75000, "booked": false, "selected": false },
        { "name": "I10", "price": 75000, "booked": false, "selected": false },
        { "name": "I11", "price": 75000, "booked": false, "selected": false },
        { "name": "I12", "price": 75000, "booked": false, "selected": false }
      ]
    },
    {
      "row": "J",
      "seats": [
        { "name": "J1", "price": 75000, "booked": false, "selected": false },
        { "name": "J2", "price": 75000, "booked": false, "selected": false },
        { "name": "J3", "price": 75000, "booked": false, "selected": false },
        { "name": "J4", "price": 75000, "booked": false, "selected": false },
        { "name": "J5", "price": 75000, "booked": false, "selected": false },
        { "name": "J6", "price": 75000, "booked": false, "selected": false },
        { "name": "J7", "price": 75000, "booked": false, "selected": false },
        { "name": "J8", "price": 75000, "booked": false, "selected": false },
        { "name": "J9", "price": 75000, "booked": false, "selected": false },
        { "name": "J10", "price": 75000, "booked": false, "selected": false },
        { "name": "J11", "price": 75000, "booked": false, "selected": false },
        { "name": "J12", "price": 75000, "booked": false, "selected": false }
      ]
    }
  ],
  list: []
}



const seatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addToList":
      const index = state.list.findIndex((seat) => seat.name === action.position.name)





      if (index === -1) {
        const newList = [...state.list, { ...action.position }];
        return { ...state, list: newList }

      }
      console.log('dat roi bro')
    default:
      return state;
  }
}


export default seatReducer