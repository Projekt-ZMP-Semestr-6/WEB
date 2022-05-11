/* eslint-disable @typescript-eslint/naming-convention */
import { toast } from 'react-toastify';

interface Notification {
  name: string;
  highest_price: number;
  last_price: number;
  lowest_price: number;
  new_price: number;
}

export default function createNotification(content: Notification) {
  const { highest_price, last_price, lowest_price, new_price, name } = content;

  toast.info(
    `
      Game name: ${name}\n
      New price: ${new_price} $\n
      Last price: ${last_price} $\n
      Lowest price: ${lowest_price} $\n
      Highest price: ${highest_price} $\n
    `,
    { autoClose: false }
  );
}
