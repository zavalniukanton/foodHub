export const replyMessage = ({ messages, setMessages }) => {
  if (messages.length === 1) {
    setTimeout(() => {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Date.now(),
          createdAt: new Date(),
          content: "Hello",
          user: {
            id: "user2",
            name: "Ilona",
          },
        },
      ]);
    }, 2000);
  }

  if (messages.length === 3) {
    setTimeout(() => {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Date.now(),
          content: "I am fine, thank you",
          createdAt: new Date(),
          user: {
            id: "user2",
            name: "Ilona",
          },
        },
      ]);
    }, 3000);
  }

  if (messages.length === 4) {
    setTimeout(() => {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Date.now(),
          content: "What about you?",
          createdAt: new Date(),
          user: {
            id: "user2",
            name: "Ilona",
          },
        },
      ]);
    }, 2000);
  }

  if (messages.length === 7) {
    setTimeout(() => {
      setMessages((prevState) => [
        ...prevState,
        {
          id: Date.now(),
          content:
            "It is a bit tough, as I have 2 mentees. How about yours? Do you enjoy it?",
          createdAt: new Date(),
          user: {
            id: "user2",
            name: "Ilona",
          },
        },
      ]);
    }, 2000);
  }
};
