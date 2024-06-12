import {
  createElement,
  useState,
  createContext,
  type PropsWithChildren,
  useContext,
} from 'react'


interface State {
  toggle: () => void,
  isOpen: boolean,
}

export const DrawerContext = createContext<State>({
  toggle: () => { },
  isOpen: false,
});

export function useDrawer() {
  const {isOpen, toggle} = useContext<State>(DrawerContext);

  return {
    toggle, 
    isOpen ,
  }
}

export default function Drawer({ children }: PropsWithChildren) {
  const [open, setOpen]= useState(false);

  const state = {
    toggle: () => setOpen(s => !s),
    isOpen: open,
  }

  return createElement(
    DrawerContext.Provider,
    { value: state },
    children
  );
}




























