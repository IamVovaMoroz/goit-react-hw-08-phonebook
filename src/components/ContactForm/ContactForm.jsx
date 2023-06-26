// import React, { useState } from 'react';
// import Notiflix from 'notiflix';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contacts/operations';
// import { selectContacts } from 'redux/contacts/selectors';
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   VStack,
//   Center,
// } from '@chakra-ui/react';

// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     if (name === 'name') {
//       setName(value);
//     } else if (name === 'number') {
//       setNumber(value);
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     const existingContact = contacts.find(
//       contact => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (existingContact) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     dispatch(addContact({ name, number }));
//     Notiflix.Notify.success(`${name} has been added to contacts.`);
//     setName('');
//     setNumber('');
//   };

//   return (
//     <Center flexDirection="column">
//       <form onSubmit={handleSubmit}>
//         <VStack spacing={4} align="center">
//           <FormControl mt="4" isRequired>
//             <FormLabel>Name</FormLabel>
//             <Input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={name}
//               onChange={handleChange}
//             />
//           </FormControl>
//           <FormControl mt="4" isRequired>
//             <FormLabel>Number</FormLabel>
//             <Input
//               type="text"
//               name="number"
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={number}
//               onChange={handleChange}
//             />
//           </FormControl>
//           <Button type="submit" colorScheme="teal">
//             Add contact
//           </Button>
//         </VStack>
//       </form>
//     </Center>
//   );
// };



// import React, { useState } from 'react';
// import Notiflix from 'notiflix';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contacts/operations';
// import { selectContacts } from 'redux/contacts/selectors';
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   VStack,
//   Center,
// } from '@chakra-ui/react';

// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'name') {
//       setName(value);
//     } else if (name === 'number') {
//       setNumber(value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const existingContact = contacts.find(
//       (contact) => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (existingContact) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     dispatch(addContact({ name, number }));
//     Notiflix.Notify.success(`${name} has been added to contacts.`);
//     setName('');
//     setNumber('');
//   };

//   return (
//     <Center flexDirection="column">
//       <form onSubmit={handleSubmit}>
//         <VStack spacing={4} align="center">
//           <FormControl mt="4" isRequired>
//             <FormLabel>Name</FormLabel>
//             <Input
//               type="text"
//               name="name"
//               pattern="^[a-zA-Zа-яА-Я]+([ '-][a-zA-Zа-яА-Я]+)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//               value={name}
//               onChange={handleChange}
//             />
//           </FormControl>
//           <FormControl mt="4" isRequired>
//             <FormLabel>Number</FormLabel>
//             <Input
//               type="text"
//               name="number"
//               pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//               value={number}
//               onChange={handleChange}
//             />
//           </FormControl>
//           <Button type="submit" colorScheme="teal">
//             Add contact
//           </Button>
//         </VStack>
//       </form>
//     </Center>
//   );
// };

// без стилей


// import React, { useState } from 'react';
// import Notiflix from 'notiflix';
// import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contacts/operations';
// import { selectContacts } from 'redux/contacts/selectors';

// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'name') {
//       setName(value);
//     } else if (name === 'number') {
//       setNumber(value);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const existingContact = contacts.find(
//       (contact) => contact.name.toLowerCase() === name.toLowerCase()
//     );
//     if (existingContact) {
//       alert(`${name} is already in contacts.`);
//       return;
//     }

//     dispatch(addContact({ name, number }));
//     Notiflix.Notify.success(`${name} has been added to contacts.`);
//     setName('');
//     setNumber('');
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottom: '1rem' }}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+([ '-][a-zA-Zа-яА-Я]+)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={handleChange}
//           />
//         </div>
//         <div style={{ marginBottom: '1rem' }}>
//           <label htmlFor="number">Number</label>
//           <input
//             type="text"
//             id="number"
//             name="number"
//             pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Add contact</button>
//       </form>
//     </div>
//   );
// };


import React, { useState } from 'react';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

import { Button, Input, FormContainer, Form, FormControl, Label } from './ContactForm.styles';












export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingContact = contacts.find(
      (contact) => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    Notiflix.Notify.success(`${name} has been added to contacts.`);
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+([ '-][a-zA-Zа-яА-Я]+)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor="number">Number</Label>
          <Input
            type="text"
            id="number"
            name="number"
            pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </FormControl>
        <Button type="submit">Add contact</Button>
      </Form>
    </FormContainer>
  );
};
