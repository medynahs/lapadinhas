import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h1 {
    display: flex;
    justify-content: center;

    margin-bottom: 50px;
  }
`;

export const AddButton = styled.button`
  padding: 10px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  background-color: teal;
  color: white;
  font-weight: bold;
`;

// .clientes {
//     display: flex;

//     .cliente {
//       flex: 1;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       gap: 10px;

//       img {
//         width: 200px;
//         height: 300px;
//         object-fit: cover;
//       }

//       button {
//         padding: 3px 6px;
//         background-color: white;
//         cursor: pointer;
//       }
//       .delete {
//         border: 1px solid rgb(245, 191, 191);
//         color: rgb(242, 100, 100);
//       }
//       .update {
//         border: 1px solid rgb(204, 204, 243);
//         color: rgb(139, 139, 234);
//       }
//     }
