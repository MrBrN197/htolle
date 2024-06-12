import {
  useState,
  createContext,
  useContext,
  createElement,
  type PropsWithChildren,
  useCallback,
} from "react"

import MuiSnackBar from "@mui/material/Snackbar"
import Typography from "@mui/material/Typography"

export type PushNotificationFn = (message: string) => void
export type GetNotificationFn = () => Array<Notification>;
interface Notification { id: string, message: string }

interface State {
  open: boolean,
  notify: PushNotificationFn
  setOpen: (isOpen: boolean) => void,
  getNotifications: GetNotificationFn,
}

const SnackBarContext = createContext<State>({
  open: false,
  notify: () => { },
  setOpen: () => { },
  getNotifications: (() => ([])) as GetNotificationFn,
});

let number = 0;
function* enumerator() {
  while (true) {
    number += 1;
    yield number;
  }
}
const nextNumber = enumerator();

export default function({ children }: PropsWithChildren) {
  const [isOpen, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Array<Notification>>([]);

  const queuePushNotification = useCallback(
    (message: string) => {
      setOpen(true);
      const notification = {
        id: nextNumber.next().value!.toString(),
        message: message,
      };
      setNotifications(() => ([notification])); // TODO: stacking

    }, [setOpen, setNotifications]
  );

  function getNotifications() {
    return notifications;
  }

  return createElement(
    SnackBarContext.Provider,
    {
      value: {
        open: isOpen,
        getNotifications,
        notify: queuePushNotification,
        setOpen: (isOpen: boolean) =>  setOpen(isOpen) ,
      },
    },
    children
  );
}

export function SnackBar() {
  const { open, getNotifications, setOpen } = useContext(SnackBarContext);

  return getNotifications().map(notification =>
    createElement(
      MuiSnackBar,
      {
        key: notification.id,
        open: open,
        color: 'primary',
        onClose: () => setOpen(false),
        autoHideDuration: 1000,
        message: createElement(
          Typography,
          {
            color: 'primary'
          },
          notification.message,
        ),
      },
      null,
    ));
}

export function useSnackBar() {
  const state = useContext(SnackBarContext);
  return state;
}
