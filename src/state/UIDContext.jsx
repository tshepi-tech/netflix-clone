// NPM packages
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext(null);

// Methods
// For the parent
export function UIDProvider({ children }) {
  // Local state
  const [uid, setUID] = useState(null);
  const [uidAdmin, setUIDadmin] = useState(null);

  // Properties
  const value = { uid, uidAdmin, setUID, setUIDadmin };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// For the child
export function useUID() {
  const context = useContext(Context);
  const errorText =
    "To use UseUID(), you need to wrap the parent component with <UIDProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
