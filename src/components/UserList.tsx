// import { useState } from 'react';

// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// }

// function UserList() {
//   const users: User[] = [
//     { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
//     { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
//     { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' },
// ];

// const [hoveredUser, setHoveredUser] = useState(null);

// const handleUserHover = (userId: number, isHovering: boolean) => {
//   if (isHovering) {
//     setHoveredUser(users.find((user) => user.id === userId) || null);
//   } else {
//     setHoveredUser(null);
//   }
// };

// return (
//   <div>
//     <ul>{users.map((user)=>(
//       <li key={user.id}onMouseEnter={()=> handleUserHover(user.id, true)}onMouseLeave={() => handleUserHover(user.id, false)}>{user.name}</li>))}</ul>{hoveredUser&&(<divclassName="card"><h2>{hoveredUser.name}</h2><p>Age:{hoveredUser.age}</p><p>Email: {hoveredUser.email}</p></divclassName=>)}</div>);

//     }

// export default UserList;
