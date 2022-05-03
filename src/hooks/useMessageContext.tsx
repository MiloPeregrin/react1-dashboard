import { Consumer, createContext, FC, ReactNode, useContext } from "react";
import { useState } from "react";

export interface IMessage {
  type: "success" | "warning" | "error" | "info";
  label?: string;
  message?: string;
}

interface IMessageContext {
  messages: IMessage[];
  addMessage: (
    type: "success" | "warning" | "error" | "info",
    message: string
  ) => void;
  addLabel: (
    type: "success" | "warning" | "error" | "info",
    label: string
  ) => void;
  setMessage: (
    type: "success" | "warning" | "error" | "info",
    message: string
  ) => void;
  setLabel: (
    type: "success" | "warning" | "error" | "info",
    label: string
  ) => void;
  clearMessages: () => void;
}

const MessageContext = createContext<IMessageContext>(undefined!);

interface IMessageContextProvider {
  children: React.ReactNode;
}; 
export function MessageContextProvider({ children }:IMessageContextProvider) {
  const [messages, setMessages] = useState<IMessage[]>([]);

  function clearMessages() {
    setMessages((_messages) => []);
  }

  function addMessage(
    type: "success" | "warning" | "error" | "info",
    message: string
  ) {
    setMessages((messages)=>[...messages, { type: type, message: message }]);
  }

  function addLabel(
    type: "success" | "warning" | "error" | "info",
    label: string
  ) {
    setMessages((messages) => [...messages, { type: type, label: label }]);
  }

  function setMessage(
    type: "success" | "warning" | "error" | "info",
    message: string
  ) {
    setMessages([{ type: type, message: message }]);
  }

  function setLabel(
    type: "success" | "warning" | "error" | "info",
    label: string
  ) {
    setMessages([{ type: type, label: label }]);
  }
  
  return (
    <MessageContext.Provider
      value={{
        messages,
        setMessage,
        setLabel,
        addMessage,
        addLabel,
        clearMessages,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

export function useMessageContext(): IMessageContext {
  return useContext(MessageContext);
}

export function withMessageContext(Component:any) {
  return (props:any) => {
    return (
      <MessageContextProvider>
        <Component {...props}/>
      </MessageContextProvider>
    );
    }
}
